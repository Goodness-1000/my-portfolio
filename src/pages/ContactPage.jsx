import React from 'react'

const ContactPage = () => {
  return (
    <div> <div className="text-center space-y-6">
    <h2 className="text-4xl md:text-6xl font-bold text-white">
      Get in <span className="text-pink-400">Touch</span>
    </h2>
    <p className="text-gray-300 max-w-xl mx-auto">
      Interested in working together? Let’s connect!
    </p>
  </div>

  <form className="max-w-2xl mx-auto mt-10 space-y-6">
    <input
      type="text"
      placeholder="Your Name"
      className="w-full p-4 rounded-lg bg-[#1F2937] text-white focus:outline-none"
    />
    <input
      type="email"
      placeholder="Your Email"
      className="w-full p-4 rounded-lg bg-[#1F2937] text-white focus:outline-none"
    />
    <textarea
      rows="5"
      placeholder="Your Message"
      className="w-full p-4 rounded-lg bg-[#1F2937] text-white focus:outline-none"
    ></textarea>
    <Button title="Send Message" green />
  </form></div>
  )
}

export default ContactPage