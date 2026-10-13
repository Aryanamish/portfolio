import Loader from '../components/Loader';

// Same loader as the contact form, shown while the resume pages are being drawn
export default function ResumeLoader() {
  return (
    <div className="absolute inset-x-0 top-0 h-[70vh] flex justify-center items-center">
      <div className="bg-black/60 p-6 rounded-xl">
        <Loader />
      </div>
    </div>
  );
}
