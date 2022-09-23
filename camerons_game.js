//Setup
var answer;
var p = {};
p.health = 12;
p.inventory = [];
p.weapon = 0;
p.armor = 0;
p.pos = "start";
p.ded = false;
var weapons = [weaponData("a tree branch", 1)]
var armor = [armorData("some old clothes", 1)];
p.heals = 2;
p.atkFood = 0;
p.defFood = 0;


// Intro
alert("A CAM0studios production");
alert("Together with DrSmashsenstien");
alert("We present:");
alert("The Dungeons\n (name WIP)");
if(confirm("Start game?")){

//Run Story
story();}
//Story Point Functions
function story() {
    introStory();
    

}
function mainStory1() {
    if (yn("You see a wooden box. Open it?")) {
        getWeaponOrArmor("armor", 0);
    }
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
        if (answer != "y" || answer != "n") {
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
function enemyData(name, weaponInd, armorInd) {
    return { "name": name, "weapon": weapons[weaponInd], "armor": armor[armorInd] }
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
        alert(`You picked up ${weapons[ind].name}! It has ${weapons[ind].atk} atk.`);
    }
    if (type == "armor") {
        p.inventory.push(armorData(armor[ind].name, armor[ind].def));
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
    alert(`${message} \n \n ----GAME OVER----`);
    return ""
}