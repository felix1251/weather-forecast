import { IoCloud } from "react-icons/io5";

const LoadingIndicator = () => {
  return (
    <div className="flex gap-3 py-6 px-6 text-lg font-medium text-primary">
      <IoCloud className="text-primary text-2xl" /> Loading....
    </div>
  );
};

export default LoadingIndicator;
