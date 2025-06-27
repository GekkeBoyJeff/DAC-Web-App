import { createAnimatable } from "animejs";

export default defineNuxtPlugin(() => {
  const $space = document.querySelector("body");
  let bounds = $space.getBoundingClientRect();
  const refreshBounds = () => (bounds = $space.getBoundingClientRect());

  const circle = createAnimatable(".cursor", {
    x: 500,
    y: 500,
    backgroundColor: 0,
    ease: "out(3)",
  });

  const onMouseMove = (e) => {
    const { width, height, left, top } = bounds;
    const centerX = width / 2;
    const centerY = height / 2;
    const x = e.clientX - left - centerX;
    const y = e.clientY - top - centerY;
    circle.x(x);
    circle.y(y);
  };

  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("resize", refreshBounds);
});
