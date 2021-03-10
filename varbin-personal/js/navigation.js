$(document).ready(function(){

	var navToggleButton = $('#navigation-button');
	var navToggleIcon = $('.navigation__toggle .fas');
	var navBlock = $('.navigation__list');
	var navBlockOpen = 'navigation__list--open';
	var navLink = $('.navigation__list a');

	navToggleButton.on('click', function(e){
		e.preventDefault();
		navBlock.toggleClass(navBlockOpen);
		navButtonToggle()
	})

	navLink.on('click', function(){
		if ( navBlock.hasClass(navBlockOpen) ) {
			navButtonToggle();
		} 
		navBlock.removeClass(navBlockOpen);
	})

	function navButtonToggle(){
		if (navToggleButton.hasClass("active")) {
		 		navToggleButton.removeClass("active");
			} else {
		  		navToggleButton.addClass("active");
			}
	}

});