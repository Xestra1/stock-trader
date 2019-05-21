var bal = 1000;
var days = 0;
var complete = false;

var stocks = [{
		name: 'AMD',
		id: 0,
		value: 25,
		quantityOwned: 0,
		stockDeIn: 1
	},
	{
		name: 'PayPal',
		id: 1,
		value: 100,
		quantityOwned: 0,
		stockDeIn: 2
	},
	{
		name: 'Apple',
		id: 2,
		value: 200,
		quantityOwned: 0,
		stockDeIn: 4
	},
	{
		name: 'Google',
		id: 3,
		value: 1250,
		quantityOwned: 0,
		stockDeIn: 10
	},
	{
		name: 'Amazon',
		id: 4,
		value: 1900,
		quantityOwned: 0,
		stockDeIn: 15
	},
	{
		name: 'MicroSoft',
		id: 5,
		value: 120,
		quantityOwned: 0,
		stockDeIn: 2
	}
];

// =============================================================


document.getElementById('balance').innerHTML = bal;
document.getElementById('day').innerHTML = days;

for (a = 0; a < 6; a++) {
	document.getElementById('stockPrice' + a).innerHTML = stocks[a].value;
	document.getElementById('quantity' + a).innerHTML = stocks[a].quantityOwned;
}


function simulation() {
	if (bal > 0 && bal < 10000) {
		days++;
		randomizer();
		document.getElementById('day').innerHTML = days;
	} else if (bal > 0 && bal >= 10000 && complete === false) {
		alert('You won!\r\nBalance: ' + bal + '\r\nDays to complete: ' + days + '\r\nHit OK to continue');
		complete = true;
	} else {
		alert('You Suck! HAHA loser!\r\nBalance: ' + bal + '\r\nDays to fail: ' + days + '\r\nRefresh to start a new game');
	}
}


function randomizer() {
	for (b = 0; b < 6; b++) {
		var random = Math.floor(Math.random() * 3);
		if (random === 0) {
			stocks[b].value = stocks[b].value + stocks[b].stockDeIn;
			document.getElementById('stockPrice' + b).innerHTML = stocks[b].value;
			document.getElementById("circleUp" + b).style.transform = "rotate(0deg)";
			document.getElementById("circleUp" + b).style.color = "#03A9F4";
		} else if (random === 1 && stocks[b].value != 0) {
			stocks[b].value = stocks[b].value - stocks[b].stockDeIn;
			document.getElementById('stockPrice' + b).innerHTML = stocks[b].value;
			document.getElementById("circleUp" + b).style.transform = "rotate(180deg)";
			document.getElementById("circleUp" + b).style.color = "#FF5252";
		} else if (random === 2) {
			console.log('Stock Price neutral ' + stocks[b].id);
			document.getElementById('stockPrice' + b).innerHTML = stocks[b].value;
			document.getElementById("circleUp" + b).style.transform = "rotate(90deg)";
			document.getElementById("circleUp" + b).style.color = "#757575";
		} else {
			console.log('randomizer not working');
		}
	}
}

function buy(numBuy) {
	if (bal > 0.0 && stocks[numBuy].value < bal) {
		stocks[numBuy].quantityOwned++;
		bal -= stocks[numBuy].value;
		document.getElementById('quantity' + numBuy).innerHTML = stocks[numBuy].quantityOwned;
		document.getElementById('balance').innerHTML = bal;
	}
}

function sell(numSell) {
	if (stocks[numSell].quantityOwned >= 1) {
		stocks[numSell].quantityOwned--;
		bal += stocks[numSell].value;
		document.getElementById('quantity' + numSell).innerHTML = stocks[numSell].quantityOwned;
		document.getElementById('balance').innerHTML = bal;
	}
}