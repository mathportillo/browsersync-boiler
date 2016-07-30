$(document).ready(function() {
	titleAnim();
});

function titleAnim(txtLine1){
	tl = new TimelineMax();

	var delayOne = 0.5;
	
	tl
		.add([
			TweenMax.set(document.querySelector(".title"), {alpha:1}),
			TweenMax.fromTo(document.querySelector(".line"), 0.5, {scaleY:0}, {scaleY:1, ease:Power4.easeInOut}),
			TweenMax.fromTo(document.querySelector(".titleContent.left"), 0.4, {alpha:0, x:800, y:-450, }, {alpha:1, x:0, y:0, ease:Power3.easeOut}, "-=0.8"),
			TweenMax.fromTo(document.querySelector(".titleContent.right"), 0.4, {alpha:0, x:-800, y:450, }, {alpha:1, x:0, y:0, ease:Power3.easeOut}, "-=0.6"),
			
			TweenMax.set(document.querySelector(".titleMask.left"), {scale:2, x:-400, delay:delayOne}),
			TweenMax.set(document.querySelector(".lineCont"), {scale:2, x:-110, delay:delayOne}),
			TweenMax.set(document.querySelector(".titleMask.right"), {alpha:0, delay:delayOne}),

			TweenMax.set(document.querySelector(".titleMask.left"), {alpha:0, delay:delayOne+0.1}),
			TweenMax.set(document.querySelector(".titleMask.right"), {alpha:1, scale:2, x:400, y:200, delay:delayOne+0.1}),
			TweenMax.set(document.querySelector(".lineCont"), {scale:2, x:225, delay:delayOne+0.1}),			
			TweenMax.set(document.querySelector(".titleContent.left"), {className:"-=blue", delay:delayOne+0.1}),


			TweenMax.set([document.querySelector(".titleMask.right"), document.querySelector(".titleMask.left")], {alpha:1, clearProps:"x,y, scale", delay:delayOne+0.2}),
			TweenMax.set(document.querySelector(".title"), {scale:2, y:200, alpha:0.5, delay:delayOne+0.2}),			
			TweenMax.set(document.querySelector(".lineCont"), {alpha:0, delay:delayOne+0.2}),			
			
			TweenMax.set(document.querySelector(".title"), {alpha:0, delay:delayOne+0.3}),			
		])
}
