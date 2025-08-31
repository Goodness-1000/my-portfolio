import React from "react";
import Button from "../components/Button";

const ContactPage = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-12 items-center justify-center px-6 md:px-24 py-16 min-h-screen bg-[#222831]">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-start relative">
        <h1 className="text-5xl md:text-7xl text-white font-bold leading-tight">
          Got a project in <br />
          <span className="text-pink-400">mind?</span>
        </h1>

        <div className="relative mt-12">
          <img
            src="/section4arrow.svg"
            className="absolute -left-12 top-0 w-40"
            alt="arrow down"
          />
          <img
            src="/climbing.svg"
            className="w-[20vw] max-w-sm object-cover relative z-10 left-32"
            alt="climbing"
          />
          <img
            src="/shadow4.svg"
            className="w-[600px] max-w-xs object-cover absolute top-[355px] left-32"
            alt="shadow"
          />
        </div>
      </div>

      {/* Right Section (Form) */}
      <div className="w-full lg:w-1/2 bg-transparent">
        <img src="/keyboard.svg" className="pb-8 w-40 mx-auto lg:mx-0" alt="keyboard" />

        <div className="flex flex-col gap-6">
          {/* Name + Email */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col w-full">
              <h3 className="text-white text-xl mb-2">Your Name</h3>
              <input
                className="bg-[#393E4680] text-white rounded-md py-2 px-3 outline-none"
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div className="flex flex-col w-full">
              <h3 className="text-white text-xl mb-2">Your Email</h3>
              <input
                className="bg-[#393E4680] text-white rounded-md py-2 px-3 outline-none"
                type="email"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <h3 className="text-white text-xl mb-2">Your Message</h3>
            <textarea
              className="bg-[#393E4680] text-white rounded-md p-3 w-full h-40 outline-none resize-none"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          {/* Button */}
          <div>
            <Button title="Send Message" green />
          </div>

          {/* Mail Icon */}
          <div className="flex justify-end pt-6">
            <img src="/mail4.svg" alt="mail" className="w-24" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
