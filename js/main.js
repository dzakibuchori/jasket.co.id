$(document).ready(function(){
	$(".nav a").on("click", function(){
		$(".nav").find(".active").removeClass("active");
		$(this).parent().addClass("active");
	});
	$(".backtotop").fadeOut();
	if ($(window).width() <= 767){
		$(".navbar-collapse").css("width",(50/100)*($(window).width()));
		console.log("window : " + $(window).width());
		console.log("navbar : " + $(".navbar-collapse").width());
	} else {
		$(".navbar-collapse").css("width",'');
		console.log("navbar : " + $(".navbar-collapse").width());
	}

	var countScroll = 5;
	var lastScroll = 0;
	var winHeight = $(window).height();

	$(window).resize(function(){
		if ($(window).width() <= 767){
			$(".navbar-collapse").css("width",(50/100)*($(window).width()));
			console.log("window : " + $(window).width());
			console.log("navbar : " + $(".navbar-collapse").width());
		} else {
			$(".navbar-collapse").css("width",'');
			console.log("navbar : " + $(".navbar-collapse").width());
		}
	});

	$(window).scroll(function(event){
	   var scroller = $(this).scrollTop();
	   if (scroller-countScroll > lastScroll){
	      $(".navbar-wrapper").slideUp();
	   } else if (scroller+countScroll < lastScroll) {
	      $(".navbar-wrapper").slideDown();
	   }
	   lastScroll = scroller;

	   if (scroller+winHeight > winHeight){
	      $(".backtotop").fadeIn();
	   } else {
	   	  $(".backtotop").fadeOut();
	   }
	});

	
});
