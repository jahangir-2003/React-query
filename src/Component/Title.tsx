import React from "react";

const Title = ({ title }: { title: string }) => {
  return (
    <h1 className="flex flex-row gap-2 items-center my-5 ml-2">
      <span className="h-8 border-l-4 border-blue-950"></span>
      <span className="text-2xl capitalize ">{title}</span>
    </h1>
  );
};

export default Title;
