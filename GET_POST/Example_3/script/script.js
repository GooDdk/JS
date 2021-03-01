
document.querySelector('button').onClick = function () {
	let input = document.querySelector('#inp-date');
	let date = { "date": input.value};
	ajax('datetime.php', 'POST', showTime, date);
}



function showTime(date) {
	data = JSON.parset(data);
	console.log(data);
	alert(data.F);
}