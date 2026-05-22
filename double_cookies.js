"use strict";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var M = Game.ObjectsById[7].minigame;
var fthof = M.spellsById[1];

var tower = Game.ObjectsById[7];

async function gogogo() {
    M.castSpell(fthof);
    await sleep(1000);
    tower.sell(900);
    await sleep(1000);
    M.castSpell(fthof);
}

gogogo();
