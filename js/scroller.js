// const sectionColors = ["transparent", "salmon", "green"]
// const navColors =     ["transparent",  "#FFA07A", "#90EE90"]

// gsap.set(".fullscreen", {
//   backgroundColor: gsap.utils.wrap(sectionColors),
// });

const sections = gsap.utils.toArray(".fullscreen");

sections.forEach(
  function (section, index) {
  ScrollTrigger.create({
    trigger: section,
    start: "top center",
    end: "bottom center",
    markers: false,
    animation: gsap.to(`li:nth-child(${index + 1})`, {
      duration: 0.2,
      opacity: 1,
      color: "var(--gold)",
      scale: 1.2,
    }),
    onToggle: (self) => {
      self.animation.reversed(!self.isActive);
    },
  });
}
);