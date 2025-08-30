import React from "react";
import Works from "../components/Works";

const WebdevPage = () => {
  return (
    <div className="px-6 md:px-24 py-12">
      <h1 className="text-4xl font-bold text-white mb-6">Web Development Projects</h1>
      <div className="flex flex-wrap gap-6">
        <Works img="/web1.svg" />
        <Works img="/web2.svg" />
      </div>
    </div>
  );
};

export default WebdevPage;
