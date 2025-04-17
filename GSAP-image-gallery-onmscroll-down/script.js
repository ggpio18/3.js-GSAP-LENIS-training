gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const mainContent = document.getElementById("main-content");

  // Optional: wait for 2 seconds then hide loader
  setTimeout(() => {
    loader.style.display = "none";
    mainContent.style.display = "block";

    // Init smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Image scroll animation
    gsap.timeline({
      scrollTrigger: {
        trigger: '.img',
        scrub: true
      }
    }).to('.img', {
      stagger: 0.2,
      y: -700,
      scrub: true
    });

  }, 2000); // 2 second loader
});
