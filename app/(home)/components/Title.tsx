import React from "react";

const Title = ({ title, className }: { title: string; className?: string }) => {
  return (
    <div className={className}>
      <h1 className="text-3xl font-bold hover:text-green-500">{title}</h1>
      <div className="w-40 h-2 bg-yellow-500 rounded-full underline underline-offset-8"></div>
      <div className="w-40 h-2 bg-green-500 rounded-full underline underline-offset-8 translate-x-2"></div>
    </div>
  );
};

export default Title;
