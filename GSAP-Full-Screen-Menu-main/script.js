/** @format */
let menuOpen = new gsap.timeline({
  paused: true,
});

menuOpen.to(".menu-container", {
  zIndex: 30,
  duration: 0.1,
});
menuOpen
  .to(".menu-container", {
    opacity: 1,
  })
  .from(
    ".menu-close-section, .inner-menu-close h1",
    {
      y: "100%",
      duration: 0.8,
      stagger: {
        amount: 0.2,
      },
    },
    "<"
  )
  .from(
    ".menu-about-section, .menu-blogs-section, .menu-contact-section",
    {
      x: "100%",
      duration: 0.8,
      stagger: {
        amount: 0.4,
        from: "end",
      },
    },
    "<"
  );

function menuopen() {
  menuOpen.play() ? menuOpen.restart() : menuOpen.play();
}
function menuclose() {
  gsap
    .timeline()
    .to(".menu-container", {
      opacity: 0,
    })
    .to(".menu-container", {
      zIndex: -10,
    });
}
