$(function(){
	$(".navbar-toggler").click(function(){
		$("#collapsibleNavbar").animate({width: 'toggle'},200);
	})
	if($(window).width()<=1024){
		$("#collapsibleNavbar").hide();
	}
	
	$(".only").click(function(){
		$("#mark-search").show();
	})
	
	$(".m-img-btn").click(function(){
		$("#mark-search").hide();
	})
})

$(window).resize(function(){
	if($(window).width()<=1024){
		$("#collapsibleNavbar").hide();
	}
})
	