import { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import workerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

// Draws every page of the PDF as a canvas, so it scrolls like normal content.
// Used on phones, where the browser's embedded PDF viewer only shows the first page.
export default function PdfPages(props: { file: string; onReady: () => void }) {
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

  // tells the popup to remove its loader
  const { onReady } = props;
  const done = ready || failed;
  useEffect(() => {
    if (done) onReady();
  }, [done, onReady]);

  const message = (text: string) => (
    <div className="p-6 text-center text-slate-800">{text}</div>
  );

  return (
    <div ref={containerRef} className="relative w-full">
      {width > 0 && (
        <Document
          file={props.file}
          onLoadSuccess={(pdf) => setNumPages(pdf.numPages)}
          onLoadError={() => setFailed(true)}
          externalLinkTarget="_blank"
          loading=""
          error={message('Could not show the resume here. Use the Download button instead.')}
          className={
            'transition-opacity duration-300 ' + (done ? 'opacity-100' : 'opacity-0')
          }
        >
          {Array.from({ length: numPages }, (_, idx) => (
            <Page
              key={idx}
              pageNumber={idx + 1}
              width={width}
              renderTextLayer={false}
              loading=""
              onRenderSuccess={() => setRenderedPages((count) => count + 1)}
              className="border-b border-slate-300"
            />
          ))}
        </Document>
      )}
    </div>
  );
}
