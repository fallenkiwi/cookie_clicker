"use strict";

var M = Game.ObjectsById[7].minigame;
var tower = Game.ObjectsById[7];
var fthof = M.spellsById[1];

M.castSpell(fthof);
tower.sell(806);
M.castSpell(fthof);
tower.buy(410);
