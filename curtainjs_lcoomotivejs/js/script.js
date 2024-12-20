import {
  Curtains,
  Plane,
} from "https://cdn.jsdelivr.net/npm/curtainsjs@7.2.0/src/index.mjs";

window.addEventListener("load", () => {
  // handle smooth scroll and update planes positions
  const smoothScroll = new LocomotiveScroll({
    el: document.getElementById("content"),
    smooth: true,
    inertia: 0.5,
    passive: true,
  });

  const useNativeScroll = smoothScroll.isMobile;

  // we will keep track of all our planes in an array
  const planes = [];
  let scrollEffect = 0;

  // set up our WebGL context and append the canvas to our wrapper
  const curtains = new Curtains({
    container: "canvas",
    watchScroll: useNativeScroll, // watch scroll on mobile not on desktop since we're using locomotive scroll
    pixelRatio: Math.min(1.5, window.devicePixelRatio), // limit pixel ratio for performance
  });

  curtains
    .onRender(() => {
      if (useNativeScroll) {
        // update our planes deformation
        // increase/decrease the effect
        scrollEffect = curtains.lerp(scrollEffect, 1, 5);
      }
    })
    .onScroll(() => {
      // get scroll deltas to apply the effect on scroll
      const delta = curtains.getScrollDeltas();

      // invert value for the effect
      delta.y = -delta.y;

      if (useNativeScroll && Math.abs(delta.y) > Math.abs(scrollEffect)) {
        scrollEffect = curtains.lerp(scrollEffect, delta.y, 3.5);
      } else {
        scrollEffect = curtains.lerp(scrollEffect, delta.y * 4, 1.2);
      }

      // manually update planes positions
      for (let i = 0; i < planes.length; i++) {
        // apply additional translation, scale and rotation
        applyPlanesParallax(i);

        // update the plane deformation uniform as well
        planes[i].uniforms.scrollEffect.value = scrollEffect;
      }
    });

  function updateScroll(xOffset, yOffset) {
    // update our scroll manager values
    curtains.updateScrollValues(xOffset, yOffset);
  }

  // custom scroll event
  if (!useNativeScroll) {
    // we'll render only while lerping the scroll
    curtains.disableDrawing();
    smoothScroll.on("scroll", (obj) => {
      updateScroll(obj.scroll.x, obj.scroll.y);

      // render scene
      curtains.needRender();
    });
  }

  // some basic parameters
  const params = {
    vertexShader: vs,
    fragmentShader: fs,
    widthSegments: 10,
    heightSegments: 10,
    uniforms: {
      scrollEffect: {
        name: "uScrollEffect",
        type: "1f",
        value: 0,
      },
    },
  };

  // get our planes elements and add it in the plane
  const planeElements = document.getElementsByClassName("plane");

  for (let i = 0; i < planeElements.length; i++) {
    // add our planes and handle them
    const plane = new Plane(curtains, planeElements[i], params);

    planes.push(plane);

    handlePlanes(i);
  }

  // handle all the planes
  function handlePlanes(index) {
    const plane = planes[index];

    // check if our plane is defined and use it
    plane
      .onReady(() => {
        // apply parallax on load
        applyPlanesParallax(index);

        // once everything is ready, display everything
        if (index === planes.length - 1) {
          document.body.classList.add("loader");
        }
      })
      .onAfterResize(() => {
        // apply new parallax values after resize
        applyPlanesParallax(index);
      });
  }
  // calculate the parallax effect  create this blank function
  function applyPlanesParallax(index) {
    // // get our window size
    // const sceneBoundingRect = curtains.getBoundingRect();
    // // get our plane center coordinate
    // const planeBoundingRect = planes[index].getBoundingRect();
    // const planeOffsetTop = planeBoundingRect.top + planeBoundingRect.height / 2;
    // // get a float value based on window height (0 means the plane is centered)
    // const parallaxEffect =
    //   (planeOffsetTop - sceneBoundingRect.height / 2) /
    //   sceneBoundingRect.height;
    // // apply the parallax effect
    // planes[index].relativeTranslation.y =
    //   (parallaxEffect * sceneBoundingRect.height) / 3;
  }
});
