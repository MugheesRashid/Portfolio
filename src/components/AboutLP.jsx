import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import useMousePosition from "../utils/useMousePosition";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Magnetic from "../commons/Magnetic";

function AboutLP() {
  const { mousePositionWithReverseScrollPosition } = useMousePosition();
  const { x, y } = mousePositionWithReverseScrollPosition;
  const [isHovered, setIsHovered] = useState(false);
  // const size = isHovered ? 200 : 0;
  const paraRef = useRef(null);

  const paraText =
    "A multi-skilled UX/UI designer & full-stack web developer with a passion for building clean, functional, and animated digital products.Whether I’m designing smooth user flows or coding interactive websites, I focus on creating experiences that feel as good as they look — one pixel at a time.";

  const splitPara = paraText.split(" ").map((word, wordIdx) => (
    <span key={wordIdx} className="inline-block mr-2">
      {word.split("").map((letter, letterIdx) => (
        <span key={letterIdx} className="inline-block opacity-0">
          {letter}
        </span>
      ))}
    </span>
  ));

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".split-word span span",
      { y: "20px", opacity: 0, rotate: 60 },
      {
        y: "0px",
        opacity: 1,
        rotate: 0,
        stagger: 0.01,
        scrollTrigger: {
          trigger: ".firstab",
          start: "10% bottom",
        },
      }
    );

    gsap.from(".bt-ub", {
      scrollTrigger: {
        trigger: ".bt-ub",
        start: "120% bottom",
      },
      opacity: 0,
      duration: 0.5,
    });
    gsap.from(".circle-ub", {
      scrollTrigger: {
        trigger: ".bt-ub",
        start: "bottom bottom",
      },
      scale: 0,
      duration: 0.5,
    });
  }, []);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-screen relative overflow-hidden h-[90vh] px-20"
    >
      <div className="firstab w-full h-full flex flex-col justify-center items-center">
        <div className="top relative overflow-visible">
          <div className="upper">
            <h3>Who Am I?</h3>
            <p ref={paraRef} className="split-word leading-relaxed">
              {splitPara}
            </p>
          </div>
        </div>

        <div className="bottom flex flex-row justify-between items-end gap-10">
          <p className="text-[14px] Inter bt-ub leading-normal w-1/3">
            I’m a lifelong learner, always seeking to improve my skills and stay
            up-to-date with the latest industry trends.{" "}
            <span className="text-[var(--color-primary)]">
              Let’s connect and build something great together!
            </span>
          </p>
          <div onMouseEnter={() => isHovered(true)} onMouseLeave={() => isHovered(false)} className="w-[200px] h-[200px] circle-ub bg-[#71b0ba] rounded-full"></div>
        </div>
      </div>

      <motion.div
        animate={{
          WebkitMaskPosition: `${x - 200 / 2}px ${y - 200 / 2}px`,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ ease: "linear", duration: 0.3 }}
        className="second absolute top-0 left-0 px-20 w-full h-full flex flex-col justify-center items-center"
      >
        <div className="top relative overflow-visible">
          <div className="upper">
            <h3 className="text-[#71b0ba]">Who Really Am I?</h3>
            <p className="text-[#71b0ba] font-medium">
              Honestly, I’m just a guy who loves turning ideas into real things on the web.
              Sometimes I’m designing with zero sleep, sometimes I’m debugging at 3 AM — but I love the process.
              I don’t follow trends, I create my own flow.
              Design, code, animate — repeat.

            </p>
          </div>
        </div>

        <div className="bottom flex flex-row justify-between items-end gap-10">
          <p className="text-[14px] Inter leading-normal w-1/3">
            I design with intention and develop with precision.{" "}
            Every element I build is crafted to feel smooth, look stunning, and function flawlessly — no fluff, just purpose.
          </p>
          <div onMouseEnter={() => setIsHovered(false)} onMouseLeave={() => setIsHovered(true)} className="w-[200px] h-[200px] bg-[#71b0ba] rounded-full"></div>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutLP;
