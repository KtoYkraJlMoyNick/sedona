$(document).ready(function(){
	$(".fa").on("click",function(){
		if ( $(this).hasClass("fa-bars")) {
			$(this).removeClass("fa-bars").addClass("fa-times");
		} else {
			$(this).removeClass("fa-times").addClass("fa-bars");
		}
	});
})