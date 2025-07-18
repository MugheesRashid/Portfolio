import React, { useEffect, useState } from "react";
import Herosection from "./components/Herosection";
import Image from "./components/Image";
import AboutLP from "./components/AboutLP";
import "./App.css";
import ProjectLP from "./components/ProjectsLP";
import Navbar from "./components/hero/Navbar";
import MoreInfo from "./components/MoreInfo";
import WhyChooseMe from "./components/WhyChooseMe";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import ResponsiveScreen from "./components/ResponsiveScreen";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Check screen width on mount
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    // Set loaded to true when window finishes loading
    const handleLoad = () => {
      setLoaded(true);
      console.log("Page loaded");
    };

    if (document.readyState === "complete") {
      setLoaded(true);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  useEffect(() => {
    // Only initialize locomotive scroll if not on mobile
    if (!isMobile && loaded) {
      (async () => {
        const locomotiveScroll = (await import("locomotive-scroll")).default;
        let loco = new locomotiveScroll();
      })();
    }
  }, [isMobile, loaded]);

  // Show responsive screen for mobile devices
  if (isMobile) {
    return <ResponsiveScreen />;
  }

  return (
    <div className="main">
      {loaded &&
        <>
          <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
          <Herosection isOpen={isOpen} setIsOpen={setIsOpen} />
          <Image />
          <AboutLP />
          <MoreInfo />
          <ProjectLP />
          <WhyChooseMe />
          <Testimonials />
          <Footer />
        </>
      }{
        !loaded && 
        <div className="w-screen h-screen bg-[#111]"></div>
      }
    </div>
  );
}

export default App;
