const el = document.querySelector('#project');
const fx = new TextScramble(el);
fx.setText("PROJECT");

gsap.registerPlugin(ScrollTrigger);
let tween;
let carrousel = document.querySelector(".carrousel");
let panels = gsap.utils.toArray(".projectItem");
let scrollFunc = ScrollTrigger.getScrollFunc(window);
var resp = window.matchMedia("(max-width: 480px)");
if(resp.matches){
	tween = gsap.to(panels, {
		yPercent: -100 * ( panels.length - 1 ),
		ease: "none",
		scrollTrigger: {
			trigger: ".carrousel",
			pin: true,
			start: "top top",
			scrub: 1,
			anticipatePin: 1,
			snap: {
				snapTo: 1 / (panels.length - 1),
				inertia: false,
				duration: {min: 0.1, max: 0.1}
			},
			end: () =>  "+=" + (carrousel.offsetHeight - innerHeight)
		}
	});
}else{
	tween = gsap.to(panels, {
		xPercent: -100 * ( panels.length - 1 ),
		ease: "none",
		scrollTrigger: {
			trigger: ".carrousel",
			pin: true,
			start: "top top",
			scrub: 1,
			anticipatePin: 1,
			snap: {
				snapTo: 1 / (panels.length - 1),
				inertia: false,
				duration: {min: 0.1, max: 0.1}
			},
			end: () =>  "+=" + (carrousel.offsetWidth - innerWidth)
		}
	});
}