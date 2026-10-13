import { useState, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import cv from '../assets/cv.pdf';
import Button from '../components/Button';
import Data from '../Data/Data';

export default function Resume(props: { children?: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => setIsOpen(!isOpen);

  const modal = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={togglePopup}
    >
      <div
        className="relative bg-white w-[100%] h-[100%] md:w-[90%] md:h-[90%] rounded-xl shadow-lg flex flex-col"
        onClick={(e) => e.stopPropagation()} // Prevent closing on inner click
      >
        {/* Download and Close Buttons */}
        <div className="absolute bottom-2 right-10 flex flex-col gap-2">
          <a
            href={cv}
            download={Data.hero.resume_name || 'resume.pdf'}
            className="rounded-lg bg-green-400 p-1 hover:text-black text-2xl font-bold"
          >
            Download
          </a>
          <button
            onClick={togglePopup}
            className="rounded-lg bg-red-400 p-1 hover:text-black text-2xl font-bold"
            aria-label="Close"
          >
            Close
          </button>
        </div>

        {/* Iframe */}
        <iframe
          src={cv}
          title="Embedded Content"
          className="w-full h-full rounded-b-xl border-0"
        />
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
