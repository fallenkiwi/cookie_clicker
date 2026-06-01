"use strict";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var M = Game.ObjectsById[7].minigame;
var fthof = M.spellsById[1];
var haggler = M.spellsById[4];
var gambler = M.spellsById[6];

var tower = Game.ObjectsById[7];

var valentines = Game.UpgradesById[184];

async function gogogo() {
    M.castSpell(gambler);
    await sleep(900);
    tower.sell(296);
    await sleep(500);
    M.castSpell(fthof);

    await sleep(500);
    grimoireLumpRefill.click();
    promptOption0.click();

    valentines.click(event);


    // M.castSpell(haggler);
    // await sleep(500);
    // M.castSpell(fthof);
}

gogogo();
