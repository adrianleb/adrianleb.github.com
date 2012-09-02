

/* Author: Adrian le Bas
			
		   Twitter: @adrianleb

		   Jquery 1.7.1
		   Plugins:

		   LetteringJS
		   thats it...

*/




window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console) {
    arguments.callee = arguments.callee.caller;
    var newarr = [].slice.call(arguments);
    (typeof console.log === 'object' ? log.apply.call(console.log, console, newarr) : console.log.apply(console, newarr));
  }
};

// make it safe to use console.log always
(function(b){function c(){}for(var d="assert,clear,count,debug,dir,dirxml,error,exception,firebug,group,groupCollapsed,groupEnd,info,log,memoryProfile,memoryProfileEnd,profile,profileEnd,table,time,timeEnd,timeStamp,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());


(function($){
	function injector(t, splitter, klass, after) {
		var a = t.text().split(splitter), inject = '';
		if (a.length) {
			$(a).each(function(i, item) {
				inject += '<span class="'+klass+(i+1)+'">'+item+'</span>'+after;
			});	
			t.empty().append(inject);
		}
	}
	
	var methods = {
		init : function() {

			return this.each(function() {
				injector($(this), '', 'char', '');
			});

		},

		words : function() {

			return this.each(function() {
				injector($(this), ' ', 'word', ' ');
			});

		},
		
		lines : function() {

			return this.each(function() {
				var r = "eefec303079ad17405c889e092e105b0";
				// Because it's hard to split a <br/> tag consistently across browsers,
				// (*ahem* IE *ahem*), we replaces all <br/> instances with an md5 hash 
				// (of the word "split").  If you're trying to use this plugin on that 
				// md5 hash string, it will fail because you're being ridiculous.
				injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
			});

		}
	};

	$.fn.lettering = function( method ) {
		// Method calling logic
		if ( method && methods[method] ) {
			return methods[ method ].apply( this, [].slice.call( arguments, 1 ));
		} else if ( method === 'letters' || ! method ) {
			return methods.init.apply( this, [].slice.call( arguments, 0 ) ); // always pass an array
		}
		$.error( 'Method ' +  method + ' does not exist on jQuery.lettering' );
		return this;
	};

})(jQuery);










/*Custom JS
/* Author: Adrian le Bas
			
		   Twitter: @adrianleb

*/

$(document).ready(function(){



var navButton = $('#mainButton'),
	win = $(window),
	card = $('section'),
	cardHolder = $('#cardHolder'),
	currentActive,
	flippers = $('.flipper'),
	navBody = $('#nav'),
	lChar = $('.lChar'),
	lWord = $('.lWord'),
	end = $('#end'),
	currentPos,
	pos = 0,
	leftButton = $('#navLeft'),
	rightButton = $('#navRight'),
	endOn;





	lChar.lettering();
	lWord.lettering('words');
	cardHolder.addClass('init');
	navBody.addClass('init');




	function checkScroll (left, right) {
		var currentPos = $(this).scrollLeft();
		var winWidth = $(window).width();
		var docWidth = $(document).width();

	 	if ((currentPos > 3400) && !endOn) {
	 		end.addClass('not');
		 	endOn = true;
	 	} else if ((currentPos < 3400) && endOn) {
			end.removeClass('not');
			endOn = false;
	 	}

	 	if (right) {
$('html, body').animate({

	scrollLeft : '+=320'


}, 500)

	 	}

	 	else if (left) {
$('html, body').animate({

	scrollLeft : '-=320'


}, 500)

	 	}

//console.log (currentPos);	
	 	return currentPos;
	};


	rightButton.on('click', function(e){
 			checkScroll(false, true);
	 		e.preventDefault();

	 	})
	leftButton.on('click', function(e){
 			checkScroll(true, false);
	 		e.preventDefault();

	 
	 	})

	$(window).scroll( function() {
	checkScroll(false, false);
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

	flippers.toggle(
		function(e){
		$(this).parent().addClass('flip');
		e.preventDefault();
		
	},
		function(e){
		$(this).parent().removeClass('flip');
		e.preventDefault();	
	});	



	// CHECK SCROLLING





});


