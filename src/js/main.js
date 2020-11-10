$(function () {
  $('.burger').on('click', function (){
		$(this).toggleClass('open');
		$('.nav').toggleClass('open');
	});
});