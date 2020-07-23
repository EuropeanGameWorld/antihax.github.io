'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('./json/islands.json');
let islands = JSON.parse(rawdata);

for (var island in islands) {
    var i = islands[island];
    if (contains(i.resources, ["Quartz", "Herkimer", "Crystal", "Pearl", "Calcite", "Tellurite", "Amethyst"]))
        if (contains(i.resources, ["Opal", "Diamond", "Gem", "Garnet", "Ruby", "Sunstone", "Emerald"]))
            if (contains(i.resources, ["Sugar", "Sugars", "Gum", "Honey", "Saps", "Sap", "Nectar", "Sugarcane", "Syrup", "Resin"]))
                if (contains(i.resources, ["Flake Salt", "Salt", "Pink Salt", "Iodine", "Rock Salt", "Kala Namak", "Sea Salt"]))
                    if (contains(i.resources, ["Iridium", "Tin", "Silver", "Copper", "Cobalt", "Iron"]))
                        if (contains(i.resources, ["Mineral Oil", "Crude Oil", "Shale Oil", "Naptha"]))

                           // if (!i.animals.includes("Snake") && !i.animals.includes("GiantSnake"))
                                //if (i.claimable === 1)
                                console.log(i.grid)

}

function contains(list, search) {
    for (var i in search) {
        for (var x in list) {
            if (x == search[i]) {
                return true;
            }
        }
    }
    return false;
}