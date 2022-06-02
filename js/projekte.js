let t = gsap.to(".bar", 
	{xPercent:-100, 
	 ease:"power1.inOut", 
	 duration:0.8, 
	 	stagger:{
			each:0.08,
			from:"end",
			ease:"power1.in"
		}
	}
)

function init() {
	gsap.set("body", {opacity:1})
	GSDevTools.create({animation:t, paused:true})	
}

window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
  init()
});

// only for demo video
// Draggable.create(".bar")

