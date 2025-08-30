import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Button from "./components/Button";
import Works from "./components/Works";

// Import new pages
import FrontendPage from "./pages/FrontendPage";
import UIPage from "./pages/UIPage";
import WebdevPage from "./pages/WebdevPage";
import AllWorksPage from "./pages/AllWorksPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <Router>
      <div className="relative bg-[#222831] overflow-x-hidden">
        {/* HEADER */}
        <header className="flex flex-col md:flex-row justify-between items-center px-6 md:px-24 py-4">
          <h1 className="text-[#EEEEEE] font-bold text-xl md:text-2xl mb-4 md:mb-0">
            GoodyWain-Design
          </h1>
          <nav className="flex space-x-6 text-sm md:text-base">
            <Link to="/" className="text-[#EEEEEE] hover:text-pink-400">Home</Link>
            <Link to="/about" className="text-[#EEEEEE] hover:text-pink-400">About me</Link>
            <Link to="/contact" className="text-[#EEEEEE] hover:text-pink-400">Contact</Link>
          </nav>
        </header>

        {/* ROUTES */}
        <Routes>
          {/* HOME PAGE */}
          <Route path="/" element={
            <div>
              {/* HERO */}
              <section className="flex flex-col-reverse lg:flex-row gap-8 items-center justify-between px-6 md:px-24 py-12">
                {/* Left Text */}
                <div className="w-full lg:w-1/2 flex flex-col space-y-6 text-center lg:text-left">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                    Creative Frontend <span className="text-pink-400">Developer</span>
                  </h1>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
                    {/* Hire me scrolls to Contact */}
                    <Link to="/contact">
                      <Button title="Hire me" green />
                    </Link>
                    {/* Download CV links to a file */}
                    <a href="/GoodnessWainoCV.pdf" download>
                      <Button title="Download CV" />
                    </a>
                  </div>
                </div>

                {/* Right Images */}
                <div className="w-full lg:w-1/2 relative flex justify-center">
                  <img src="/bgimage1.svg" className="w-[80%] max-w-sm md:max-w-md" alt="Background decorative pattern" />
                  <img src="/image1bottom.svg" className="absolute bottom-0 right-10 w-1/3" alt="Decorative bottom shape" />
                  <img src="/image1.svg" className="absolute bottom-10 right-6 w-1/2" alt="Portrait of developer" />
                </div>
              </section>

              {/* ABOUT */}
              <section className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-24 py-16 gap-12">
                <div className="w-full lg:w-1/2 flex flex-col space-y-6 relative">
                  <h2 className="text-4xl md:text-6xl font-bold text-white">
                    About <span className="text-pink-400">me</span>
                  </h2>
                  <p className="text-white text-base leading-relaxed">
                    As a passionate and skilled software engineer, I specialize in developing efficient,
                    scalable, and user-friendly applications. With expertise in front-end technologies like
                    HTML, CSS, JavaScript, and frameworks such as React.js, I create intuitive web
                    experiences that enhance usability and performance...
                  </p>
                  {/* Read More button */}
                  <Link to="/about">
                    <Button title="Read More" />
                  </Link>
                </div>

                <div className="w-full lg:w-1/2 flex justify-center relative">
                  <img src="/bgimage2.svg" className="w-[80%] max-w-md" alt="About section background" />
                  <img src="/image2.svg" className="absolute top-4 w-[50%]" alt="Developer working illustration" />
                </div>
              </section>

              {/* WORKS */}
              <section id="works" className="relative flex flex-col items-center justify-center px-6 md:px-24 py-20">
                <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-8">
                  My Recent <span className="text-pink-400">Works</span>
                </h2>

                <div className="flex flex-wrap gap-4 justify-center mb-12">
                  <Link to="/works/all"><Button title="All" green /></Link>
                  <Link to="/works/frontend"><Button title="Front-end" /></Link>
                  <Link to="/works/ui"><Button title="UI" /></Link>
                  <Link to="/works/webdev"><Button title="Web-dev" /></Link>
                </div>

                <div className="flex flex-wrap gap-6 justify-center">
                  <Works img="/course-3.svg" />
                  <Works img="/course-2.svg" />
                  <Works img="/course-1.svg" />
                </div>
              </section>
            </div>
          } />

          {/* OTHER PAGES */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route path="/works/all" element={<AllWorksPage />} />
          <Route path="/works/frontend" element={<FrontendPage />} />
          <Route path="/works/ui" element={<UIPage />} />
          <Route path="/works/webdev" element={<WebdevPage />} />
        </Routes>

        {/* FOOTER */}
        <footer className="flex-col gap-16 h-[50vh] items-center justify-center px-24">
          <div className='flex gap-16 justify-center pt-32'>
            <Link to="/" className='text-white flex'><img src='/home.svg' alt="" />Home</Link>
            <Link to="/about" className='text-white flex'><img src='/user.svg' alt="" />About me</Link>
            <Link to="/contact" className='text-white flex'><img src='/call.svg' alt="" />Contact</Link>
          </div>
          <div className='flex gap-8 justify-center pt-16'>
            <img src='/facebook.svg' alt="Facebook" />
            <img src='/instagram.svg' alt="Instagram" />
            <img src='/twitter.svg' alt="Twitter" />
            <img src='/youtube.svg' alt="YouTube" />
          </div>
          <div className='float-right pt-8'>
            <p className='text-sm text-white '>Terms of service - Privacy policy</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
