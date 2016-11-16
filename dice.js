$(document).ready( function() {


	$('#btnRoll').click( function() {
		
		var theRoll = Math.floor(Math.random()*6)+1;
		$('#txtResults').html("You rolled a " + theRoll);

		if (theRoll === 1) {
			$('#imgDice').css( "background-image" , "url(dice1.png)");
		}

	if (theRoll === 2) {
			$('#imgDice').css( "background-image" , "url(dice2.png)");
		}


	if (theRoll === 3) {
			$('#imgDice').css( "background-image" , "url(dice3.png)");
		}

	if (theRoll === 4) {
			$('#imgDice').css( "background-image" , "url(dice5.png)");
		}

	if (theRoll === 5) {
			$('#imgDice').css( "background-image" , "url(dice5.png)");
		}

	if (theRoll === 6) {
			$('#imgDice').css( "background-image" , "url(dice6.png)");
		}


	});


});