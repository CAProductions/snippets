//Setup
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
    dmg(120, "", "You don't pick it up. You're starting to feel hungry. You go back to sleep, never to wake up. \n \n ---GAME OVER---");
}








//--------Functions-----------------------------------------------------------------------------------------
function yn(text) {
    let answer = prompt(`${text} (y/n)`)
    answer = answer.trim();
    return answer == "y" || answer == "Y";
}
function dmg(amt, enemy, message) {
    p.health -= amt;
    if(message){
        alert(message);
    } else{
        if (p.health > 0) {
            alert(`You took ${amt} damage from ${enemy.name} with ${enemy.weapon}. You now have ${p.health} health.`);
        } else {
            alert(`You took ${amt} damage from ${enemy.name} with ${enemy.weapon}. You are now dead.`);
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