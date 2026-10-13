import { useState, useEffect, useCallback, lazy, Suspense, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Icon } from '@iconify/react';
import cv from '../assets/cv.pdf';
import Button from '../components/Button';
import Data from '../Data/Data';
import ResumeLoader from './ResumeLoader';

const PdfPages = lazy(() => import('./PdfPages'));

// phones and browsers without a built-in PDF viewer can't scroll a PDF inside an iframe
const showPdfPages =
  !navigator.pdfViewerEnabled || window.matchMedia('(pointer: coarse)').matches;

export default function Resume(props: { children?: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const [pagesReady, setPagesReady] = useState(false);
  const onPagesReady = useCallback(() => setPagesReady(true), []);

  const togglePopup = () => {
    setPagesReady(false);
    setIsOpen(!isOpen);
  };

  // stop the page behind the popup from scrolling while the resume is open
  useEffect(() => {
    if (!isOpen) return;
    const html = document.documentElement;
    const prevHtml = html.style.overflow;
    const prevBody = document.body.style.overflow;
    html.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    return () => {
      html.style.overflow = prevHtml;
      document.body.style.overflow = prevBody;
    };
  }, [isOpen]);

  const modal = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={togglePopup}
    >
      <div
        className="relative bg-white w-[100%] h-[100%] md:w-[90%] md:h-[90%] md:rounded-xl shadow-lg flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Prevent closing on inner click
      >
        {/* Toolbar: title, download and close */}
        <div className="flex shrink-0 items-center justify-between gap-3 bg-slate-800 px-4 py-2 text-white">
          <span className="truncate text-lg font-semibold">Resume</span>
          <div className="flex items-center gap-2">
            <a
              href={cv}
              download={Data.hero.resume_name || 'resume.pdf'}
              className="flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-200"
            >
              <Icon icon="mdi:download" className="h-5 w-5" />
              Download
            </a>
            <button
              onClick={togglePopup}
              className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-slate-600"
              aria-label="Close"
            >
              <Icon icon="mdi:close" className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* scrollable wrapper: on phones the iframe grows to the full PDF height, so the wrapper scrolls it */}
        <div
          className={
            'resume-scroll w-full flex-1 min-h-0 overscroll-contain bg-slate-200 ' +
            // always-on scrollbar keeps the width fixed, so the pages are not redrawn when it appears
            (showPdfPages ? 'overflow-y-scroll overflow-x-hidden' : 'overflow-auto')
          }
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {showPdfPages ? (
            <div className="relative w-full">
              {/* one loader for the whole wait, so its animation is never restarted */}
              {!pagesReady && <ResumeLoader />}
              <Suspense fallback={null}>
                <PdfPages file={cv} onReady={onPagesReady} />
              </Suspense>
            </div>
          ) : (
            <iframe
              src={cv}
              title="Resume"
              className="w-full h-full border-0"
            />
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="flex justify-center items-center">
        {props.children ? (
          <div onClick={togglePopup} className="inline-block cursor-pointer">
            {props.children}
          </div>
        ) : (
          <Button.PillCircle onClick={togglePopup} text="View Resume" />
        )}
      </div>

      {isOpen && createPortal(modal, document.body)}
    </>
  );
}
