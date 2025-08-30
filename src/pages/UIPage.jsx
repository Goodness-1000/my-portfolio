import React from "react";
import Works from "../components/Works";

const UIPage = () => {
  return (
    <div className="px-6 md:px-24 py-12">
      <h1 className="text-4xl font-bold text-white mb-6">UI Projects</h1>
      <div className="flex flex-wrap gap-6">
        <Works img="/ui1.svg" />
        <Works img="/ui2.svg" />
      </div>
    </div>
  );
};

export default UIPage;
