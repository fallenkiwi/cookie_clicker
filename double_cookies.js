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
}

gogogo();
