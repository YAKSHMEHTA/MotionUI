import React, { useLayoutEffect,useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import "../App.css";

gsap.registerPlugin(ScrollTrigger);

function ScrollReveal() {
  const containerRef = useRef(null);

useEffect(() => {
  const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
  });

  const raf = (time) => {
    lenis.raf(time * 1000);
  };

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add(raf);
  gsap.ticker.lagSmoothing(0);

  return () => {
    lenis.off("scroll", ScrollTrigger.update);
    gsap.ticker.remove(raf);
    lenis.destroy();
  };
}, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "linear",
        },

        scrollTrigger: {
          trigger: ".animation-section",
          start: "top top",
          end: "bottom -400%",
          pin: true,
          scrub: 1.5,
        },
      });

      tl.to(".initial-image img", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      })
        .to(
          ".initial-image-content h1",
          {
            scale: 1,
          },
          "<",
        )
        .to(".strip", {
          clipPath: "inset(0% 0% 0% 0%)",
          stagger: -0.09,
        })
        .to(
          ".image-cards-section",
          {
            xPercent: -200,
            
          },
          "-=0.16",
        )
        .to(
          ".final-text-reveal .imagereveal img",
          {
            clipPath: "inset(0% 0% 0% 0%)",
          },
          "<",
        )
        .to(
          ".final-text-reveal-content",
          {
            x: 0,
          },
          "<",
        );
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef}>
      <div className="landing-page">
        <h2>Landing Page</h2>
      </div>

      <section className="animation-section">
        <div className="initial-image">
          <div className="initial-image-content">
            <h1>White Desert</h1>
          </div>

          <img
            src="https://images.unsplash.com/photo-1786604455363-5001cd5575b6?q=80&w=1170&auto=format&fit=crop"
            alt="White Desert"
          />
        </div>

        <div className="strip-reveal">
          <div className="strips">
            <div className="strip strip-1" />
            <div className="strip strip-2" />
            <div className="strip strip-3" />
          </div>
        </div>

        <div className="image-cards-section">
          <div className="card card1">
            <img
              src="https://images.unsplash.com/photo-1786604455362-321b116175a4?q=80&w=1170&auto=format&fit=crop"
              alt="Desert"
            />
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1726519161022-61bbcce396ca?q=80&w=1123&auto=format&fit=crop"
              alt="Desert"
            />
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1755644530833-cb40e18d5a31?q=80&w=1170&auto=format&fit=crop"
              alt="Desert"
            />
          </div>
        </div>

        <div className="final-text-reveal">
          <div className="imagereveal">
            <img
              src="https://images.unsplash.com/photo-1761959165302-f75021053512?q=80&w=1632&auto=format&fit=crop"
              alt="Desert"
            />
          </div>

          <div className="final-text-reveal-content">
            <h2>Stanley Stewart</h2>
          </div>
        </div>
      </section>

      <div className="footer-page">
        <h2>Footer</h2>
      </div>
    </div>
  );
}

export default ScrollReveal;
