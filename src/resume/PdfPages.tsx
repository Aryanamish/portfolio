import { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import workerSrc from 'pdfjs-dist/legacy/build/pdf.worker.min.mjs?url';
import 'react-pdf/dist/Page/AnnotationLayer.css';

// legacy build of the PDF engine, so older phone browsers can run it (see the alias in vite.config.ts)
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

// Draws every page of the PDF as a canvas, so it scrolls like normal content.
// Used on phones, where the browser's embedded PDF viewer only shows the first page.
export default function PdfPages(props: {
  file: string;
  onReady: () => void;
  onError: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [numPages, setNumPages] = useState(0);
  const [renderedPages, setRenderedPages] = useState(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    // ignore sub-pixel changes so the pages are not redrawn for nothing
    const measure = () =>
      setWidth((prev) => (Math.abs(prev - el.clientWidth) > 1 ? el.clientWidth : prev));
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    measure();
    return () => observer.disconnect();
  }, []);

  // pages stay hidden until all of them are drawn, then fade in together
  const ready = numPages > 0 && renderedPages >= numPages;

  // tells the popup to remove its loader, or to show its fallback
  const { onReady, onError } = props;
  useEffect(() => {
    if (failed) onError();
    else if (ready) onReady();
  }, [ready, failed, onReady, onError]);

  return (
    <div ref={containerRef} className="relative w-full">
      {width > 0 && (
        <Document
          file={props.file}
          onLoadSuccess={(pdf) => setNumPages(pdf.numPages)}
          onLoadError={() => setFailed(true)}
          externalLinkTarget="_blank"
          loading=""
          error=""
          className={
            'transition-opacity duration-300 ' + (ready ? 'opacity-100' : 'opacity-0')
          }
        >
          {Array.from({ length: numPages }, (_, idx) => (
            <Page
              key={idx}
              pageNumber={idx + 1}
              width={width}
              renderTextLayer={false}
              loading=""
              onRenderError={() => setFailed(true)}
              onRenderSuccess={() => setRenderedPages((count) => count + 1)}
              className="border-b border-slate-300"
            />
          ))}
        </Document>
      )}
    </div>
  );
}
