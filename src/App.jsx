import "./App.scss";
import Hero from "./hero/Hero";
import Portfolio from "./portfolio/Portfolio";
import { array } from "./portfolio/data";
import React from "react";
import { useLayoutEffect } from "react";

export default function App() {
  gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

  useLayoutEffect(() => {
    if (ScrollTrigger.isTouch !== 1) {
      ScrollSmoother.create({
        wrapper: ".wrapper",
        content: ".content",
        smooth: 1.5,
        effects: true,
      });

      gsap.fromTo(
        ".hero",
        { opacity: 1 },
        {
          opacity: 0,
          scrollTrigger: {
            trigger: ".hero",
            start: "center",
            end: "820",
            scrub: true,
          },
        }
      );
    }

    let itemsL = gsap.utils.toArray(".gallery_left .gallery_item");

    itemsL.forEach((item) => {
      gsap.fromTo(
        item,
        { x: -200, opacity: 0 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: item,
            start: "-800",
            end: "-100",
            scrub: true,
          },
        }
      );
    });

    let itemsR = gsap.utils.toArray(".gallery_right .gallery_item");

    itemsR.forEach((item) => {
      gsap.fromTo(
        item,
        { x: 200, opacity: 0 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: item,
            start: "-800",
            end: "-100",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className="content">
          <Hero />
          <Portfolio {...array[0]} />
        </div>
      </div>
    </>
  );
}
