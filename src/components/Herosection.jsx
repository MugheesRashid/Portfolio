import React, { useRef, useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import useMousePosition from "../utils/useMousePosition";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../utils/Button";
import { motion, AnimatePresence } from "framer-motion";
import Rounded from "../commons/rounded"

function Herosection({ isOpen, setIsOpen }) {
  const hoverDivRef = useRef(null);
  const { mousePositionWithScrollPosition } = useMousePosition();
  const { x, y } = mousePositionWithScrollPosition;
  const [isHover, setIsHover] = useState(false);
  const [img, setImg] = useState("work1.png");
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = -23;
  let direction = -1;

  const [result, setResult] = useState(false);
  const professions = [
    "UX/UI Designing",                   
    "Full-Stack Web Development",      
    "Creative Graphic Designing",         
    "Web Animations & 3D Experiences", 
    "Shopify Store Manager",  
    "Complete E-commerce Launch Kit"
  ];
    const [currentProfessionIndex, setCurrentProfessionIndex] = useState(0);
  const [navbarProfessionIndex, setNavbarProfessionIndex] = useState(0);
  const loaderRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  // Optimized animation sequence
  useEffect(() => {
    const disableScroll = () => {
      setIsLoading(true);
      document.body.style.cssText = `
        overflow: hidden;
        position: fixed;
        width: 100%;
        top: 0;
      `;
    };

    const enableScroll = () => {
      document.body.style.cssText = '';
      setIsLoading(false);
    };

    disableScroll();

    const professionInterval = setInterval(() => {
      setCurrentProfessionIndex((prev) => {
        const next = prev + 1;
        if (next >= professions.length) {
          clearInterval(professionInterval);

          // Show result after 1 second
          const resultTimer = setTimeout(() => {
            setResult(true);

            // Start loader animation after 1 second
            const loaderTimer = setTimeout(() => {
              gsap.to(loaderRef.current, {
                y: "-150%",
                duration: 0.5,
                ease: "power2.out",
                onComplete: enableScroll
              });
            }, 2000);

            return () => clearTimeout(loaderTimer);
          }, 1000);

          return prev;
        }
        return next;
      });
    }, 1000);

    return () => {
      clearInterval(professionInterval);
      enableScroll();
    };
  }, [professions.length]);

  // Continuous profession cycling for navbar (separate from loader)
  useEffect(() => {
    if (!isLoading) {
      const navbarInterval = setInterval(() => {
        setNavbarProfessionIndex((prev) => {
          const next = prev + 1;
          if (next >= professions.length) {
            return 0;
          }
          return next;
        });
      }, 2000);

      return () => clearInterval(navbarInterval);
    }
  }, [isLoading, professions.length]);

  const getImageForX = (x) => {
    if (x < 550) return "work3.jpg";
    if (x >= 550 && x < 780) return "work2.jpg";
    return "work1.png";
  };
  useEffect(() => {
    const newImg = getImageForX(x);
    if (img !== newImg) {
      setImg(newImg);
    }
  }, [x]);
  const animate = () => {
    if (xPercent < -130) {
      xPercent = 23;
    } else if (xPercent > 23) {
      xPercent = -130;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.05 * direction;
  };
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-200px",
    });
    requestAnimationFrame(animate);
  }, []);

  useGSAP(() => {
    gsap.to(hoverDivRef.current, {
      opacity: 1,
      ease: "power2.inOut",
      duration: 0.5,
      onComplete: () => {
        hoverDivRef.current.style.backgroundImage = `url(${img})`;
      },
    });
  }, [img]);

  useGSAP(() => {
    gsap.set(".in", { opacity: 0 });
    gsap.set(".bottom", { opacity: 0 });
    gsap.set(".secondh", { scaleY: 0 });
    gsap.set(".navbar", { y: "-100%" });
    gsap.set(".letter-span", { opacity: 0, y: 50 });
    gsap.set(".navbar", { y: "-100%" });
    if (!isLoading) {
      const tl = gsap.timeline();
      tl.to(".letter-span", {
        opacity: 1,
        y: 0,
        stagger: 0.04,
        ease: [0.23, 1, 0.32, 1]
      }).to(".in", {
        opacity: 1,
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }, "a").to(".bottom", {
        opacity: 1,
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }, "a").to(".secondh", {
        scaleY: 1,
        duration: 0.6,
        ease: [0.2, 1, 0.3, 1]
      }).to(".navbar", {
        y: "0%",
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }, "a")
    }
  }, [isLoading]);

  return (
    <>
      <div ref={loaderRef} className="w-screen loader h-screen flex flex-row justify-center items-center bg-[#111] absolute top-0 left-0 z-[999]">
        {!result ? (
          <div className="first flex flex-row items-center justify-center gap-4">
            <h3 className="text-[25px] Montserrat font-semibold text-[#f2f2f2]">Searching for the best in:</h3>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProfessionIndex}
                className="flex flex-col text-[26px] justify-center items-start gap-2  Montserrat text-[#71B0BA] font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <p>{professions[currentProfessionIndex]}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div className="secondhe"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <p className="text-[24px] text-[#f2f2f2] font-semibold Montserrat">Found: <span className="text-[#71B0BA]">1 Human. Countless Skills.</span> </p>
            </motion.div>
          </AnimatePresence>
        )}

      </div>
      <div className="w-screen hero h-[107vh] bg-[var(--color-bg)] text-[var(--color-text)] relative">
        <div
          onMouseEnter={() => setIsHover(false)}
          className="navbar Poppins h-[115px] flex flex-row justify-between items-center py-5 px-10"
        >
          <div className="left h-[28px] gap-1 flex item-center justify-between flex-row overflow-hidden">
            <p className="pr-1">Mughees</p>{" "}
            <p className="flex flex-col justify-start items-center gap-2 text-[var(--color-primary)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={navbarProfessionIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <p>{professions[navbarProfessionIndex]}</p>
                </motion.div>
              </AnimatePresence>
            </p>
          </div>
          <div className="right flex flex-row justify-center items-center gap-5">
            <Rounded staticbg="#112323" backgroundColor="#111">
              <Button bg="transparent" text="Call To Action" color="#f2f2f2" className="btn" />
            </Rounded>
            <p onClick={() => setIsOpen(true)} className="flex cursor-pointer flex-row justify-center items-center">
              M<IoMdMenu size={"1.05em"} />
              NU
            </p>
          </div>
        </div>
        <div
          onMouseEnter={() => setIsHover(true)}
          className="top Inter py-10 border-b-2 border-solid border-[#808181] relative flex leading-none flex-col justify-center items-center h-[] px-10"
        >
          <h1 className="text-[115px] z-[2] tracking-tighter">
            <span className="hey Raleway font-extrabold italic">
              {'HEY'.split('').map((letter, index) => (
                <span key={index} className="letter-span inline-block">{letter}</span>
              ))}
            </span>
            {', I\'m Mughees.'.split('').map((letter, index) => (
              <span key={`main-${index}`} className={`letter-span inline-block relative ${letter === ' ' ? 'w-4' : ''}`}>
                {letter}
              </span>
            ))}
          </h1>
          <p className="text-[30px] tracking-tighter z-[2] -mt-1 pt-5 tracking-tiger in opacity-0">
          I craft digital experiences that connect, convert, and inspire.
          </p>

          <motion.div
            animate={{
              WebkitMaskPosition: `${x - 200 / 2}px ${y - 200}px`,
              WebkitMaskSize: `200px`,
              opacity: isHover ? 1 : 0,
            }}
            transition={{ ease: "linear", duration: 0.3 }}
            className="maskh z-[5] relative top-0 left-0 py-10 w-full flex text-[#f2f2f2] leading-none flex-col justify-center items-center h-[] px-10"
          >
            <motion.div
              ref={hoverDivRef}
              style={{
                position: "absolute",
                width: 200,
                height: 200,
                borderRadius: "50%",
                backgroundPosition: "center",
                backgroundSize: "cover",
                pointerEvents: "none",
                scale: isHover ? "1" : "0",
                zIndex: 1,
              }}
              animate={{
                top: y - 200,
                left: x - 100,
              }}
              transition={{ ease: "linear", duration: 0.3 }}
              className=""
            ></motion.div>
            <h1 className="text-[115px] z-[2] tracking-tighter">
              <span className="heymask Raleway font-extrabold italic">
                HEY
              </span>
              , I'm Mughees.
            </h1>
            <p className="text-[30px] tracking-tighter z-[2] -mt-1 pt-5 tracking-tiger in opacity-0">
            I craft digital experiences that connect, convert, and inspire.
            </p>
          </motion.div>
        </div>
        <div
          onMouseEnter={() => setIsHover(false)}
          className="bottom w-full flex flex-col justify-between items-center"
        >
          <div className="first w-full flex flex-row justify-between items-center py-5 px-10">
            <p className="Montserrat flex flex-row justify-center items-center gap-2">
              <FaLocationDot size={"1.1em"} />
              <span className="tracking-tighter">From Pakistan</span>
            </p>
            <p className="Poppins w-[28%] text-[14px]">
              {" "}
              I’m a UX/UI designer and full-stack developer who turns ideas into clean, high-performing websites.
              {" "}
              <span className="text-[var(--color-primary)]">
              Whether it’s Shopify, animations, or complete web builds 
              </span>{" "}
              — I do it all with a creative edge.
            </p>
          </div>
          <div
            ref={slider}
            className="secondh scale-y-0 origin-center text-[160px] leading-none Poppins font-extralight uppercase tracking-[-10px] flex flex-row whitespace-nowrap justify-center items-center gap-5 px-10"
          >
            <p ref={firstText} className="relative inline-flex items-center">
              Creative Web Developer{" "}
              <img
                className="w-auto h-[1em] mx-5 inline-block align-middle"
                src="/star.png"
                alt=""
              />{" "}
              UX/UI
            </p>
            <p ref={secondText} className="absolute left-[110%] float-left inline-flex items-center">
              Designer{" "}
              <img
                className="w-auto h-[1em] mx-5 inline-block align-middle"
                src="/star.png"
                alt=""
              />{" "}
              Full Stack Developer
            </p>
            {/* <p>UX/UI Designer</p> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Herosection;
