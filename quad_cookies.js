"use strict";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var M = Game.ObjectsById[7].minigame;
var fthof = M.spellsById[1];

var bank = Game.ObjectsById[5];
var tower = Game.ObjectsById[7];

async function gogogo() {
    M.castSpell(fthof);
    tower.sell(806);
    await sleep(500);
    M.castSpell(fthof);
    tower.buy(410);

    await sleep(500);
    grimoireLumpRefill.click();
    promptOption0.click();

    await sleep(500);
    M.castSpell(fthof);
    tower.sell(480);
    await sleep(500);
    M.castSpell(fthof);

    bank.sell(940);
    for (let i = 0; i < 10000; i++) {
        bank.buy(100);
        bank.sell(100);
    }

    await sleep(6200);
    document.getElementById("gardenTool-1").click();
}

gogogo();
