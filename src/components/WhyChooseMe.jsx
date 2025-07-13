import React, { useState, useEffect } from "react";
import FaceModel3D from "./FaceModel3D"; // 🆕 import 3D model
import { Canvas } from "@react-three/fiber"; // 🆕 import Canvas
import Button from "../utils/Button";

function WhyChooseMe() {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive camera settings
  const getCameraSettings = () => {
    return { position: [0, 0, 10], fov: 10 };
  };

  return (
    <div className="w-screen relative overflow-hidden h-[125vh] text-[#f2f2f2] bg-[#111] px-10 py-6 rounded-4xl">
      {/* 🆕 3D Model Background */}
      <div className="absolute inset-0 z-[88]">
        <Canvas
          camera={getCameraSettings()}
          style={{ background: 'transparent' }}
        >
          <FaceModel3D />
        </Canvas>
      </div>

      <div className="head-wcm flex gap-2 flex-col mb-10 relative mt-[10vh] z-[999]">
        <h6 className="text-[60px] font-semibold leading-none">
          <span className="font-light">WHY</span> Choose ME?
        </h6>
        <p className="w-2/3 leading-tight Poppins text-[14px]">
        I bring a unique mix of design, dev, and motion — focused on performance, aesthetics, and building experiences that actually make users stop and scroll.{" "}
          <span className="text-[#71b0ba]">
            Let's build something amazing together! ✨
          </span>
        </p>
      </div>
      <img src="./Ellipse.png" alt="" className="absolute top-[60%] z-[1] left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="flex z-[888] flex-row flex-wrap gap-[15vh] justify-between w-full h-auto px-10 relative mt-[10vh]">
        <div className="flex flex-row justify-between w-full">
          <div className="w-[25vmax] h-[30vh] flex items-center justify-center flex-col">
            <div className="icon invert-100 bg-[url('./idea.gif')] bg-center bg-cover h-20 w-20 "></div>
            <div className="flex flex-col justify-center items-center mt-3">
            <h4 className="text-[18px] font-semibold">Creative & <span className="text-[#71b0ba]">Conversion-Focused </span>UI/UX</h4>
            <p className="Poppins text-[12px] px-1 text-center leading-[1.1]">I design with intention and develop with precision. Every element I build is crafted to feel smooth, look stunning, and function flawlessly — no fluff, just purpose.</p>
            </div>
          </div>
          <div className="w-[25vmax] h-[30vh] flex items-center justify-center flex-col">
            <div className="icon invert-100 bg-[url('./optimize.gif')] bg-center bg-cover h-20 w-20 "></div>
            <div className="flex flex-col justify-center items-center mt-3">
              <h4 className="text-[18px] font-semibold">Full-Stack  <span className="text-[#71b0ba]">Web Development</span></h4>
              <p className="Poppins text-[12px] px-1 text-center leading-[1.1]">I build scalable full-stack apps using the MERN stack, ensuring both the backend logic and frontend design are smooth, fast, and perfectly synced.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between w-full">
          <div className="w-[25vmax] h-[30vh] flex items-center justify-center flex-col">
            <div className="icon invert-100 bg-[url('./browser.gif')] bg-center bg-cover h-20 w-20 "></div>
            <div className="flex flex-col justify-center items-center mt-3">
              <h4 className="text-[18px] font-semibold">Creative & <span className="text-[#71b0ba]">Shopify & E-commerce </span>Expertise</h4>
              <p className="Poppins text-[12px] px-1 text-center leading-[1.1]">I create Shopify stores with custom design, SEO-ready structure, full mobile support, and product optimization — built for clean launches and strong sales.</p>
            </div>
          </div>
          <div className="w-[25vmax] h-[30vh] flex items-center justify-center flex-col">
            <div className="icon invert-100 bg-[url('./3d.gif')] bg-center bg-cover h-20 w-20 "></div>
            <div className="flex flex-col justify-center items-center mt-3">
              <h4 className="text-[18px] font-semibold"> <span className="text-[#71b0ba]">Web Animations & </span> 3D Interactions</h4>
              <p className="Poppins text-[12px] px-1 text-center leading-[1.1]">I bring websites to life using GSAP, Three.js, and Framer Motion — adding smooth scroll effects, 3D visuals, and stunning interactive experiences.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 🆕 3D Mask Canvas */}
      {/* <MaskCanvas /> */}
    </div>
  );
}

export default WhyChooseMe;
