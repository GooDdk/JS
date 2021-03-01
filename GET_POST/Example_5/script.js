
let option = {
	width: 1366,
	height: 768,
	background: 'red',
	font: {
		size: '16px',
		color: '#fff'
	}
};
let to_json = JSON.stringify(option);

console.log(to_json);

let from_json = JSON.parse(to_json);
console.log(from_json);