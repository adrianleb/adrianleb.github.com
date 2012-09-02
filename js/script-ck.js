/* Author: Adrian le Bas
			
		   Twitter: @adrianleb

*/$(document).ready(function(){function k(){var a=$(this).scrollLeft(),b=$(window).width(),c=$(document).width();if(a>3900&&!j){i.addClass("not");j=!0}else if(a<3900&&j){i.removeClass("not");j=!1}}var a=$("#mainButton"),b=$("section"),c=$("#cardHolder"),d,e=$(".flipper"),f=$("#nav"),g=$(".lChar"),h=$(".lWord"),i=$("#end"),j;g.lettering();h.lettering("words");c.addClass("init");f.addClass("init");$(window).scroll(function(){k()});a.toggle(function(a){b.addClass("mason");f.addClass("mason");k();a.preventDefault()},function(a){b.removeClass("mason");f.removeClass("mason");a.preventDefault()});e.toggle(function(a){$(this).parent().addClass("flip");a.preventDefault()},function(a){$(this).parent().removeClass("flip");a.preventDefault()})});