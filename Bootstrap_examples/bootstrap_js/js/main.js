(function() {
	'use strict';
	window.addEventListener('load', function() {
		var forms = document.getElementsByClassName('myForm');
			var validation = Array.prototype.filter.call(forms, function(form) {
			form.addEventListener('submit', function(event) {
				if (form.checkValidity() === false) {
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add('was-validate');
			}, false);
		});
	}, false);
})();

$('.my-carousel').carousel({
	interval: 4000
});

$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})