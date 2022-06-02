gsap.set("h1 div", {yPercent:-103})
gsap.set("h1", {autoAlpha:1})
const tl = gsap.timeline({})
tl.to("h1 div", {duration:1, yPercent:0, stagger:0.05, ease:"expo.inOut"})

.to("h1 div:not([data-char='.'])", {duration:1, yPercent:103, stagger:0.1, ease:"expo.inOut"})

let headings = gsap.utils.toArray("h3");

headings.forEach(function (element, index) {
  gsap.to(element, {
    backgroundImage: "linear-gradient(var(--tiber) 100%, orange 200%, var(--tiber) 300%)",
    duration: 2,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top 60%",
      end: "+=300px",
      scrub: true
    }
  });
});
