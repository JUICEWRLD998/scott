"use client";

import Image from "next/image";
import { useState } from "react";
import { ReactTyped } from "react-typed";
import { motion, AnimatePresence } from "framer-motion";
import About from "./components/About";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  };

  return (
    <main className="min-h-screen bg-zinc-950">
      {/* Header Section */}
      <header className="bg-black border-b border-zinc-800 sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-1">
              <div className="bg-blue-700 px-3.5 py-1.5 rounded">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-white font-bold text-xl ml-1">SCOTT</span>
            </div>

            {/* Desktop Nav Links */}
            <ul className="hidden md:flex items-center gap-11">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => handleNavClick(e, "home")}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleNavClick(e, "about")}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#features" 
                  onClick={(e) => handleNavClick(e, "features")}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  onClick={(e) => handleNavClick(e, "testimonials")}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Testimonials
                </a>
              </li>
            </ul>

            {/* Desktop Buy Now Button */}
            <button className="hidden md:block bg-blue-700 hover:bg-blue-800 text-white px-6 py-2.5 rounded transition-colors font-medium">
              Buy Now
            </button>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden"
              >
                <ul className="flex flex-col gap-4 pt-4 pb-2">
                  <li>
                    <a
                      href="#home"
                      onClick={(e) => handleNavClick(e, "home")}
                      className="block text-gray-400 hover:text-white transition-colors py-2 cursor-pointer"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      onClick={(e) => handleNavClick(e, "about")}
                      className="block text-gray-400 hover:text-white transition-colors py-2 cursor-pointer"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#features"
                      onClick={(e) => handleNavClick(e, "features")}
                      className="block text-gray-400 hover:text-white transition-colors py-2 cursor-pointer"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#testimonials"
                      onClick={(e) => handleNavClick(e, "testimonials")}
                      className="block text-gray-400 hover:text-white transition-colors py-2 cursor-pointer"
                    >
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <button className="w-full bg-blue-700 hover:bg-blue-800 text-white px-6 py-2.5 rounded transition-colors font-medium">
                      Buy Now
                    </button>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      {/* Main Content Area - Hero Section */}
      <section id="home" className="container mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Right Side - Image (First on mobile, second on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex items-center justify-center w-full md:order-2"
          >
            <Image
              src="/home.jpg"
              alt="Scott Headphones"
              width={600}
              height={400}
              className="object-contain w-full max-w-md md:max-w-full"
              priority
            />
          </motion.div>

          {/* Left Side - Text Content (Second on mobile, first on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6 text-center md:text-left md:order-1"
          >
            {/* Main Heading with ReactTyped */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <ReactTyped
                strings={["<span style='color: white;'>Sound</span> <span style='color: #2563eb;'>Redefined</span>"]}
                typeSpeed={100}
                loop={false}
                showCursor={false}
                
              />
            </h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0"
            >
              Experience audio like never before. Scott headphones combine cutting-edge 
              technology with premium design to deliver studio-quality sound in your pocket.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4"
            >
              <button className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-md font-medium transition-colors">
                Get SCOTT
              </button>
              <button className="w-full sm:w-auto border-2 border-gray-600 hover:border-white text-gray-300 hover:text-white px-8 py-3 rounded-md font-medium transition-colors">
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Features Section */}
      <Features />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Footer */}
      <Footer />
    </main>
  );
}
