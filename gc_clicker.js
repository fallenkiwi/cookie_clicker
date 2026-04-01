// Golden Cookie Clicker
// originally by RainSlide
// Automatically clicks golden cookies, wrath cookies, and reindeers.
// Automatically clicks on new fortunes.
// Automatically pops normal (non-shiny) wrinklers.

"use strict";

if (typeof Game !== "object" || Game === null || !Array.isArray(Game.shimmers)) {

	console.error(
		"Golden Cookie Clicker: Cookie Clicker API is not ready or invalid.\n" +
		"Please make sure you are running this script on a Cookie Clicker webpage, " +
		"and the page is fully loaded."
	);

} else if (typeof Proxy !== "function") {

	console.error(
		"Golden Cookie Clicker: JavaScript Proxy API is not available, " +
		"either update your browser, or use the ES3 compatible version:\n"+
		"https://rainslide.neocities.org/cookieclicker/GoldenCookieClicker.es3.js"
	);

} else {
	console.log("Reading the golden add on.");

	const apply = (target, _this, args) => {
		var shimmer = args[0];
		if (shimmer.type === "golden" || shimmer.type === "reindeer") {
			setTimeout(() => shimmer.pop(), 500);
		}
		return Reflect.apply(target, _this, args);
	};

	Object.defineProperty(Game.shimmers, "push", {
		value: new Proxy(Game.shimmers.push, { apply }),
		writable: true,
		enumerable: false,
		configurable: true
	});

	typeof Game.Win === "function" &&
	Game.Win("Third-party");

	console.log("Successfully read the golden add on.");
}

// Auto-click fortune tickers
setInterval(function() {
    if (Game.TickerEffect && Game.TickerEffect.type == 'fortune') {
        var el = Game.tickerL || document.getElementById('tickerL');
        if (el) el.click();
    }
}, 3000);

// Auto-pop normal (non-shiny) wrinklers
setInterval(function() {
    for (var i = 0; i < 12; i++) {
        if (Game.wrinklers[i].type == 0 && Game.wrinklers[i].sucked > 0) {
            Game.wrinklers[i].hp = 0;
        }
    }
}, 1000);
