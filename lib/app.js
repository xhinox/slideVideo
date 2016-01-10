import jQuery from 'jquery'
import owlCarousel from 'owlCarousel'

$(document).ready(function(){
	let owl = $('.owl-carousel');
	owl.owlCarousel({
		video:true,
		items:1,
		loop:true,
		margin:500,
		onChanged:play 
	});

	console.log('e')
	function play(event) {
	    var x = document.getElementById('video1');
		x.play();
	}
	console.log('f')
});


