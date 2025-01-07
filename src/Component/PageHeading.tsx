import React from "react";

const PageHeading = ({ heading }: { heading: string }) => {
  return (
    <div className="underline underline-offset-4 my-5">
      <span>Home</span>
      {heading && (
        <span className="capitalize text-slate-700"> / {heading}</span>
      )}
    </div>
  );
};

export default PageHeading;
