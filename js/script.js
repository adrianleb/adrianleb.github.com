/* Author: Adrian le Bas
			
		   Twitter: @adrianleb

*/

$(document).ready(function(){



	var navButton = $('#mainButton'),
			card = $('section'),
			cardHolder = $('#cardHolder'),
			currentActive,
			flippers = $('.flipper'),
			navBody = $('#nav'),
			lChar = $('.lChar'),
			lWord = $('.lWord'),
			end = $('#end'),
			leftButton = $('#navLeft'),
			rightButton = $('#navRight'),
			endOn;




		lChar.lettering();
		lWord.lettering('words');
		cardHolder.addClass('init');
		navBody.addClass('init');




		function checkScroll () {
			var currentPos = $(this).scrollLeft();
			var winWidth = $(window).width();
			var docWidth = $(document).width();

		 	if ((currentPos > 3800) && !endOn) {
		 		end.addClass('not');
			 	endOn = true;
		 	} else if ((currentPos < 3800) && endOn) {
				end.removeClass('not');
				endOn = false;
		 	}

		 	rightButton.on('click', function(){
		 		currentPos += 200;

		 	})


		};


		$(window).scroll( function() {
		checkScroll();
		});
		//THE ON BUTTON //

		navButton.toggle(
			function(e){
			card.addClass('mason');
			navBody.addClass('mason');
			checkScroll();
			e.preventDefault();
		},

			function(e){
			card.removeClass('mason');
			navBody.removeClass('mason');
			e.preventDefault();
		
		});	

		//THE FLIP//

		console.log(card)
		card.toggle(
			function(e){
			log
			$(e.currentTarget).addClass('flip');
			e.preventDefault();
			
		},
			function(e){
			$(e.currentTarget).removeClass('flip');
			e.preventDefault();	
		});	



		// CHECK SCROLLING





});
