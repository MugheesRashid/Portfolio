import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
function Image() {
  const imgDivRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(imgDivRef.current, {
      backgroundPosition: "0% 0%",
      scrollTrigger: {
        trigger: imgDivRef.current,
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
    });
  }, []);
  return (
    <div
      ref={imgDivRef}
      style={{
        backgroundImage: "url('./dp1.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0% 300%",
      }}
      className="img-div w-screen relative h-[90vh]"
    >
      <div className="flex flex-col items-start justify-center h-full leading-none text-[#f3f3f3] absolute BebasNeue z-[2] left-[5%] top-1/2 -translate-y-1/2 tracking-tight text-[60px]">
        <h2>
          MUGHEES RASHID
        </h2> 
        <p>c
          Web Developer
        </p>
        <p>
          Designer
        </p>
        <p>
          Pakistan
        </p>
        <p>17</p>
      </div>
    </div>
  );
}

export default Image;
