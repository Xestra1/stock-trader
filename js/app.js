var bal = 1000;
var days = 0;

function Stocks(name, id, value, quantityOwned) {
	this.name = name;
	this.id = id;
	this.value = value;
	this.quantityOwned = quantityOwned;
}

var stockOne = new Stocks('AMD', 1, 25, 0);
var stockTwo = new Stocks('PayPal', 2, 100, 0);
var stockThree = new Stocks('Apple', 3, 200, 0);
var stockFour = new Stocks('Google', 4, 1250, 0);
var stockFive = new Stocks('Amazon', 5, 1900, 0);
var stockSix = new Stocks('MicroSoft', 6, 120, 0);

// =============================================================


document.getElementById('balance').innerHTML = bal;
document.getElementById('day').innerHTML = days;
document.getElementById('stockPriceOne').innerHTML = stockOne.value;
document.getElementById('quantityOne').innerHTML = stockOne.quantityOwned;
document.getElementById('stockPriceTwo').innerHTML = stockTwo.value;
document.getElementById('quantityTwo').innerHTML = stockTwo.quantityOwned;
document.getElementById('stockPriceThree').innerHTML = stockThree.value;
document.getElementById('quantityThree').innerHTML = stockThree.quantityOwned;
document.getElementById('stockPriceFour').innerHTML = stockFour.value;
document.getElementById('quantityFour').innerHTML = stockFour.quantityOwned;
document.getElementById('stockPriceFive').innerHTML = stockFive.value;
document.getElementById('quantityFive').innerHTML = stockFive.quantityOwned;
document.getElementById('stockPriceSix').innerHTML = stockSix.value;
document.getElementById('quantitySix').innerHTML = stockSix.quantityOwned;


function simulation() {
	days++;
	randomizer1(stockOne.id, stockOne.value);
	randomizer2(stockTwo.id, stockTwo.value);
	randomizer3(stockThree.id, stockThree.value);
	randomizer4(stockFour.id, stockFour.value);
	randomizer5(stockFive.id, stockFive.value);
	randomizer6(stockSix.id, stockSix.value);
	document.getElementById('day').innerHTML = days;
}

function randomizer1(id, value) {
	var random = Math.floor(Math.random() * 3);
	if (random === 0) {
		value++;
		stockOne.value = value;
		document.getElementById('stockPriceOne').innerHTML = value;
		//css
		document.getElementById("circleUpOne").style.transform = "rotate(0deg)";
		document.getElementById("circleUpOne").style.color = "#03A9F4";
	} else if (random === 1 && value != 0) {
		value--;
		stockOne.value = value;
		document.getElementById('stockPriceOne').innerHTML = value;
		//css
		document.getElementById("circleUpOne").style.transform = "rotate(180deg)";
		document.getElementById("circleUpOne").style.color = "#FF5252";
	} else if (random === 2) {
		console.log('Stock Price neutral ' + id);
		document.getElementById('stockPriceOne').innerHTML = value;
		//css
		document.getElementById("circleUpOne").style.transform = "rotate(90deg)";
		document.getElementById("circleUpOne").style.color = "#757575";
	} else {
		console.log('randomizer not working');
	}
}

function randomizer2(id, value) {
	var random = Math.floor(Math.random() * 3);
	if (random === 0) {
		value++;
		stockTwo.value = value;
		document.getElementById('stockPriceTwo').innerHTML = value;
		document.getElementById("circleUpTwo").style.transform = "rotate(0deg)";
		document.getElementById("circleUpTwo").style.color = "#03A9F4";
	} else if (random === 1 && value != 0) {
		value--;
		stockTwo.value = value;
		document.getElementById('stockPriceTwo').innerHTML = value;
		document.getElementById("circleUpTwo").style.transform = "rotate(180deg)";
		document.getElementById("circleUpTwo").style.color = "#FF5252";
	} else if (random === 2) {
		console.log('Stock Price neutral ' + id);
		document.getElementById('stockPriceTwo').innerHTML = value;
		document.getElementById("circleUpTwo").style.transform = "rotate(90deg)";
		document.getElementById("circleUpTwo").style.color = "#757575";
	} else {
		console.log('randomizer not working');
	}
}

function randomizer3(id, value) {
	var random = Math.floor(Math.random() * 3);
	if (random === 0) {
		value++;
		stockThree.value = value;
		document.getElementById('stockPriceThree').innerHTML = value;
		document.getElementById("circleUpThree").style.transform = "rotate(0deg)";
		document.getElementById("circleUpThree").style.color = "#03A9F4";
	} else if (random === 1 && value != 0) {
		value--;
		stockThree.value = value;
		document.getElementById('stockPriceThree').innerHTML = value;
		document.getElementById("circleUpThree").style.transform = "rotate(180deg)";
		document.getElementById("circleUpThree").style.color = "#FF5252";
	} else if (random === 2) {
		console.log('Stock Price neutral ' + id);
		document.getElementById('stockPriceThree').innerHTML = value;
		document.getElementById("circleUpThree").style.transform = "rotate(90deg)";
		document.getElementById("circleUpThree").style.color = "#757575";
	} else {
		console.log('randomizer not working');
	}
}

function randomizer4(id, value) {
	var random = Math.floor(Math.random() * 3);
	if (random === 0) {
		value++;
		stockFour.value = value;
		document.getElementById('stockPriceFour').innerHTML = value;
		document.getElementById("circleUpFour").style.transform = "rotate(0deg)";
		document.getElementById("circleUpFour").style.color = "#03A9F4";
	} else if (random === 1 && value != 0) {
		value--;
		stockFour.value = value;
		document.getElementById('stockPriceFour').innerHTML = value;
		document.getElementById("circleUpFour").style.transform = "rotate(180deg)";
		document.getElementById("circleUpFour").style.color = "#FF5252";
	} else if (random === 2) {
		console.log('Stock Price neutral ' + id);
		document.getElementById('stockPriceFour').innerHTML = value;
		document.getElementById("circleUpFour").style.transform = "rotate(90deg)";
		document.getElementById("circleUpFour").style.color = "#757575";
	} else {
		console.log('randomizer not working');
	}
}

function randomizer5(id, value) {
	var random = Math.floor(Math.random() * 3);
	if (random === 0) {
		value++;
		stockFive.value = value;
		document.getElementById('stockPriceFive').innerHTML = value;
		document.getElementById("circleUpFive").style.transform = "rotate(0deg)";
		document.getElementById("circleUpFive").style.color = "#03A9F4";
	} else if (random === 1 && value != 0) {
		value--;
		stockFive.value = value;
		document.getElementById('stockPriceFive').innerHTML = value;
		document.getElementById("circleUpFive").style.transform = "rotate(180deg)";
		document.getElementById("circleUpFive").style.color = "#FF5252";
	} else if (random === 2) {
		console.log('Stock Price neutral ' + id);
		document.getElementById('stockPriceFive').innerHTML = value;
		document.getElementById("circleUpFive").style.transform = "rotate(90deg)";
		document.getElementById("circleUpFive").style.color = "#757575";
	} else {
		console.log('randomizer not working');
	}
}

function randomizer6(id, value) {
	var random = Math.floor(Math.random() * 3);
	if (random === 0) {
		value++;
		stockSix.value = value;
		document.getElementById('stockPriceSix').innerHTML = value;
		document.getElementById("circleUpSix").style.transform = "rotate(0deg)";
		document.getElementById("circleUpSix").style.color = "#03A9F4";
	} else if (random === 1 && value != 0) {
		value--;
		stockSix.value = value;
		document.getElementById('stockPriceSix').innerHTML = value;
		document.getElementById("circleUpSix").style.transform = "rotate(180deg)";
		document.getElementById("circleUpSix").style.color = "#FF5252";
	} else if (random === 2) {
		console.log('Stock Price neutral ' + id);
		document.getElementById('stockPriceSix').innerHTML = value;
		document.getElementById("circleUpSix").style.transform = "rotate(90deg)";
		document.getElementById("circleUpSix").style.color = "#757575";
	} else {
		console.log('randomizer not working');
	}
}

function buy(numBuy) {
	if (numBuy === 1 && bal > 0 && stockOne.value < bal) {
		stockOne.quantityOwned++;
		bal -= stockOne.value;
		document.getElementById('quantityOne').innerHTML = stockOne.quantityOwned;
		document.getElementById('balance').innerHTML = bal;
	} else if (numBuy === 2 && bal > 0 && stockOne.value < bal) {
		stockTwo.quantityOwned++;
		bal -= stockTwo.value;
		document.getElementById('quantityTwo').innerHTML = stockTwo.quantityOwned;
		document.getElementById('balance').innerHTML = bal;
	} else if (numBuy === 3 && bal > 0 && stockOne.value < bal) {
		stockThree.quantityOwned++;
		bal -= stockThree.value;
		document.getElementById('quantityThree').innerHTML = stockThree.quantityOwned;
		document.getElementById('balance').innerHTML = bal;
	} else if (numBuy === 4 && bal > 0 && stockOne.value < bal) {
		stockFour.quantityOwned++;
		bal -= stockFour.value;
		document.getElementById('quantityFour').innerHTML = stockFour.quantityOwned;
		document.getElementById('balance').innerHTML = bal;
	} else if (numBuy === 5 && bal > 0 && stockOne.value < bal) {
		stockFive.quantityOwned++;
		bal -= stockFive.value;
		document.getElementById('quantityFive').innerHTML = stockFive.quantityOwned;
		document.getElementById('balance').innerHTML = bal;
	} else if (numBuy === 6 && bal > 0 && stockOne.value < bal) {
		stockSix.quantityOwned++;
		bal -= stockSix.value;
		document.getElementById('quantitySix').innerHTML = stockSix.quantityOwned;
		document.getElementById('balance').innerHTML = bal;
	} else {
		console.log('Buy function not working or no balance');
	}
}

function sell(numSell) {
	if (numSell === 1 && stockOne.quantityOwned >= 1) {
		stockOne.quantityOwned--;
		bal += stockOne.value;
		document.getElementById('quantityOne').innerHTML = stockOne.quantityOwned;
		document.getElementById('balance').innerHTML = bal;
	} else if (numSell === 2 && stockTwo.quantityOwned >= 1) {
		stockTwo.quantityOwned--;
		bal += stockTwo.value;
		document.getElementById('quantityTwo').innerHTML = stockTwo.quantityOwned;
		document.getElementById('balance').innerHTML = bal;
	} else if (numSell === 3 && stockThree.quantityOwned >= 1) {
		stockThree.quantityOwned--;
		bal += stockThree.value;
		document.getElementById('quantityThree').innerHTML = stockThree.quantityOwned;
		document.getElementById('balance').innerHTML = bal;
	} else if (numSell === 4 && stockFour.quantityOwned >= 1) {
		stockFour.quantityOwned--;
		bal += stockFour.value;
		document.getElementById('quantityFour').innerHTML = stockFour.quantityOwned;
		document.getElementById('balance').innerHTML = bal;
	} else if (numSell === 5 && stockFive.quantityOwned >= 1) {
		stockFive.quantityOwned--;
		bal += stockFive.value;
		document.getElementById('quantityFive').innerHTML = stockFive.quantityOwned;
		document.getElementById('balance').innerHTML = bal;
	} else if (numSell === 6 && stockSix.quantityOwned >= 1) {
		stockSix.quantityOwned--;
		bal += stockSix.value;
		document.getElementById('quantitySix').innerHTML = stockSix.quantityOwned;
		document.getElementById('balance').innerHTML = bal;
	} else {
		console.log('Sell function not working or no quantityOwned');
	}
}