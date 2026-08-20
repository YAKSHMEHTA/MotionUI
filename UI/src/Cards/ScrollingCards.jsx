import React, {
  useLayoutEffect,
  useEffect,
  useRef,
  startTransition,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

import "../App.css";
import { useGSAP } from "@gsap/react";
import DemoCard from "./DemoCard";

function ScrollingCards() {
  const parentRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.8 });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: parentRef.current,
          start: "top top",
          scrub: 1,
          pin: true,
          end: "+=1600px",
          markers: true,
        },
      });
      tl.to(".text", {
        y: -255,
        ease: "sine.out",
      });
      tl.to(
        ".card1",
        {
          rotation: -20,
          onUpdate: (self) => {
            console.log(self.progress);
          },
        },
        "-=0.2",
      );
      tl.to(
        ".card1",
        {
          y: "-150%",
          left: "-35%",

          ease: "power2.inOut",
        },
        "=",
      );
      tl.to(
        ".card2",
        { top: "-40%", left: "-55%", rotate: -5, ease: "sine.out" },
        "-=0.48",
      );
      tl.to(
        ".card3",
        { top: "-40%", left: "-35%", rotate: 10, ease: "sine.inOut" },
        "-=0.52",
      );
      tl.to(
        ".card4",
        {
          top: "-40%",
          left: "-35%",
          rotate: 10,
          ease: "power2.out",
        },
        "-=0.28",
      );
    });

    return () => {
      ctx.revert();
    };
  });

  return (
    <div className="overflow-hidden">
      <div className="w-full  overflow-hidden h-screen bg-cyan-800"></div>
      <div ref={parentRef} className="flex  relative h-100 parent w-full ">
        <div className="flex w-full justify-center">
          <h1 className=" text-6xl   text z-10 text-white">YAKSH MEHTA</h1>
        </div>

        <div className="card1  absolute top-[80%] rotate-20 -right-[35%]">
          <DemoCard></DemoCard>
        </div>
        <div className="card2 absolute top-[90%] rotate-20 -right-[35%]">
          <DemoCard></DemoCard>
        </div>
        <div className="card3 absolute top-[80%] -rotate-20 -right-[35%]">
          <DemoCard></DemoCard>
        </div>
        <div className="card4 absolute top-[80%] -rotate-20 -right-[35%]">
          <DemoCard></DemoCard>
        </div>
      </div>
      <div className="w-full h-screen bg-cyan-800"></div>
      <div className="w-full h-screen bg-cyan-800"></div>
      <div className="w-full h-screen bg-cyan-800"></div>
    </div>
  );
}

export default ScrollingCards;
