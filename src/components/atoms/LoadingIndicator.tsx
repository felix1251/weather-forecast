import { createPortal } from "react-dom";
import { IoCloud } from "react-icons/io5";

const LoadingIndicator = () => {
  return (
    <>
      {createPortal(
        <div className="fixed flex gap-3 top-6 left-6 text-lg font-medium text-primary">
          <IoCloud className="text-primary text-2xl" /> Loading....
        </div>,
        window.document.body
      )}
    </>
  );
};

export default LoadingIndicator;
