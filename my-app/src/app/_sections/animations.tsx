"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Animations() {
  useGSAP(() => {
    const tl = gsap.timeline({
      ease: "power4.out",
      scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
      }
    })
    tl.to("#effect", {
      scale: 4,
      y: 500
    })
    document.querySelectorAll("#work").forEach((el, k) => {
      gsap.from(el, {
        opacity: 0,
        y: 100,
        delay: k*.05,
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
        duration: .5,
        ease: "power2.out",
      });
    });
  })

  return null;
}