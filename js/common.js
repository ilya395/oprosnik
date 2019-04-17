$(document).ready( function() {
	$('#oprosnik_1_btn').on('click', function() {
		if ( $('#oprosnik_1_1').prop("checked") || $('#oprosnik_1_2').prop("checked") ) {
			$('.select-answers-list__item.item-first').removeClass('active');
			$('.select-answers-list__item.item-second').addClass('active');
		};
	});


	var items = document.getElementsByClassName('select-answers-list__item');
	var itemBtn = document.getElementsByClassName('select-answers-list__btn');
	var itemForm = document.getElementsByClassName('select-answers-list__form');



	//for (var i = 0; i < items.length; i++) {
		//items[i].classList.remove('active');
	//	itemBtn[i].addEventListener('click', function() {

	//	items[i].classList.add('active');

		//	if ( document.itemForm[i].r1[0].checked=true ) {
		//		
		//		
		//	}

	//	});
	//};


});