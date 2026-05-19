"use strict";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var M = Game.ObjectsById[7].minigame;
var tower = Game.ObjectsById[7];
var fthof = M.spellsById[1];

async function gogogo() {
    M.castSpell(fthof);
    tower.sell(806);
    await sleep(100);
    M.castSpell(fthof);
    tower.buy(410);

    await sleep(100);
    grimoireLumpRefill.click();
    promptOption0.click();

    await sleep(100);
    M.castSpell(fthof);
    tower.sell(480);
    await sleep(1000); // I need to click on the golden cookies on screen
    M.castSpell(fthof);
}

gogogo();
