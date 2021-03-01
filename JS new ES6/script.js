let name = "Ivan",
	age = 30,
	mail = "ex@mail.ru";

//document.write('Пользователю ' + name + ' ' + age + ' лет. Его почтовый адрес: ' + mail);
//Интерполяция (ES6)
document.write(`Пользователю ${name} ${age} лет. Его почтовый адрес: ${mail}`);



function makeArray(){
	var items = [];

	for (var i = 0; i < 10; i++) {
		var item = function(){
			console.log(i);
		};
		items.push(item);
		}
		retur items;
	}
	var arr = makeArray();

	arr[1]();
	arr[3]();
	arr[7]();



let fun = () => {
	console.log(this);
};

fun();


let obj = {
	number: 5,
	sayNumber: function() {
		let say = () => {
			console.log(this);
		};
		say();
	}
};

obj.sayNumber



//Как раньше «выкручивались»
function calc0rDouble(number, basis) {
	basis = basis || 2;
	console.log(number*basis);
}
calc0rDouble(3,5);
calc0rDouble(6);

//ES6
function calc0rDouble(number, basis = 2) {
	//basis = basis || 2; ES5
	console.log(number*basis);
}
calc0rDouble(3,5);
calc0rDouble(6);



