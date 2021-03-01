$('ul li').click(function(event) {
	console.log('Ты нажал на элемент');
	$('ul').append('<li>Дополнительные элементы</li>');
});

function addAndStop(e) {
	$('ul').append('<li>Дополнительные элементы</li>');
	$('ul').off('click');
}

$('ul').on('click', 'li', addAndStop);