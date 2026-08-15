import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

function TextPopBtn({height,width,text}) {
  const containerRef = useRef(null);
  const [flag, setFlag] = useState(false);
    console.log(height)
  const handleHover = () => {
    setFlag((prev) => !prev);
  };

  //   const  handleHover = () => {
  //     gsap.to(".text-par", {
  //       y: -22,
  //       duration: 0.25,
  //       stagger:0.29,
  //       ease: "sine.out",
  //     });
  //   };

  //   const handelLeave = () =>{
  //     gsap.to(".text-par", {
  //       y: 1,
  //       duration: 0,

  //     });
  //   }

  useEffect(() => {
    const ctx = gsap.context(() => {
        const tl = gsap.timeline();
      tl.to(".text-par", {
        y: "-50%",
        duration: 0.25,
        stagger:0.09,
        ease: "power1.inOut",
      },">");
      
    }, containerRef);

    return () => ctx.revert();
  }, [flag]);

  return (
    <div ref={containerRef} className={`flex w-full justify-center`}>
      <button
        className={`bg-white overflow-clip`}
        onMouseOut={null}
        onMouseEnter={handleHover}
        style={{borderRadius:"5rem",height:height+'em',width:width+'em'}}
      >
        <div className="text-par flex flex-col  overflow-clip">
          <p className="relative">{text}</p>
          <p className="relative">{text}</p>
        </div>
      </button>
    </div>
  );
}

export default TextPopBtn;
