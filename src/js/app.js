let bal = 1000;
let days = 0;
let complete = false;
let multiply = 1;
let balToWin = 10000;

let stocks = [{
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

for (a = 0; a < stocks.length; a++) {
	document.getElementById('stockPrice' + a).innerHTML = stocks[a].value;
	document.getElementById('quantity' + a).innerHTML = stocks[a].quantityOwned;
}


const simulation = () => {
	if (bal > 0.0 && bal < balToWin) {
		days++;
		randomizer();
		document.getElementById('day').innerHTML = days;
	} else if (bal > 0.0 && bal >= balToWin && complete === false) {
		alert('You won!\r\nBalance: ' + bal + '\r\nDays to complete: ' + days + '\r\nHit OK to continue');
		complete = true;
	} else {
		alert('You Suck! HAHA loser!\r\nBalance: ' + bal + '\r\nDays to fail: ' + days + '\r\nRefresh to start a new game');
	}
}

const randomizer = () => {
	for (b = 0; b < stocks.length; b++) {
		let random = Math.floor(Math.random() * 3);
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
			// console.log('Stock Price neutral ' + stocks[b].id);
			document.getElementById('stockPrice' + b).innerHTML = stocks[b].value;
			document.getElementById("circleUp" + b).style.transform = "rotate(90deg)";
			document.getElementById("circleUp" + b).style.color = "#757575";
		}
	}
}

const buy = (numBuy) => {
	if (bal > 0.0 && stocks[numBuy].value < bal) {
		stocks[numBuy].quantityOwned += multiply;
		bal -= stocks[numBuy].value * multiply;
		document.getElementById('quantity' + numBuy).innerHTML = stocks[numBuy].quantityOwned;
		document.getElementById('balance').innerHTML = bal;
		console.log(multiply);
	}
}

const sell = (numSell) => {
	if (stocks[numSell].quantityOwned >= 1 && multiply <= stocks[numSell].quantityOwned) {
		stocks[numSell].quantityOwned -= multiply;
		bal += stocks[numSell].value * multiply;
		document.getElementById('quantity' + numSell).innerHTML = stocks[numSell].quantityOwned;
		document.getElementById('balance').innerHTML = bal;
	}
}

const multiplier = (mult) => {
	multiply = mult;
	document.getElementById("changedMultiplier").innerHTML = multiply;
}