import gsap from "gsap";

let tl = gsap.timeline();

export const homeAnimation = (completeAnimation) => {
  tl.from(".line span", 1.8, {
    y: 100,
    ease: "power4.out",
    delay: 1,
    skewY: 7,
    stagger: {
      amount: 0.3,
    },
  })
    .to(".welcome__one", 1, {
      delay: -1,
      css: { display: "block" },
    })
    .to(".welcome__one", 0.5, {
      css: { display: "none" },
    })
    .to(".welcome__two", 1.6, {
      delay: 1,
      css: { display: "block" },
    })
    .to(".welcome__two", 0.5, {
      css: { display: "none" },
    })
    .to(".welcome__three", 1.6, {
      delay: 1,
      css: { display: "block" },
    })
    .to(".welcome__three", 0.5, {
      css: { display: "none" },
    })
    .to(".welcome__four", 1.6, {
      delay: 1,
      css: { display: "block" },
    })
    .to(".welcome__four", 0.5, {
      css: { display: "none" },
    })
    .to(".overlay-top", 1.6, {
      height: 0,
      delay: 1,
      ease: "expo.inOut",
      stagger: 0.4,
    })

    .to(".overlay-bottom", 1.6, {
      width: 0,
      ease: "expo.inOut",
      delay: -0.8,
      stagger: {
        amount: 0.4,
      },
    })
    .to(".intro-overlay", 0, {
      css: { display: "none" },
    })
    .from(".case__image img", 1.6, {
      scale: 1.4,
      ease: "expo.inOut",
      delay: -2,
      stagger: {
        amount: 0.4,
      },
      onComplete: completeAnimation,
    });
};
