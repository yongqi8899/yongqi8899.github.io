let navItems = gsap.utils.toArray(".nav a")
let currentItem = navItems[0]

function initNav(){
	gsap.set(".line", {x:currentItem.offsetLeft, width:currentItem.clientWidth})
}


navItems.forEach((element, index) => {
	element.addEventListener("mouseenter", function() {
		gsap.to(".line", {duration:0.3, overwrite:true, x:element.offsetLeft, width:element.clientWidth})	
		currentItem = element
	});
});

window.addEventListener("resize", initNav);

initNav()

gsap.to(".line", {autoAlpha:1, duration:0.2})