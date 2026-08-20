import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function CursorTracker() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;

    const handleMouseMove = (e) => {
      cards.forEach((card) => {
        const currentX = gsap.getProperty(card, "x");
        const currentY = gsap.getProperty(card, "y");

        let moveX = e.movementX * 2;
        let moveY = e.movementY * 2;

        moveX = Math.max(-20, Math.min(moveX, 20));
        moveY = Math.max(-20, Math.min(moveY, 20));

        gsap.to(card, {
          x: currentX + moveX,
          y: currentY + moveY,
          duration: 0.3,
          ease: "power2.out",
          overwrite: true,
        });
      });
    };

    const onLeave = (e) => {
      cards.forEach((card) =>
        gsap.to(card, { x: 0, y: 0, duration: 0.35, ease: "circ.out" }),
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave",onLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseleave",onLeave);
    };
  }, []);

  return (
    <div className="w-full h-screen overflow-clip py-20 flex">
      <div className="h-full w-full items-center gap-15 flex flex-col">
        <div
          ref={(el) => (cardsRef.current[0] = el)}
          className="card flex flex-col py-20 bg-cyan-900"
        >
          <h2 className="text-3xl text-white">Yaksh MEHTA</h2>
          <div className="h-4 w-3/4 bg-blue-700" />
          <a href="" className="text-white">
            Link
          </a>
        </div>

        <div
          ref={(el) => (cardsRef.current[1] = el)}
          className="card flex flex-col bg-cyan-900"
        >
          <h2 className="text-3xl text-white">Yaksh MEHTA</h2>
          <div className="h-4 w-3/4 bg-blue-700" />
          <a href="" className="text-white">
            Link
          </a>
        </div>

        <div
          ref={(el) => (cardsRef.current[2] = el)}
          className="card flex flex-col bg-cyan-900"
        >
          <h2 className="text-3xl text-white">Yaksh MEHTA</h2>
          <div className="h-4 w-3/4 bg-blue-700" />
          <a href="" className="text-white">
            Link
          </a>
        </div>
      </div>
      <div className="h-full w-full items-center gap-15 flex flex-col">
        <div
          ref={(el) => (cardsRef.current[3] = el)}
          className="card flex flex-col py-20 bg-cyan-900"
        >
          <h2 className="text-3xl text-white">Yaksh MEHTA</h2>
          <div className="h-4 w-3/4 bg-blue-700" />
          <a href="" className="text-white">
            Link
          </a>
        </div>

        <div
          ref={(el) => (cardsRef.current[4] = el)}
          className="card flex flex-col bg-cyan-900"
        >
          <h2 className="text-3xl text-white">Yaksh MEHTA</h2>
          <div className="h-4 w-3/4 bg-blue-700" />
          <a href="" className="text-white">
            Link
          </a>
        </div>

        <div
          ref={(el) => (cardsRef.current[5] = el)}
          className="card flex flex-col bg-cyan-900"
        >
          <h2 className="text-3xl text-white">Yaksh MEHTA</h2>
          <div className="h-4 w-3/4 bg-blue-700" />
          <a href="" className="text-white">
            Link
          </a>
        </div>
      </div>
    </div>
  );
}

export default CursorTracker;
