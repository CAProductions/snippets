//Setup
var answer;
var p = {};
p.health = 12;
p.inventory = [];
p.weapon = 0;
p.armor = 0;
var weapons = [weaponData("the explosion", 120), weaponData("a tree branch", 1)]
var armor = [armorData("", 0), armorData("some old clothes", 1)];

// Intro
alert("A CAM0studios production");
alert("Together with DrSmashsenstien");
alert("We present:");
alert("[name tbd]");
confirm("Start game?");

// Story Intro
alert("You wake up in a dark room.");
if (!yn("You see a mysterious device on the floor. Pick it up?")) {
    dmg(12, "", "You don't pick it up. You're starting to feel hungry. You go back to sleep, never to wake up. \n \n ----GAME OVER----");
}
alert("As soon as you pick it up, doors open on both sides of you.");
answer = prompt("Which one do you go through? (left/right/neither)");
if (answer.trim().toLowerCase() = "left") {
    alert("You start");
}







//--------Functions-----------------------------------------------------------------------------------------
function yn(text) {
    answer = prompt(`${text} (y/n)`).trim().toLowerCase();
    if(answer == )
    return answer == "y";
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
function enemydata(name, weaponInd, armorInd) {
    return {"name": name, "weapon": weapons[weaponInd], "armor": armor[armorInd]}
}
function weaponData(name, atk) {
    return {"name": name, "atk": atk}
}
function armorData(name, def) {
    return {"name": name, "def": def}
}