$('button').click(function() {
	console.log('Ты кликнул на кнопку');
});

$('button').dblclick(function() {
	console.log('Ты кликнул на кнопку дважды');
});

// $('ul li').mouseenter(function(event) {
// 	$(this).css('color', 'red');
// });

$('ul li').mousedown(function(event) {
	$(this).css('color', 'red');
});

$('ul li').mouseup(function(event) {
	$(this).css('color', '#333');
});

$('ul li').mouseover(function(event) {
	$(this).css('color', 'blue');
});

$('ul li').mouseout(function(event) {
	$(this).css('color', 'black');
});

$('ul li').mousemove(function(event) {
	$(this).toggleClass('blue');
});