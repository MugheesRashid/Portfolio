import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "../commons/Magnetic";

function MoreInfo() {
  const projectRef = useRef(null);
  const experienceRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".upperab",
        start: "top 80%",
      },
    });

    tl.from(".sapna", {
      y: 60,
      stagger: 0.05,
      duration: 1,
      ease: "power3.out",
    });

    tl.to(".img-span", {
      width: "13%",
      duration: 0.8,
      ease: "power2.out",
    }, "a");

    tl.from(".sphere", { scale: 0, duration: 0.3 }, "a");
    tl.from("h5", { scaleX: 0, duration: 0.3, ease: "bounce.out" }, "a");
    tl.from(".po-a-para", { scaleY: 0, duration: 0.3, ease: "bounce.out" }, "a");

    tl.eventCallback("onComplete", () => {
      gsap.to({ val: 0 }, {
        val: 3,
        duration: 1,
        ease: "power2.out",
        onUpdate() {
          if (projectRef.current) {
            projectRef.current.innerText = `${Math.round(this.targets()[0].val)}+`;
          }
        }
      }, "a");

      gsap.to({ val: 0 }, {
        val: 2,
        duration: 1,
        ease: "power2.out",
        onUpdate() {
          if (experienceRef.current) {
            experienceRef.current.innerText = `${this.targets()[0].val.toFixed(1)} Years+`;
          }
        }
      }, "a");
    });
  }, []);

  const lines = [
    "I craft digital experiences [img:/work1.png]",
    "from a mix of inspiration [img:/work2.jpg]",
    "experimentation [img:/work3.jpg], and",
    "continuous learning. By",
    "[img:/work1.png] a mindset of exploration",
    "and curiosity. [img:/work2.jpg]",
  ];

  const getAnimatedLine = (line, index) => {
    const parts = line.split(" ");
    return (
      <span className="block overflow-hidden" key={index}>
        {parts.map((word, i) => {
          const imgMatch = word.match(/\[img:(.+?)\]/);
          if (imgMatch) {
            return (
              <span
                key={i}
                className="img-span w-0 h-[42px] mx-2 inline-block rounded-2xl bg-center bg-cover"
                style={{ backgroundImage: `url('${imgMatch[1]}')` }}
              ></span>
            );
          }
          return (
            <span key={i} className="inline-block mx-1 sapna">
              {word}
            </span>
          );
        })}
      </span>
    );
  };

  return (
    <div className="w-screen h-[110vh] rounded-t-4xl flex flex-col justify-center bg-[#111111] px-20">
      <div className="upperab w-full flex flex-row justify-between items-center">
        <p className="text-[var(--color-bg)] leading-none w-[70%] text-[50px] flex flex-col gap-1.5 Inter font-medium">
          {lines.map((line, index) => getAnimatedLine(line, index))}
        </p>
        <Magnetic>
          <div className="w-[35%] sphere relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#71B0BA] text-[#f2f2f2] flex flex-row justify-center items-center gap-2 rounded-full">
              <h5 className="text-[14vw] font-semibold leading-none mb-6 tracking-tighter relative -left-[20%]">
                DE
              </h5>
              <div className="flex po-a-para flex-col justify-center font-medium leading-none items-left text-[4vw] relative -left-[20%]">
                <p>veloper</p>
                <p>signer</p>
                <p>ck</p>
              </div>
            </div>
          </div>
        </Magnetic>
      </div>

      <div className="belowab flex flex-row justify-end items-center gap-10 mt-10">
        <div className="ab">
          <h4 ref={projectRef}>0+</h4>
          <p>PROJECTS</p>
        </div>
        <div className="ab">
          <h4 ref={experienceRef}>0 Years+</h4>
          <p>EXPERIENCE</p>
        </div>
      </div>
    </div>
  );
}

export default MoreInfo;
