const scrollbar = Scrollbar.init(document.querySelector(".container"), {
  renderByPixels: false,
});

let lottiePlayer = lottie.loadAnimation({
  container: document.querySelector(".lottie"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "https://assets6.lottiefiles.com/packages/lf20_jtzvwi8m.json",
});

scrollbar.addListener(() => {
  let totalHeight = scrollbar.limit.y;
  let scrollFromTop = scrollbar.scrollTop;
  let scrollPercent = (scrollFromTop * 100) / totalHeight;
  lottiePlayer.goToAndStop(
    (scrollPercent * lottiePlayer.totalFrames) / 100,
    true
  );
});

scrollbar.scrollTo(0, 1000, 3000);
