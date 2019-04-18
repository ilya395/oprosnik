var oprosnik_A, oprosnik_B, oprosnik_C
$(document).ready( function() {

	$('#oprosnik_1_btn').on('click', function() {

		if ( $('#oprosnik_1_1').prop("checked") ) {
			oprosnik_A = $('#oprosnik_1_1').attr('value');
		} else if ( $('#oprosnik_1_2').prop("checked") ) {
			oprosnik_A = $('#oprosnik_1_2').attr('value');
		}; console.log(oprosnik_A);

		if ( $('#oprosnik_1_1').prop("checked") || $('#oprosnik_1_2').prop("checked") ) {
			$('.select-answers-list__item.item-first').removeClass('active');
			$('.select-answers-list__item.item-second').addClass('active');
		};
	});

	$('#oprosnik_2_btn').on('click', function() {

		if ( $('#oprosnik_2_1').prop("checked") ) {
			oprosnik_B = $('#oprosnik_2_1').attr('value');
		} else if ( $('#oprosnik_2_2').prop("checked") ) {
			oprosnik_B = $('#oprosnik_2_2').attr('value');
		}; console.log(oprosnik_B);

		if ( $('#oprosnik_2_1').prop("checked") || $('#oprosnik_2_2').prop("checked") ) {
			$('.select-answers-list__item.item-second').removeClass('active');
			$('.select-answers-list__item.item-third').addClass('active');
		};
	});

	$('#oprosnik_3_btn').on('click', function() {

		if ( $('#oprosnik_3_1').prop("checked") ) {
			oprosnik_C = $('#oprosnik_3_1').attr('value');
		} else if ( $('#oprosnik_3_2').prop("checked") ) {
			oprosnik_C = $('#oprosnik_3_2').attr('value');
		}; console.log(oprosnik_C);

		if ( $('#oprosnik_3_1').prop("checked") || $('#oprosnik_3_2').prop("checked") ) {
			$('.select-answers-list__item.item-third').removeClass('active');
			$('.select-answers-list__item.item-fourth').addClass('active');
		};
	});

	$('#oprosnik_4_btn').on('click', function() {
		var longLine = $('#selectMoreThreeDots input:checkbox:checked').length;
		//console.log(longLine);
		if ( longLine < 1 ) {
			alert('Выбери нормально, а?');
		} else if ( longLine <= 3 ) {
			$('.select-answers-list__item.item-fourth').removeClass('active');
			$('.select-answers-list__item.item-fifth').addClass('active');
		} else if ( longLine > 3 ) {
			alert('Выбери нормально, а?');
			$('#selectMoreThreeDots input:checkbox').prop('checked', false);
		};
	});

	$('#oprosnik_5_btn').on('click', function() {
		if ( $('#oprosnik_5_1').prop("checked") || $('#oprosnik_5_2').prop("checked") || $('#oprosnik_5_3').prop("checked") ) {
			$('.select-answers-list__item.item-fifth').removeClass('active');
			$('.select-answers-list__item.item-sixth').addClass('active');
		};
	});

	$('#oprosnik_6_btn').on('click', function() {
		if ( $('#oprosnik_6_1').prop("checked") || $('#oprosnik_6_2').prop("checked") || $('#oprosnik_6_3').prop("checked")) {
			$('.select-answers-list__item.item-sixth').removeClass('active');
			$('.select-answers-list__item.item-seventh').addClass('active');
		};
	});

	$('#oprosnik_7_btn').on('click', function() {
		if ( $('#oprosnik_7_1').prop("checked") || $('#oprosnik_7_2').prop("checked") ) {
			$('.select-answers-list__item.item-seventh').removeClass('active');
			$('.select-answers-list__item.item-feedback').addClass('active');
		};
	});

	$(document).on('is_sucsessful', function(event, response) {
		form = response.form;
		$('#oprosnikFeedBackBtn').css('display', 'none');
		$('#oprosnikFeedBackSucsessBtn').css('display', 'block');
	});

	$('#oprosnikFeedBackSucsessBtn').on('click', function() {
		$('.select-answers-list__item.item-feedback').removeClass('active');
		$('.select-answers-list__item.item-finish').addClass('active');

		console.log(oprosnik_A, oprosnik_B, oprosnik_C);
		if ( oprosnik_A === oprosnik_B ) {
			//вывод
			if ( oprosnik_A == 0 ) {
				console.log(0);
				$('.select-answers-list__answer-a').addClass('active');
			} else if ( oprosnik_A == 1 ) {
				console.log(1);
				$('.select-answers-list__answer-b').addClass('active');
			};

		} else if ( oprosnik_A === oprosnik_C ) {
			//вывод
			if ( oprosnik_A == 0 ) {
				$('.select-answers-list__answer-a').addClass('active');
			} else if ( oprosnik_A == 1 ) {
				$('.select-answers-list__answer-b').addClass('active');
			};
		} else if ( oprosnik_B === oprosnik_C ) {
			if ( oprosnik_B == 0 ) {
				$('.select-answers-list__answer-a').addClass('active');
			} else if ( oprosnik_B == 1 ) {
				$('.select-answers-list__answer-b').addClass('active');
			};
		};

	});

// включаем анимацию
	window.onscroll = function() {	
		var specOprosnikAnimate = document.getElementById('specOprosnikAnimate');
		var coordsForOprosnik = specOprosnikAnimate.getBoundingClientRect();
		console.log(coordsForOprosnik.top);
		var windowHeight = document.documentElement.clientHeight;
		if (coordsForOprosnik.top < 400) {
			var firstQuestionMove = document.getElementById('firstQuestionMove');
			firstQuestionMove.classList.add('show');
		}
	}
});