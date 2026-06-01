"use strict";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var M = Game.ObjectsById[7].minigame;
var fthof = M.spellsById[1];
var haggler = M.spellsById[4];
var gambler = M.spellsById[6];

var tower = Game.ObjectsById[7];

async function gogogo() {
    M.castSpell(gambler);
    await sleep(2000);
    tower.sell(295);
    M.castSpell(fthof);

    // await sleep(500);
    // grimoireLumpRefill.click();
    // promptOption0.click();

    // M.castSpell(haggler);
    // await sleep(500);
    // Game.season = 'easter';
    // await sleep(500);
    // M.castSpell(fthof);
}

gogogo();
