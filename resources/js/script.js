$(document).ready(function() {

	$('.js--section-parts').waypoint(function(direction){
		if (direction == "down") {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	}, {
		offset: '60px;' 
	});

	/* Scroll on buttons */
	$('.js--scroll-works').click(function() {
		$(this).text('Work...');		
	});

	$('.js--scroll-about').click(function(){
		$('html, body').animate({scrollTop: $('.js--section-parts').offset().top}, 1000);
	});

	/* Smooth (navigation) Scrolling */

	$(function() {
  		$('a[href*=#]:not([href=#])').click(function() {
    		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      		var target = $(this.hash);
      		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      		if (target.length) {
	        		$('html,body').animate({
	         		 scrollTop: target.offset().top
	        		}, 1000);
	        		return false;
	      		}
   			}
 		});
	});

	/* Animations on scroll */
	$('.js--wp-1').waypoint(function(direction) {
		$('.js--wp-1').addClass('animated fadeIn');
	}, {
		offset:'60%'
	});

	/* Mobile navigation */
	$('.js--nav-icon').click(function() {
		var nav = $('.js--main-nav');
		var icon = $('.js--nav-icon i');

		nav.slideToggle(200);
		/* switch */
		if (icon.hasClass('ion-navicon-round')){
			icon.addClass('ion-close-round');
			icon.removeClass('ion-navicon-round');
		} else {
			icon.addClass('ion-navicon-round');
			icon.removeClass('ion-close-round');
		}
	});

	$(window).resize(function() {
	    if ($(window).width() > 751) { // 768 - 17px (from?)
	        $('ul').removeAttr('style');
	    }
	}).resize();

});