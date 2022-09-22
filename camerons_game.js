//Setup
var answer;
var p = {};
p.health = 12;
p.inventory = [];
p.weapon = 0;
p.armor = 0;
p.pos = "start";
var weapons = [weaponData("a tree branch", 1)]
var armor = [armorData("some old clothes", 1)];
var items = [itemData("an apple", "Food", 2)];

// Intro
alert("A CAM0studios production");
alert("Together with DrSmashsenstien");
alert("We present:");
alert("[name tbd]");
confirm("Start game?");

// Story Intro
story();
function story() {
alert("You wake up in a dark room.");
if (!yn("You see a mysterious device on the floor. Pick it up?")) {
    dmg(12, "", "You don't pick it up. You're starting to feel hungry. You go back to sleep, never to wake up. \n \n ----GAME OVER----");
}
alert("As soon as you pick it up, doors open on both sides of you.");
answer = prompt("Which one do you go through? (left/right/neither)");
if (answer.trim().toLowerCase() = "left") {
    p.pos = "left1";
    dmg(12, "", "You start to turn to the left, but as soon as you stand up, a gust of wind knocks you over, and you fall off of the endless cliff behind you. \n \n ----GAME OVER----");
    return ""
} if (answer.trim().toLowerCase() = "right") {
    p.pos = "right1";
    dmg(12, "", "You stand up, and immediately, you trip and fall off the ledge behind you. \n \n ----GAME OVER----");
    return ""
} if (answer.trim().toLowerCase() = "neither") {
    alert("You stay where you are, and you feel a gust of wind above you. Thankfully, nothing happens.");
}
answer = prompt("Now where do you go? (left/right/neither)");
if (answer.trim().toLowerCase() = "left") {
    p.pos = "left1";
    alert("You turn to the left and start walking.");
} if (answer.trim().toLowerCase() = "right") {
    p.pos = "right1";
    alert("You stand up and start walking right.");
} if (answer.trim().toLowerCase() = "neither") {
    alert("You keep sitting, and you hear a crack above you.");
    dmg(12, "", "A boulder fally from above, and you have no time to move before you are dead. \n \n ----GAME OVER----");
    return ""}
if(yn("You eventually see a pedestal with a slot for your device. Do you insert it?")) {
    if(p.pos = "left1") {
        alert("You insert it, and a door opens up ahead, shining light through.");
    } if(p.pos = "right1") {
        dmg(12, "", "A dark shadow reaches out, and crushes the device. You feel immense pain, and then black out. \n \n ----GAME OVER----");
    }
} else {
    dmg(12, "", "The tunnels seem to sense your hesitation, and begin to crumble. You get trapped underneath a boulder, unable to breathe. \n \n ----GAME OVER----");
    return ""
}
if(yn("You see a wooden box. Open it?")){
    getItem("armor", 0, 1);
}

}
//--------Functions-----------------------------------------------------------------------------------------
function yn(text) {
    answer = prompt(`${text} (y/n)`).trim().toLowerCase();
    if(answer == "") {confirm("Leave game?");} else { if(answer != "y" || answer != "n"){
    return answer == "y";}}
}
function dmg(amt, enemy, message) {
    p.health -= amt;
    if(message){
        alert(message);
    } else{
        if (p.health > 0) {
            alert(`You took ${amt} damage from ${enemy.name} with ${enemy.weapon}. You now have ${p.health} health.`);
        } else {
            alert(`You took ${amt} damage from ${enemy.name} with ${enemy.weapon}. You are now dead. \n \n ----GAME OVER----`);
        };
    }
}
function enemyData(name, weaponInd, armorInd) {
    return {"name": name, "weapon": weapons[weaponInd], "armor": armor[armorInd]}
}
function weaponData(name, atk) {
    return {"name": name, "atk": atk}
}
function armorData(name, def) {
    return {"name": name, "def": def}
}
function itemData(name, type, stat) {
    return {"name": name, "type": type, "stat": stat}
}
function getItem(itemType, itemInd, itemCount) {
    if(type == "weapon") {
        p.inventory += weaponData(weapons[itemInd].name, weapons[itemInd].atk);
    }
    if(type == "armor") {
        p.inventory += armorData(armor[itemInd].name, armor[itemInd].def);
    }
    if(type == "item") {
        p.inventory += itemData(items[itemInd].name, items[itemInd].stat);
    }
    alert(`You picked up ${items[itemInd].name}! It has ${items[itemInd].stat} ${items[itemInd].type}`);
}
function trimTxt(text) {
    return text.trim().toLowerCase();
}