var p, action, heals, atck_n, def_n, def, atck_a, def_a, atc, rdm, inv, foodInv, ded;
p = {};
//functions
function randomNum(min, max) {
    if (!min || !max) { console.error("Use a valid min and max for random num."); return undefined }
    // Failsafe
    if (min >= max) {
        console.error("make sure min is not higher than max")
        return undefined
    }
    var number = Math.floor(Math.random() * max)
    if (number < min) {
        number = randomNum(min, max)
    }
    return number
}
function battle(ename, ehp, eatck, exp, canrun) {
     ded = false
    //setup fight
    alert(`A ${ename} has attacked!`);
    alert(`BATTLE!\nLoadout:\nWeapon: ${atck_n} | Attack: ${p.atck}\nArmor: ${def_n} | defense: ${def}\nHeals: ${heals}`);
    alert(`Items\nBombs: ${getListItemByIndex(inv, "bomb")}\nAttack Potions: ${getListItemByIndex(inv, "atck_pot")}\nDef Potions: ${getListItemByIndex(inv, "def_pot")}`)
    alert(`Enemy: ${ename} \nHP: ${ehp}\nAttack: ${eatck}`)
    exp *= ehp
    do {
        //Enemy Attacks
        if (eatck - def > 1) {
            var edmg = 1
        } else {
            var edmg = eatck - def
        }
        p.hp -= (edmg)
        if (p.hp <= 0) {
            ded = true
            alert(`GAME OVER...`)
            return (`u ded`)
        }
        alert(`${ename} attacks doing ${edmg} damage, leaving ${p.name} with ${p.hp} HP`);
        /*Player Attacks*/
        var action = "placeholderbeliek"
        action = prompt("what action to do? (fight/heal/item/run)")
        action = action.toLowerCase()
        if (action == "fight" || action == "f") {
            if (randomNum(1, 10) == 4) {
                ehp = ehp - p.atck * 3
                alert(`CRITIAL HIT!\n${p.name} attacks doing ${p.atck * 3} damage, leaving the ${ename} with ${ehp} HP`);
            } else {
                ehp = ehp - p.atck
                alert(`${p.name} attacks doing ${p.atck} damage, leaving the ${ename} with ${ehp} HP`);
            }
        }
        if (action == "item" || action == "i") {
            var itemprompt = prompt(`What item should you use? (bomb/atck_pot/def_pot)`)
            if (itemprompt=="bomb" || itemprompt=="b"){
                ehp = ehp - 12
                alert(`BOOM!\n${p.name} uses a bomb on the ${ename} doing 12 damage and leaving it with ${ehp} HP`);
            }
            if (itemprompt=="atck_pot" || itemprompt=="a"){

            }
            if (itemprompt=="def_pot" || itemprompt=="d"){

            }
        }
        if (action == "heal" || action == "h") {
            if (heals > 0) {
                let rdm = randomNum(4, 6)
                p.hp = p.hp + rdm
                heals = heals - 1
                alert(`${p.name} used a heal and restored ${rdm} HP, now they have: ${p.hp}HP`);
                alert(`${p.name} has ${heals} heals remaining`)
            } else {
                alert(`${p.name} attempted to use a heal but didnt have any`);
            }
        }
        if (action == "run" || action == "r") {
            if (canrun == 1) {
                ehp = 0
                exp = 0
            }
            if (canrun == 0) {
                alert("You can't run away from this battle!")

            }
        }
    } while (ehp > 0);
    if (exp > 0){
    p.xp += exp
    alert(`You Defeated: ${ename} and earned ${exp} xp!`);
}else{
    alert(`You Got away safely!`);
}
    //End Fight
    return ("won")
};
function drop(pname, power, ptype) {
    if (ptype == "armor") {
        alert(`You picked up, ${pname}!\n ${power} Defense!`);
        def = power;
        def_n = pname;
    }
    if (ptype == "weapon") {
        alert(`You picked up, ${pname}!\n ${power} Attack!`);
        p.atck = power;
        atck_n = pname;
    }
    if (ptype == "heal") {
        alert(`You picked up, ${power} Heals!`);
        heals = heals + power;
    }
    if (ptype == "inv") {
        changeListByIndex(inv, pname, power);
    }
    if (ptype == "food"){

    }
};
function changeListByIndex(list, indexOf, n) {
    list[list.indexOf(indexOf) + 1] = list[list.indexOf(indexOf) + 1] + n
}
function getListItemByIndex(list, indexOf) {
    return (list[list.indexOf(indexOf) + 1])
}
function q(qu){
    let qa = prompt(qu + " (y/n)" ) 
    qa = qa.trim().toLowerCase()
    if(qa == true || qa == "y" || qa == "yes"){
        return true
    }else{
        if(qa == false || qa == "n" || qa == "no"){
            return false
        }else{
            return false
        }
    }

}
//Credits
console.log("Thank you for playing BOTW Txt Edition")
//End Credits
p.atck = 0
atck_n = "none"
def = 0
def_n = "none"
p.hp = 12
p.xp = 0
heals = 5
var ded = false
inv = [
    "bomb",
    0,
    "atck_pot",
    0,
    "def_pot",
    0
]
alert('DrSmashsenstien is proud to presest')
alert('The legend of Zelda text of the wild')
/*
V1.00
-Initial Release
-----
V1.25
- Added Critical Hits
- Added Game overs
- Added Changelog (your reading it right now)
-----
V1.50
- Cleaned up code internally
- Added Functions to most things to make code easier
- Changed game overs to be easier to initiate
-----
V1.75
- Made game overs fully quit the game instead of finishing the battle
- quick commands in fight (f,i,h,r)
-----
V2.00
 - Made it so that all choice are now run by one function instead of a virable
*/
var version = 'V 1.75'
alert(`Welcome, to the Legend of Zelda, Text of the wild!\n${version}`)

/*
                                     /@
                     __        __   /\/
                    /==\      /  \_/\/   
                  /======\    \/\__ \__
                /==/\  /\==\    /\_|__ \
             /==/    ||    \=\ / / / /_/
           /=/    /\ || /\   \=\/ /     
        /===/   /   \||/   \   \===\
      /===/   /_________________ \===\
   /====/   / |                /  \====\
 /====/   /   |  _________    /  \   \===\    THE LEGEND OF 
 /==/   /     | /   /  \ / / /  __________\_____      ______       ___
|===| /       |/   /____/ / /   \   _____ |\   /      \   _ \      \  \
 \==\             /\   / / /     | |  /= \| | |        | | \ \     / _ \
 \===\__    \    /  \ / / /   /  | | /===/  | |        | |  \ \   / / \ \
   \==\ \    \\ /____/   /_\ //  | |_____/| | |        | |   | | / /___\ \
   \===\ \   \\\\\\\/   /////// /|  _____ | | |        | |   | | |  ___  |
     \==\/     \\\\/ / //////   \| |/==/ \| | |        | |   | | | /   \ |
     \==\     _ \\/ / /////    _ | |==/     | |        | |  / /  | |   | |
       \==\  / \ / / ///      /|\| |_____/| | |_____/| | |_/ /   | |   | |
       \==\ /   / / /________/ |/_________|/_________|/_____/   /___\ /___\
         \==\  /               | /==/
         \=\  /________________|/=/             Text of the wild
           \==\     _____     /==/ 
          / \===\   \   /   /===/
         / / /\===\  \_/  /===/
        / / /   \====\ /====/
       / / /      \===|===/
       |/_/         \===/
                      =
*/
game();
//start game
//game is a function so that we can end it with a report when the player runs out of hp and dies
function game() {
    p.name = prompt("What is your name, adventurer?");
    alert(`${p.name} awakes to find themself sleeping in a water bed inside of a dimly lit cavern`);
    alert(`${p.name}, ${p.name}...`);
    alert(`Wake up, ${p.name}, the world needs you.`);
    alert("Take this, It is a Sheikah Slate, It will guide you after your long slumber");
        if(q("Take this mysterious Sheikah Slate?")){
            alert("You pick up the mysterious device, and the door to the room starts unlocking.");
            alert("You you walk out the door but all you see is another room with boxes and a place to put in your Sheikah slate. you slot in your Sheikah slate");
            alert("The door leads you into a final room and you can see sunlight in the distance");
            if(q("You find a chest, open it?")){
                drop("Rugged Armor", 1, "armor");
                drop("heal", 2, "heal");
            }
    
            alert("You walk outside and the brightness of the sun blinds you");
            if (q("You trip on a stick and get back up. Grab the stick?")) {
                drop("Tree Branch", 1, "weapon");
            }
            battle("Bokoblin", 6, 2, 0.5, 1)
            if (ded) {
                return (`u ded`)
            }
            drop("heal", 5, "heal");
            alert("you walk forward and hear the mysterious voice again.");
            alert(`${p.name}... ${p.name}, head for the point on your map marked on your Sheikah slate, it will show you the way.`);
            if (q("After walking a while you find an axe, pick it up?")) {
                drop("Woodcutters Axe", 3, "weapon");
            }
            alert("You get close to the point and see a structure in the distance but there is a group of enemy's")
            /*----------------------------------------------------------------------*/
            battle("Keese", 1, 1.25, 0.1, 0)
            if (ded) {
                return (`u ded`)
            }
            /*----------------------------------------------------------------------*/
            battle("Keese", 1, 1.25, 0.1, 0)
            if (ded) {
                return (`u ded`)
            }
            /*----------------------------------------------------------------------*/
            battle("Bokoblin", 6, 2, 0.5, 0)
            if (ded) {
                return (`u ded`)
            }
            /*----------------------------------------------------------------------*/
            battle("Moblin", 18, 1.5, 3, 0)
            if (ded) {
                return ""
            }
            drop("Hylian Armor", 2, "armor");
            drop("heal", 5, "heal");
            /*----------------------------------------------------------------------*/
            alert("After clearing the group of enemys you find a small structure with a place to insert your Sheikah Slate.")
            alert("You insert your Sheikah Slate and the structure starts rising into a great tower.")
            alert("-- GREAT TOWER --")
            alert(`${p.name}... ${p.name}... ${p.name}, this is the great tower. over there you can see Hyrule Castle.`)
            alert("I have been in there for the past 1000 years, fighting Ganon.")
            alert("Go find Impa and she can help you find out how to get into Hyrule Castle and defeat Ganon")
            alert("After the mysterious voice goes away you notice an old man talking to you")
            alert("''you might want to find your way off of this great tower. I have a deal for you, you defeat this lynel over there that has been bothering me and i will give you this paraglider.''")
            var c5 = prompt("Take the old mans deal and defeat the lynel (1) or try to steal the paraglider form him (2)")
            if (c5 == "1") {
                alert("You walk over to the lynel and engage in battle")
                battle("Red Lynel", 45, 3, 2.5, 0)
                if (ded) {
                    return ""
                }
                drop("Lynel Sword", 5, "weapon")
                alert('The old man calls you over to join him')
                alert(`''ahh I see that you have taken that Lynels weapon, you could use that to protect yourself''`)
                alert(`''Here, you deserve this paraglider.''`)
                alert(`''I will watch over you, take good care of yourself''`)
            }
            if (c5 == "2") {
                alert("You attempt to steal the paraglider from the man")
                battle("Old Man", 50, 4, 1.9, 0)
                if (ded) {
                    return (`u ded`)
                }
                alert(`''heh, you have defeated me. I now realize that you are much stronger than Me.''`)
                alert(`''Here, you deserve this paraglider, you can also use my cane to defend yourself.''`)
                alert(`''I will watch over you, take good care of yourself''`)
                drop("Old Cane", 4.5, "weapon")
            }
            alert(`okay ummm i ran out of ideas so heres a super big bad guy`)
            p.hp = 9999
            battle("The Radiance", 500, 50, 99, 0)
            drop("scepter of light", 999, "weapon")
        }else{
            alert("You decide to sit there, unsure of what to do. After a while you start feeling hungry, you then fall asleep and never awake.\n\nGAME OVER");
        }
}













































































































//MARIJUANA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!111
