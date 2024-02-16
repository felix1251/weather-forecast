import React from "react";

const CityNotFound: React.FunctionComponent = () => {
  return (
    <div className="grid place-items-center h-full w-full">
      <h2 className="text-red-500 text-4xl font-semibold">
        Error 404: City Not found
      </h2>
    </div>
  );
};

export default CityNotFound;
