"use strict";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var M = Game.ObjectsById[7].minigame;
var fthof = M.spellsById[1];

var mine = Game.ObjectsById[3];
var factory = Game.ObjectsById[4];
var bank = Game.ObjectsById[5];
var temple = Game.ObjectsById[6];
var tower = Game.ObjectsById[7];
var shipment = Game.ObjectsById[8];
var alchemy = Game.ObjectsById[9];
var portal = Game.ObjectsById[10];
var time_machine = Game.ObjectsById[11];
var antimatter = Game.ObjectsById[12];
var prism = Game.ObjectsById[13];
var chancemaker = Game.ObjectsById[14];
var fractal = Game.ObjectsById[15];
var javascript_console = Game.ObjectsById[16];
var idleverse = Game.ObjectsById[17];
var cortex = Game.ObjectsById[18];

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
