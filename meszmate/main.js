gsap.registerPlugin(ScrollTrigger);


gsap.utils.toArray(".work").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 100%",
      toggleActions: "play none none reverse"
    },
    y: 50,
    opacity: 0,
    duration: .4,
    ease: "power2.out"
  });
});