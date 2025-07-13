import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [mousePositionWithScrollPosition, setMousePositionWithScrollPosition] = useState({ x: null, y: null });
  const [mousePositionWithReverseScrollPosition, setMousePositionWithReverseScrollPosition] = useState({ x: null, y: null });


  const updateMousePosition = e => {
    setMousePositionWithScrollPosition({ x: e.clientX + window.scrollX, y: e.clientY + window.scrollY });
    setMousePositionWithReverseScrollPosition({ x: e.clientX + window.scrollX, y: (e.clientY  - window.innerHeight * 2 + window.scrollY) });
  };
  const updateMousePositionScroll = e => {
    console.clear();
    console.log("Scroll Position:", window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("scroll", updateMousePositionScroll);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("scroll", updateMousePositionScroll);
    };
  }, []);

  return {mousePositionWithScrollPosition, mousePositionWithReverseScrollPosition};
};

export default useMousePosition;