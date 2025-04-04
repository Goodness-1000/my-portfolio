import React from "react";

function Button({ green,title }) {
  return (
    <button
      className={`${
        green ? " bg-pink-400 text-[#EEEEE]" : "bg-[#393E46BF] text-white"
      } px-10 py-2 rounded-full font-medium text-s`}
    >
      {title}
    </button>
  );
}

export default Button;