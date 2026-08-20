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

function CursorTracker() {

    // BEFORE any GSAP runs — original positions
    var STRENGTH = 8
    var MAX_DIST = 50
    let dirX = window.innerWidth/2;
    let xDir = 0;
    let yDir = 0;
    let dirY = 0; 
    const onMove = (e)=>{
        console.log(e.clientX);
        console.log("move",e.movementY)
        xDir = e.movementX;
        yDir = e.movementY;
        dirX = e.clientX + dirX;
        dirY = dirY + e.clientY;
    }
    window.addEventListener("mousemove", onMove);
  useEffect(() => {
    // Cache BEFORE any transform runs

    const onMove = (e)=>{
        let xTo = gsap.quickTo(".card","x",{x:xDir*10,duration:0.5,ease:"power4.out"});
        let yTo = gsap.quickTo(".card","y",{y:yDir*10,duration:0.5,ease:"power4.out"});
        xTo(e.movementX * 2);
        yTo(e.movementY * 2)
    }

    const onLeave = () => {
      cards.forEach(({ el }) =>
        gsap.to(el, { x: 0, y: 0, duration: 0.9, ease: "elastic.out(1,0.3)" })
      );
    };

    window.addEventListener("mousemove",(e)=>{
        onMove(e);
    });
  

    // Cleanup — warna har hot-reload pe duplicate listeners stack hote hain
    return () => {
      window.removeEventListener("mousemove", onMove);

    };
  }, []);


  return (
    <div id="par" className=" w-full h-screen overflow-clip py-20 flex">
      <div className=" h-full w-full items-center gap-15  flex flex-col ">
        <div className="card flex flex-col py-20  bg-cyan-900">
          <h2 className="text-3xl text-white">Yaksh MEHTA</h2>
          <div className=" h-4 w-3/4 bg-blue-700"></div>
          <a href="" className="text-white">
            Link
          </a>
        </div>
        <div className="card  flex flex-col bg-cyan-900">
          <h2 className="text-3xl text-white">Yaksh MEHTA</h2>
          <div className=" h-4 w-3/4 bg-blue-700"></div>
          <a href="" className="text-white">
            Link
          </a>
        </div>
        <div className="card flex flex-col bg-cyan-900">
          <h2 className="text-3xl text-white">Yaksh MEHTA</h2>
          <div className=" h-4 w-3/4 bg-blue-700"></div>
          <a href="" className="text-white">
            Link
          </a>
        </div>
      </div>
      <div className="h-full w-full flex flex-col gap-15 items-center">
        <div className="card flex flex-col h-15 overflow-clip  bg-cyan-900">
          <h2 className="text-3xl text-white">Yaksh MEHTA</h2>
          <div className=" h-4 w-3/4 bg-blue-700"></div>
          <a href="" className="text-white">
            Link
          </a>
        </div>
        <div className="card flex flex-col h-15 overflow-clip  bg-cyan-900">
          <h2 className="text-3xl text-white">Yaksh MEHTA</h2>
          <div className=" h-4 w-3/4 bg-blue-700"></div>
          <a href="" className="text-white">
            Link
          </a>
        </div>
        <div className="card flex flex-col h-15 overflow-clip  bg-cyan-900">
          <h2 className="text-3xl text-white">Yaksh MEHTA</h2>
          <div className=" h-4 w-3/4 bg-blue-700"></div>
          <a href="" className="text-white">
            Link
          </a>
        </div>
      </div>
    </div>
  );
}

export default CursorTracker;
