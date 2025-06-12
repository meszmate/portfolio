gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

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

let worksplit = SplitText.create("#work", {
  type: "chars, words"
});

gsap.from(worksplit.chars, {
  y: 100,
  opacity: 0,
  stagger: 0.01,
  duration: 0.3,
  scrollTrigger: {
    trigger: "#work",
    start: "top 100%",
    toggleActions: "play none none reverse"
  }
})

let powered = SplitText.create("#powered", {
  type: "chars, words"
});

gsap.from(powered.chars, {
  y: "random(-100, 100)",
  opacity: 0,
  duration: .5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#powered",
    start: "top 100%",
    toggleActions: "play none none reverse"
  }
})

gsap.utils.toArray(".step").forEach((el) => {
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

gsap.utils.toArray(".feature").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 100%",
      toggleActions: "play none none reverse"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });
});