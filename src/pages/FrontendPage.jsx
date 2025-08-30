import React from "react";
import Works from "../components/Works";

const FrontendPage = () => {
  return (
    <div className="px-6 md:px-24 py-12">
      <h1 className="text-4xl font-bold text-white mb-6">Front-end Projects</h1>
      <div className="flex flex-wrap gap-6">
        <Works img="/frontend1.svg" />
        <Works img="/frontend2.svg" />
      </div>
    </div>
  );
};

export default FrontendPage;
