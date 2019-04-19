$(document).ready(function() {
	// Activate All tooltips on the page
	$('[data-toggle="tooltip"]').tooltip();

	// Toggle Dark mode on/off
	$('#tooltip').on('click', function(){
		// $('#toggle-switch').removeAttr('class').addClass('fas fa-moon');
		$('#toggle-switch').toggleClass('fas');
		$('main').toggleClass('dark-theme-dark');
		$('.countries-card').toggleClass('dark');
		$('.region').toggleClass('dark');
		$('.light-theme-dark').toggleClass('active');
		$('.logo').toggleClass('active');
	});

	// Toogle country filter dropdown
	$('.filter').on('click', ()=>{
		$('.region').toggleClass('active');
		$('.filter .fa-angle-down').toggleClass('fa-angle-up');
	});
});