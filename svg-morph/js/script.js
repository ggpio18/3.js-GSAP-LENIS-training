// cursor
// const cursor = document.querySelector(".cursor");

// let mouseX = 0;
// let mouseY = 0;

// let ballX = 0;
// let ballY = 0;

// let speed = 0.06;

// function animate() {
//   let distX = mouseX - ballX;
//   let distY = mouseY - ballY;

//   ballX += distX * speed;
//   ballY += distY * speed;

//   cursor.style.left = ballX + "px";
//   cursor.style.top = ballY + "px";

//   requestAnimationFrame(animate);
// }
// animate();

// document.addEventListener("mousemove", function (event) {
//   mouseX = event.pageX;
//   mouseY = event.pageY;
// });
// letter
window.addEventListener("load", () => {
  const tl = gsap.timeline({ ease: "power1.inOut" });
  gsap.set(".cubeBoxSvg", {
    scale: 0.2,
    y: 900,
  });
  tl.from("header", {
    y: -100,
  });
  tl.from("#title-container span", {
    y: 200,
    stagger: 0.1,
  });
  tl.to(".cubeBoxSvg", {
    y: 0,
  });
  tl.to(".cubeBoxSvg", {
    rotation: 180,
    scale: 1,
  });
  tl.from(
    ".stagger-content",
    {
      opacity: 0,
      stagger: 0.2,
    },
    "-=0.4"
  );
});

const heading = "Be the Shape of Something Great.";
const titleWords = heading.split(" ");
// console.log(Title);
const titleContainer = document.getElementById("title-container");

titleWords.forEach((word, index) => {
  const pElement = document.createElement("p");
  const spanElement = document.createElement("span");
  pElement.classList.add("overflow-hidden");
  spanElement.textContent = word;
  spanElement.classList.add(
    "bg-transparent",
    "inline-block",
    "2xl:px-4",
    "px-2"
  );
  titleContainer.append(pElement);
  pElement.appendChild(spanElement);
});
// Intro Animation
const cubeBox = document.querySelector(".cubeBoxPath");
const cubeBox2 =
  "M1245.5 2461H1872.5V1851L2492.5 1832V1231L3102.5 1225.5V603.503H2484.5L2490.5 0H1863V619.003H1245V5.5H620L621 619.003H0V1235H621V1851H1245.5V2461Z";
const cubeBox3 =
  "M0 1217.5V1830.5H621V2443.5H1234V1830.5H1855.5V2443.5H2468.5V1830.5H3098V1217.5H2468.5V596.5H1855.5V0H1234V596.5H621V1217.5H0Z";
const cubeBox4 =
  "M1860 0H1240L1241.5 610H622V1225.5H0V1844H622V2454.5H1241.5V3059H1860V2454.5H2494.5V1844L3102 1834.5V1214.5H2482V610H1860V0Z";

const CubeStep1 = polymorph.interpolate([cubeBox, cubeBox2], {
  addPoints: 0,
  origin: { x: 0, y: 0 },
  optimize: "fill",
  precision: 4,
});
const CubeStep2 = polymorph.interpolate([cubeBox2, cubeBox3], {
  addPoints: 0,
  origin: { x: 0, y: 0 },
  optimize: "fill",
  precision: 4,
});
const CubeStep3 = polymorph.interpolate([cubeBox3, cubeBox4], {
  addPoints: 0,
  origin: { x: 0, y: 0 },
  optimize: "fill",
  precision: 4,
});

let val = {
  prop: 0,
};
let val2 = {
  prop: 0,
};
let val3 = {
  prop: 0,
};

let CubeAnime = gsap.timeline({
  defaults: { duration: 10, ease: "power1.inOut" },
});

CubeAnime.to(val, {
  prop: 1,
  onUpdate: function () {
    cubeBox.setAttribute("d", CubeStep1(val.prop));
  },
})
  .to(val2, {
    prop: 1,
    onUpdate: function () {
      cubeBox.setAttribute("d", CubeStep2(val2.prop));
    },
  })
  .to(val3, {
    prop: 1,
    onUpdate: function () {
      cubeBox.setAttribute("d", CubeStep3(val3.prop));
    },
  });

ScrollTrigger.create({
  trigger: "#intro",
  pin: true,
  animation: CubeAnime,
  scrub: 0.6,
});

// second intro animation

const patttern = document.querySelector(".patternSecond");
const pattternA =
  "M0 234V0H305V233.5H608.5V467H911.5V233H1216.5V472.5H911.5V708.5H607.5V937.5H912.5V1174.5H1216V1414H908.5V1180.5H605.5V943H301.5V703.5H605.5V471H301.5V234H0Z";
const pattternB =
  "M0 235V9H304V226.5H608.5V0H908.5V240H608.5V454H908.5V702.5H1222V949H908.5V1186.5H600.5V953L908.5 949V736H600.5V949H300V702.5H600.5V469H300V235H0Z";
const patternStep1 = polymorph.interpolate([patttern, pattternA], {
  addPoints: 0,
  origin: { x: 0, y: 0 },
  optimize: "fill",
  precision: 4,
});
const patternStep2 = polymorph.interpolate([pattternA, pattternB], {
  addPoints: 0,
  origin: { x: 0, y: 0 },
  optimize: "fill",
  precision: 4,
});

let patternVal = {
  prop: 0,
};
let patternVal2 = {
  prop: 0,
};

let patternAnime = gsap.timeline({
  defaults: { duration: 4, ease: "power1.inOut" },
});

patternAnime
  .to(patternVal, {
    prop: 1,
    onUpdate: function () {
      patttern.setAttribute("d", patternStep1(patternVal.prop));
    },
  })
  .to(patternVal2, {
    prop: 1,
    onUpdate: function () {
      patttern.setAttribute("d", patternStep2(patternVal2.prop));
    },
  });

ScrollTrigger.create({
  trigger: "#secondIntro",
  pin: true,
  animation: patternAnime,
  scrub: 0.6,
});

// third intro animation
const pattternThird = document.querySelector(".patternThird");
const pattternThirdA =
  "M1 0V473H516V942H0V1408.5H516.5V1893H1033.5V2359.5H1551V1892.5H2067.5V1417H1551V1889H1034V1404H521.5V945.5H1034V479H1555V0H1034V473H521.5V0H1Z";
const pattternThirdB =
  "M515 0V463.5H1017V933.5H502.5V1423H0V1891H513.5V1421.5H1027L1024.5 1891H1547V2356H2061V1891H2579V1423H3103V940H2579V1410H2061V1879.5H1547V1410H1027V940H1543.5V473H2066V0H1543.5V463.5H1027V0H515Z";

const patternThirdStep1 = polymorph.interpolate(
  [pattternThird, pattternThirdA],
  {
    addPoints: 0,
    origin: { x: 0, y: 0 },
    optimize: "fill",
    precision: 4,
  }
);
const patternThirdStep2 = polymorph.interpolate(
  [pattternThirdA, pattternThirdB],
  {
    addPoints: 0,
    origin: { x: 0, y: 0 },
    optimize: "fill",
    precision: 4,
  }
);

let patternThirdVal = {
  prop: 0,
};
let patternThirdVal2 = {
  prop: 0,
};

let patternThirdAnime = gsap.timeline({
  defaults: { duration: 4, ease: "power1.inOut" },
});

patternThirdAnime
  .to(patternThirdVal, {
    prop: 1,
    onUpdate: function () {
      pattternThird.setAttribute("d", patternThirdStep1(patternThirdVal.prop));
    },
  })
  .to(patternThirdVal2, {
    prop: 1,
    onUpdate: function () {
      pattternThird.setAttribute("d", patternThirdStep2(patternThirdVal2.prop));
    },
  });

ScrollTrigger.create({
  trigger: "#thirdIntro",
  pin: true,
  animation: patternThirdAnime,
  scrub: 0.6,
});
// // Outro Animation
// const outro1Start = document.querySelector("#outro1");
// const outro2Start = document.querySelector("#outro2");
// const outro3Start = document.querySelector("#outro3");
// const outro4Start = document.querySelector("#outro4");
// const outro5Start = document.querySelector("#outro5");
// const outro6Start = document.querySelector("#outro6");
// const outro7Start = document.querySelector("#outro7");
// const outro8Start = document.querySelector("#outro8");
// const outro9Start = document.querySelector("#outro9");
// const outro10Start = document.querySelector("#outro10");
// const outro11Start = document.querySelector("#outro11");
// const outro1End =
//   "M77.992.152H61.288C28.744.152.52 20.024.52 62.936v21.888c0 42.912 28.224 62.784 60.768 62.784h16.704c32.544 0 60.768-19.872 60.768-62.784V62.936c0-42.912-28.224-62.784-60.768-62.784zm34.848 80.064c0 25.92-10.368 42.624-43.2 42.624s-43.2-16.704-43.2-42.624V67.544c0-25.92 10.368-42.624 43.2-42.624s43.2 16.704 43.2 42.624v12.672z";
// const outro2End =
//   "M77.368 25.288h28.8V.52H69.016c-25.632 0-47.808 14.112-47.808 57.024v9.216H.76v24.768h20.448V205h25.92V91.528h41.76V66.76h-41.76v-4.608c0-23.04 7.2-36.864 30.24-36.864z";
// const outro3End =
//   "M131.696 101.24c0-25.344-14.4-38.304-66.528-43.488C41.84 55.448 31.76 52.28 31.76 40.76c0-9.504 12.384-16.704 31.104-16.704 22.464 0 31.104 6.912 33.984 16.992h28.8C119.312 13.112 94.544.152 65.744.152 27.728.152 5.84 16.856 5.84 43.064c0 21.024 11.808 33.12 50.688 37.728 40.896 4.896 49.248 7.776 49.248 20.16 0 9.792-5.472 21.888-38.304 21.888-27.072 0-36.288-9.504-38.592-19.584H.08c6.336 27.936 26.208 44.352 67.104 44.352 44.352 0 64.512-18.72 64.512-46.368z";
// const outro4End =
//   "M.52 84.824c0 42.912 28.224 62.784 59.328 62.784h16.704c27.648 0 51.552-16.704 54.144-52.704h-26.784c-2.304 17.28-11.808 27.936-35.712 27.936-31.392 0-41.76-16.704-41.76-42.624V67.544c0-25.92 10.368-42.624 41.76-42.624 21.888 0 31.68 9.216 34.848 24.48h27.072C126.376 15.704 103.048.152 76.552.152H59.848C28.744.152.52 20.024.52 62.936v21.888z";
// const outro5End =
//   "M72.904.76C54.76.76 35.176 11.992 25.96 26.392V.76H.04V139h25.92V74.2c0-35.424 24.192-48.672 38.592-48.672h27.936V.76H72.904z";
// const outro6End =
//   "M77.992.152H61.288C28.744.152.52 20.024.52 62.936v21.888c0 42.912 28.224 62.784 60.768 62.784h16.704c32.544 0 60.768-19.872 60.768-62.784V62.936c0-42.912-28.224-62.784-60.768-62.784zm34.848 80.064c0 25.92-10.368 42.624-43.2 42.624s-43.2-16.704-43.2-42.624V67.544c0-25.92 10.368-42.624 43.2-42.624s43.2 16.704 43.2 42.624v12.672z";
// const outro7End = "M.04.912V210h25.92V.912H.04z";
// const outro8End = "M.04.912V210h25.92V.912H.04z";
// const outro9End =
//   "M18.272 35.472c9.504 0 17.28-7.488 17.28-16.992 0-9.504-7.776-17.568-17.28-17.568C8.768.912.992 8.976.992 18.48c0 9.504 7.776 16.992 17.28 16.992zM5.312 210h25.92V71.76H5.312V210z";
// const outro10End =
//   "M72.904.152c-17.568 0-38.88 11.232-48.672 27.36V4.76H.04V143h25.92V70.712c0-35.424 24.192-45.792 38.592-45.792 24.192 0 34.56 10.944 34.56 36.864V143h25.92V57.176c0-42.912-28.224-57.024-52.128-57.024z";
// const outro11End =
//   "M108.672 4.76v24.768C99.744 12.536 79.872.152 61.728.152 29.184.152.96 20.024.96 62.936V79.64C.96 122.552 29.184 143 61.728 143c18.144 0 38.88-9.792 46.944-26.208v18.144c0 25.92-4.032 42.624-39.744 42.624-25.632 0-31.968-6.048-36.864-16.128H2.976c8.064 27.936 31.68 40.896 57.888 40.896H75.84c33.984 0 58.752-19.584 58.752-62.784V4.76h-25.92zM70.08 118.232c-32.832 0-43.2-17.28-43.2-43.2v-7.488c0-25.92 10.368-42.624 43.2-42.624 14.4 0 38.592 10.368 38.592 45.792v4.32c0 35.424-24.192 43.2-38.592 43.2z";

// const outroStep1 = polymorph.interpolate([outro1Start, outro1End], {
//   addPoints: 2,
//   origin: { x: 0, y: 0 },
//   optimize: "fill",
//   precision: 4,
// });
// const outroStep2 = polymorph.interpolate([outro2Start, outro2End], {
//   addPoints: 4,
//   origin: { x: 0, y: 0 },
//   optimize: "fill",
//   precision: 4,
// });
// let val3 = {
//   prop: 0,
// };
// let val4 = {
//   prop: 0,
// };

// let outroLetters1 = gsap.timeline({ defaults: { ease: "power1.inOut" } });
// outroLetters1
//   .to(val3, {
//     prop: 1,
//     onUpdate: function () {
//       outro1Start.setAttribute("d", outroStep1(val3.prop));
//     },
//   })
//   .to(
//     val4,
//     {
//       prop: 1,
//       onUpdate: function () {
//         outro2Start.setAttribute("d", outroStep2(val4.prop));
//       },
//     },
//     0.2
//   );

// ScrollTrigger.create({
//   trigger: "#outro",
//   animation: outroLetters1,
//   pin: true,
//   scrub: 0.6,
//   start: "top top",
//   end: "+=70%",
// });

// const outroStep3 = polymorph.interpolate([outro3Start, outro3End], {
//   addPoints: 4,
//   origin: { x: 50, y: 50 },
//   optimize: "fill",
//   precision: 4,
// });
// const outroStep4 = polymorph.interpolate([outro4Start, outro4End], {
//   addPoints: 20,
//   origin: { x: 20, y: 20 },
//   optimize: "fill",
//   precision: 4,
// });
// const outroStep5 = polymorph.interpolate([outro5Start, outro5End], {
//   addPoints: 0,
//   origin: { x: 0, y: 0 },
//   optimize: "fill",
//   precision: 4,
// });
// let val5 = {
//   prop: 0,
// };
// let val6 = {
//   prop: 0,
// };
// let val7 = {
//   prop: 0,
// };
// let outroLetters2 = gsap.timeline({ defaults: { ease: "power1.inOut" } });
// outroLetters2
//   .to(val5, {
//     prop: 1,
//     onUpdate: function () {
//       outro3Start.setAttribute("d", outroStep3(val5.prop));
//     },
//   })
//   .to(
//     val6,
//     {
//       prop: 1,
//       onUpdate: function () {
//         outro4Start.setAttribute("d", outroStep4(val6.prop));
//       },
//     },
//     0.2
//   )
//   .to(
//     val7,
//     {
//       prop: 1,
//       onUpdate: function () {
//         outro5Start.setAttribute("d", outroStep5(val7.prop));
//       },
//     },
//     0.4
//   );

// ScrollTrigger.create({
//   trigger: "#outro",
//   animation: outroLetters2,
//   pin: true,
//   scrub: 0.6,
//   start: "+=25%",
//   end: "+=70%",
// });

// const outroStep6 = polymorph.interpolate([outro6Start, outro6End], {
//   addPoints: 0,
//   origin: { x: 0, y: 0 },
//   optimize: "fill",
//   precision: 4,
// });
// const outroStep7 = polymorph.interpolate([outro7Start, outro7End], {
//   addPoints: 0,
//   origin: { x: 50, y: 50 },
//   optimize: "fill",
//   precision: 4,
// });
// const outroStep8 = polymorph.interpolate([outro8Start, outro8End], {
//   addPoints: 0,
//   origin: { x: 0, y: 0 },
//   optimize: "fill",
//   precision: 4,
// });
// const outroStep9 = polymorph.interpolate([outro9Start, outro9End], {
//   addPoints: 0,
//   origin: { x: 0, y: 0 },
//   optimize: "fill",
//   precision: 4,
// });
// let val8 = {
//   prop: 0,
// };
// let val9 = {
//   prop: 0,
// };
// let val10 = {
//   prop: 0,
// };
// let val11 = {
//   prop: 0,
// };
// let outroLetters3 = gsap.timeline({ defaults: { ease: "power1.inOut" } });
// outroLetters3
//   .to(val8, {
//     prop: 1,
//     onUpdate: function () {
//       outro6Start.setAttribute("d", outroStep6(val8.prop));
//     },
//   })
//   .to(
//     val9,
//     {
//       prop: 1,
//       onUpdate: function () {
//         outro7Start.setAttribute("d", outroStep7(val9.prop));
//       },
//     },
//     0.2
//   )
//   .to(
//     val10,
//     {
//       prop: 1,
//       onUpdate: function () {
//         outro8Start.setAttribute("d", outroStep8(val10.prop));
//       },
//     },
//     0.3
//   )
//   .to(
//     val11,
//     {
//       prop: 1,
//       onUpdate: function () {
//         outro9Start.setAttribute("d", outroStep9(val11.prop));
//       },
//     },
//     0.5
//   );

// ScrollTrigger.create({
//   trigger: "#outro",
//   animation: outroLetters3,
//   pin: true,
//   scrub: 0.6,
//   start: "+=50%",
//   end: "+=70%",
// });

// const outroStep10 = polymorph.interpolate([outro10Start, outro10End], {
//   addPoints: 0,
//   origin: { x: 100, y: 20 },
//   optimize: "fill",
//   precision: 4,
// });
// const outroStep11 = polymorph.interpolate([outro11Start, outro11End], {
//   addPoints: 20,
//   origin: { x: 100, y: 20 },
//   optimize: "fill",
//   precision: 4,
// });

// let val12 = {
//   prop: 0,
// };
// let val13 = {
//   prop: 0,
// };
// let outroLetters4 = gsap.timeline({ defaults: { ease: "power1.inOut" } });
// outroLetters4
//   .to(val12, {
//     prop: 1,
//     onUpdate: function () {
//       outro10Start.setAttribute("d", outroStep10(val12.prop));
//     },
//   })
//   .to(
//     val13,
//     {
//       prop: 1,
//       onUpdate: function () {
//         outro11Start.setAttribute("d", outroStep11(val13.prop));
//       },
//     },
//     0.2
//   )
//   .to(
//     "#outro .border-bottom",
//     {
//       scaleX: 1,
//     },
//     0.5
//   );

// ScrollTrigger.create({
//   trigger: "#outro",
//   animation: outroLetters4,
//   pin: true,
//   scrub: 0.6,
//   start: "+=75%",
//   end: "+=40%",
// });
