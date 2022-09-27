//Setup
var answer;
var p = {};
p.health = 12;
p.inventory = [];
p.weapon = null;
p.armor = null;
p.pos = "start";
p.ded = false;
var weapons = [weaponData("Tree branch", 1), weaponData("Boko Club", 2)]
var armor = [armorData("Old clothes", 1)];
var enemies = [enemyData("Red Bokoblin", 1, null, 6, )]
p.heals = 3;
p.atkFood = 0;
p.defFood = 0;


// Intro
alert("A CAM0studios production");
alert("Together with DrSmashsenstien");
alert("We present:");
alert("The Dungeons of Myliar");
if(confirm("Start game?")){

//Run Story
story();}
//Story Point Functions
function story() {
    //introStory();if (p.ded) {return ""}     //commented out for quick testing
    mainStory1();if(p.ded){return ""}
}
function mainStory1() {
    if (yn("You see a wooden box. Open it?")) {
        getWeaponOrArmor("armor", 0);
    } else {
        alert("You just keep walking.");
    }
    if (yn("You walk outside and trip on a tree branch. Do you pick it up?")) {
        getWeaponOrArmor("weapon", 0);
    } else {
        alert("You decide to keep on going.");
    }
    alert("You hear a rustle in the trees...");
    battleEnemy(0);
    if(p.ded){ return ""}
}
function introStory() {

    alert("You wake up in a dark room.");
    if (!yn("You see a mysterious device on the floor. Pick it up?")) {
        killPlayer("You don't pick it up. You're starting to feel hungry. You go back to sleep, never to wake up. ");
        return ""
    }
    alert("As soon as you pick it up, doors open on both sides of you.");
    answer = prompt("Which one do you go through? (left/right/neither)");
    if (trimTxt(answer) == "left") {
        p.pos = "left1";
        killPlayer("You start to turn to the left, but as soon as you stand up, a gust of wind knocks you over, and you fall off of the endless cliff behind you. ");
        return ""
    }  else {
        if (trimTxt(answer) == "right") {
            p.pos = "right1";
            killPlayer("You stand up, and immediately, you trip and fall off the ledge behind you. ");
            return ""
        } else {
            if (trimTxt(answer) == "neither") {
                alert("You stay where you are, and you feel a gust of wind above you. Thankfully, nothing happens.");
            } else {
                return ""
            }
        }
    }
    answer = prompt("Now where do you go? (left/right/neither)");
    if (trimTxt(answer) == "left") {
        p.pos = "left1";
        alert("You turn to the left and start walking.");
    } else {
        if (trimTxt(answer) == "right") {
            p.pos = "right1";
            alert("You stand up and start walking right.");
            //:) looks better in monospace
        } else {
            if (trimTxt(answer) == "neither") {
                alert("You keep sitting, and you hear a crack above you.");
                killPlayer("A boulder falls from above, and you have no time to move before you are dead. ");
                return ""
            } else {
                return ""
            }
        }
    }
    if (yn("You eventually see a pedestal with a slot for your device. Do you insert it?")) {
        if (p.pos == "left1") {
            alert("You insert it, and a door opens up ahead, shining light through.");
        } if (p.pos == "right1") {
            killPlayer("A dark shadow reaches out, and crushes the device. You feel immense pain, and then black out. ");
            return ""
        }
    } else {
        killPlayer("The tunnels seem to sense your hesitation, and begin to crumble. You get trapped underneath a boulder, unable to breathe.");
        return ""
    }
}
//--------Functions-----------------------------------------------------------------------------------------
function yn(text) {
    answer = prompt(`${text} (y/n)`).trim().toLowerCase();
    if (answer == "") { confirm("Leave game?"); } else {
        if (answer != "y" && answer != "n") {
            return yn(`Please enter a valid answer: \n ${text}`);
        } else {
            return answer == "y";
        }
    }
}
function dmg(amt, enemy, message) {
    p.health -= amt;
    if (message) {
        if (p.health > 0) {
            alert(message);
        } else {
            killPlayer(`${message} \n \n ----GAME OVER----`);
        }
    } else {
        if (p.health > 0) {
            alert(`You took ${amt} damage from ${enemy.name} with ${enemy.weapon}. You now have ${p.health} health.`);
        } else {
            killPlayer(`You took ${amt} damage from ${enemy.name} with ${enemy.weapon}. You are now dead.`);
        };
    }
}
function enemyData(name, weaponInd, armorInd, hp, xp) {
    return { "name": name, "weapon": weaponInd>=0 ? weapons[weaponInd] : null, "armor": armorInd>=0 ? armor[armorInd] : null, "hp": hp, "xp": xp}
}
function weaponData(name, atk) {
    return { "name": name, "atk": atk }
}
function armorData(name, def) {
    return { "name": name, "def": def }
}
function itemData(name, type, stat) {
    return { "name": name, "type": type, "stat": stat }
}
function getWeaponOrArmor(type, ind) {
    if (type == "weapon") {
        p.inventory.push(weaponData(weapons[ind].name, weapons[ind].atk));
        if(weapons[ind].atk > weapons[p.weapon].atk){p.weapon = ind;}
        alert(`You picked up ${weapons[ind].name}! It has ${weapons[ind].atk} atk.`);
    }
    if (type == "armor") {
        p.inventory.push(armorData(armor[ind].name, armor[ind].def));
        if(armor[ind].def > armor[p.armor].def){p.armor = ind;}
        alert(`You picked up ${armor[ind].name}! It has ${armor[ind].def} def.`);
    }
}
function getItem(type, amt) {
    if (type == "heal") {
        p.heals += amt;
        alert(`You picked up ${amt} heals! you now have ${p.heals} heals.`);
    }
    if (type == "atk") {
        p.atkFood += amt;
        alert(`You picked up ${amt} atk food! you now have ${p.atkFood} atk food.`);
    }
    if (type == "def") {
        p.defFood += amt;
        alert(`You picked up ${amt} def food! you now have ${p.defFood} def food.`);
    }
}
function trimTxt(text) {
    return text.trim().toLowerCase();
}
function killPlayer(message) {
    p.health = 0;
    p.ded = true;
    alert(`${message} \n \n ----GAME OVER----`);
    return ""
}
function battleEnemy(enemy, canRun) {
    p.atk = p.weapon ? weapons[p.weapon].atk : 0;
    p.def = p.armor ? armor[p.armor].def : 0;
    enemy.atk = enemies[enemy].weapon ? weapons[enemies[enemy].weapon].atk : 0;
    enemy.def = enemies[enemy].armor ? armor[enemies[enemy].armor].def : 0;
    enemy.health = enemies[enemy].hp;
    enemy.name = enemies[enemy].name;
    alert(`
    BATTLE! \n 
    You: \n
    hp: ${p.health}
    atk: ${p.atk} (${p.weapon ? weapons[p.weapon].name : "no weapon"})
    def: ${p.def} (${p.armor ? armor[p.armor].name : "no armor"})
    inv: ${p.heals} heals, ${p.atkFood} atk food, ${p.defFood} def food
    ${enemy.name}: \n
    hp: ${enemy.hp} \n
    atk: ${enemy.atk}
    def: ${enemy.def}
    `);
    do {
        dmg(calcDmg(enemy.atk, p.def), "", `The ${enemy.name} attacks, doing ${calcDmg()} damage. You are now at ${p.health} hp.`);
        //
        answer = prompt("What do you do: (atk, heal, eat, run, inv)");
        if (answer == "atk") {
        enemy.hp -= calcDmg(p.atk, enemy.def);
        alert(`You did ${calcDmg(p.atk, enemy.def)} damage to the ${enemy.name}.`);}
        if (answer == "heal") {
            p.hp += 4;
            p.heals -= 1;
        }
        killPlayer(`You were killed by a(n) ${enemy.name}.`);//lose
        return false;//return lose
        //
        return true;//return win
    } while (true);
}
function calcDmg(dmg, def) {
    return dmg / (def+1);
}