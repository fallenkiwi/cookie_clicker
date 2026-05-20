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

    await sleep(100);
    mine.sell(980); // .3%
    factory.sell(958); // .3%
    bank.sell(940); // 0%
    // temple.sell(925); // 3.7%
    tower.sell(37); // 0%
    shipment.sell(881); // 0%
    alchemy.sell(862); // 0%
    portal.sell(849); // 1%
    // time_machine.sell(828); // 3.2%
    antimatter.sell(810); // .7%
    // prism.sell(790); // 1.2%
    // chancemaker.sell(779); // 2.4%
    // fractal.sell(763); // 8.6%
    // javascript_console.sell(733); // 28.7%
    // idleverse.sell(681); // 2.9%
    // cortex.sell(655); // 12.9%

    // can I buy then sell again for max boost?
    for (let i = 0; i < 1000; i++) {
        mine.buy(100);
        mine.sell(100);
    }

    await sleep(5000);
    gardenTool-1.click();
}

gogogo();
