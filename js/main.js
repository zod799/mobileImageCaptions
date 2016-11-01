jQuery(function($) {
	//show the Taco image via 'show' class
	$('.btnRight').click(function(e) {
		e.preventDefault();

		var caption = getCaption();
		if (caption != 'undefinded'){
			$('#tacos figcaption').html(caption).show();
		}

		$('#tacos').toggleClass('show');
		$('#caption').val('');
	});
	
	//show the Soccer Ball image via 'show' class
	$('.btnLeft').click(function(e) {
		e.preventDefault();
		$('#soccerBall').toggleClass('show');
		var caption = getCaption();
		if (caption != 'undefinded'){
			$('#soccerBall figcaption').html(caption).show();
			$('#caption').val('');
		}

	});

	function getCaption(){
		return $('#caption').val();
	}
});