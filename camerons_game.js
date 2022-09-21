//Setup
var p = {};
p.health = 12;
p.inventory = [];
p.weapon = 0;

// Intro
alert("A CAM0studios production");
alert("Together with drsmashsenstien");
alert("We present:");
alert("[name yet to be decided]");
confirm("Start game?");

// Story Start
alert("You wake up in a dark room.");
if (!yn("You see a mysterious device on the floor. Pick it up?")) {
    alert ("The device blew up when you decided not to pick, and now you are dead. Goodbye!");
}








//--------Functions-----------------------------------------------------------------------------------------
function yn(text) {
    let answer = prompt(`${text} (y/n)`)
    answer = answer.trim();
    return answer == "y" || answer == "Y";
}
function dmg(amt, enemy) {
    p.health -= amt;
    if (p.health > 0) {
        alert(`You took ${amt} damage from ${enemy.name} with ${enemy.weapon}. You now have ${p.health} health.`);
    } else {
        alert(`You took ${amt} damage from ${enemy.name} with ${enemy.weapon}. You are now dead`);
    };
}