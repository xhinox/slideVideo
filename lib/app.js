import jQuery from 'jquery'
import owlCarousel from 'owlCarousel'
// import clima from './encabezado/clima'

$(document).ready(function(){

	// debugger
	// var key = '1dbb3ee69bd082452480b7b9b6a17661'
	// var api = new clima(key)
	// api.hasAlgo()

	let owl = $('.owl-carousel');
	let $body = $('body');

	$body.addClass('backImage')

	owl.owlCarousel({
		video:true,
		items:1,
		margin:500,
		video:true,
		lazyLoad:true,
		// autoplay:true,
		onInitialized:cambioElemento,
		onTranslated:cambioElemento
	});

	function cambioElemento(e) {

		if ($body.hasClass('backColor')) {
			$body.removeClass('backColor').addClass('backImage');
		}

		const count = e.item.count - 1;
		let element = e.item.index;

		let info = $('.owl-item.active').children(0).data('info');

		if (info === 'video'){
			
			$body.removeClass('backImage').addClass('backColor');

			let iVideo = $('.owl-item.active').children(0).children(0).attr('id')
			
			owl.trigger('stop.owl.autoplay');
			
			let x = document.getElementById(`${iVideo}`);
			x.play();

			x.addEventListener("ended", () => {

				if (count === element){
					console.log('pum')
					owl.trigger('to.owl.carousel', [0, 0]);
					owl.trigger('play.owl.autoplay');
				} else {
					owl.trigger('next.owl.autoplay', [0]);
					owl.trigger('play.owl.autoplay');
				}

			});

		}
	}

});


