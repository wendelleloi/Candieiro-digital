$(document).ready(function(){

	/obter a altura do header/
	var headerHeight = $('header').outerHeight();
	console.log(headerHeight);

	$('.nav-item-child').click(function(e){
		
		var linkHef =$(this).attr('href');


		$('html, body').animate({
			scrollTop: $(linkHef).offset().top - headerHeight
		},1000);
		
		e.preventDefault();
		});
});