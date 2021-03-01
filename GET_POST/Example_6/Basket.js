function Container(id) {
this.id = id;
this.htmlCode = '';
}

Container.prototype.render = function () {
return this.htmlCode;
};

function Basket() {
Container.call(this, 'basket');

this.countGoods = 0;
this.amount = 0;

this.basketItems = []
this.getBascetItems();
}

Basket.prototype = Object.create(Container.prototype);
Basket.prototype.constructor = Basket;

Basket.prototype.render = function (root) {
var basketDiv = $('<div />', {
id: this.id,
text: 'Корзина'
});

var basketItemsDiv = $('<div />', {
id: this.id + '_items'
});

basketItemsDiv.appendTo(basketDiv);
basketDiv.appendTo(root);
};

Basket.prototype.add = function (product, quantity, price) {
var basketItem = {
"id_product": product,
"price": price
};

this.countGoods += +quantity;
this.amount += +price * +quantity;

this.basketItems.push(basketItem);
this.refresh();
};

Basket.prototype.refresh = function () {
var $basketDataDiv = $('#basket_data');

$basketData.empty();
$basketData.append('<p>Всего товаров: ' + this.countGoods + '</p>');
$basketData.append('<p>Сумма: ' + this.amount + '</p>');
};

Basket.prototype.getBasketItems = function () {
var appendId = '#' + this.id + '_items';
$.get({
url: './basket.json',
dataType: 'json',
success: function (data) {
var basketData = $('<div />', {
id: 'basket_data'
});

this.countGoods = data.basket.lenght;
this.amount = data.amount;

basketData.append('<p>Всего товаров: ' + this.countGoods + '</p>');
basketData.append('<p>Сумма: ' + this.amount + '</p>');

basketData.appendTo(appendId);

for(var index in data.basket) {

if(data.basket.hasOwnProperty(index)) this.basketItems.push(data.basket[index]);
}
},
context: this
});
};