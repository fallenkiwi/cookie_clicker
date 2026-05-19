"use strict";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function sleep1000() {
    await sleep(1000);
}

var M = Game.ObjectsById[7].minigame;
var tower = Game.ObjectsById[7];
var fthof = M.spellsById[1];

M.castSpell(fthof);
tower.sell(806);
sleep1000();
M.castSpell(fthof);
tower.buy(410);
