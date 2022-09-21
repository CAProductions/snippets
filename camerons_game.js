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