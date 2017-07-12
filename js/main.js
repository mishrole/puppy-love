$(document).ready(function() {
	
	$('.hamburguer-container, .menu').on('click', function() {
		$('.hamburguer-container').toggleClass('open');
	});

	$('.scroll').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 800, 'linear');
	});

});
