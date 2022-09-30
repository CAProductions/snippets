var p, action, heals, rdm, ded;
p = {};
//functions
function randomNum(min, max) {
    var number = Math.floor(Math.random() * max);
    if (number < min) {
        number = randomNum(min, max);
    };
    return number;
};
function battle(ename, ehp, eatck, exp, canrun) {
    ded = false;
    //setup fight
    alert(`A ${ename} has attacked!`);
    alert(`BATTLE!\nLoadout:\nWeapon: ${p.atck_n} | Attack: ${p.atck}\nArmor: ${p.def_n} | Defense: ${p.def}\nHeals: ${heals}`);
    //alert(`Items\nBombs: ${getListItemByIndex(inv, "bomb")}\nAttack Potions: ${getListItemByIndex(inv, "atck_pot")}\nDef Potions: ${getListItemByIndex(inv, "def_pot")}`);
    alert(`Enemy: ${ename} \nHP: ${ehp}\nAttack: ${eatck}`);
    exp *= ehp;
    do {
        //Enemy Attacks
        if (eatck - p.def > 1) {
            var edmg = 1;
        } else {
            var edmg = eatck - p.def;
        };
        p.hp -= (edmg);
        if (p.hp <= 0) {
            ded = true;
            alert(`GAME OVER...`);
            return "";
        };
        alert(`${ename} attacks you, doing ${edmg} damage, leaving you with ${p.hp} HP`);
        /*Player Attacks*/
        var action = "placeholderbeliek";
        action = prompt("what action to do? (fight/heal/item/run)");
        action = trim(action);
        if (action == "fight" || action == "f") {
            if (randomNum(1, 10) == 4) {
                ehp = ehp - p.atck * 3;
                alert(`CRITIAL HIT!\nYou attack doing ${p.atck * 3} damage, leaving the ${ename} with ${ehp} HP`);
            } else {
                ehp = ehp - p.atck;
                alert(`You attack doing ${p.atck} damage, leaving the ${ename} with ${ehp} HP`);
            };
        };
        /*if (action == "item" || action == "i") {
            var itemprompt = prompt(`What item should you use? (bomb/atck_pot/def_pot)`);
            if (itemprompt == "bomb" || itemprompt == "b") {
                ehp = ehp - 12;
                alert(`BOOM!\nyou uses a bomb on the ${ename} doing 12 damage and leaving it with ${ehp} HP`);
            };
            if (itemprompt == "atck_pot" || itemprompt == "a") {

            };
            if (itemprompt == "def_pot" || itemprompt == "d") {

            };
        };
        if (action == "heal" || action == "h") {
            if (heals > 0) {
                let rdm = randomNum(4, 6);
                p.hp = p.hp + rdm;
                heals = heals - 1;
                alert(`You used a heal and restored ${rdm} HP, now they have: ${p.hp}HP`);
                alert(`You has ${heals} heals remaining`);
            } else {
                alert(`You attempted to use a heal but didnt have any`);
            };
        };
        */
        if (action == "run" || action == "r") {
            if (canrun == 1) {
                ehp = 0;
                exp = 0;
            };
            if (canrun == 0) {
                alert("You can't run away from this battle!");
            };
        };
    } while (ehp > 0);
    if (exp > 0) {
        p.xp += exp;
        p.rupees += Math.ceil(exp / 4);
        alert(`You defeated: ${ename}!`);
        alert(`You  earned ${exp} xp, and ${Math.ceil(exp / 4)} rupees!`)
    } else {
        alert(`You got away safely!`);
    };
    //End Fight
    return ("won");
};
function drop(pname, power, ptype) {
    if (ptype == "armor") {
        alert(`You picked up, ${pname}!\n ${power} Defense!`);
        p.def = power;
        p.def_n = pname;
    };
    if (ptype == "weapon") {
        alert(`You picked up, ${pname}!\n ${power} Attack!`);
        p.atck = power;
        p.atck_n = pname;
    };
    /*if (ptype == "heal") {
        alert(`You picked up, ${power} Heals!`);
        heals = heals + power;
    };
    if (ptype == "inv") {
        changeListByIndex(inv, pname, power);
    };
    */
    if (ptype == "food") {
        p.inv.push({ "name": pname, "power": power })
    };
};
function quote(name, text) {
    alert(`${name}:\n  ''${text}''`)
}
function changeListByIndex(list, indexOf, n) {
    list[list.indexOf(indexOf) + 1] = list[list.indexOf(indexOf) + 1] + n;
};
function getListItemByIndex(list, indexOf) {
    return (list[list.indexOf(indexOf) + 1]);
};
function q(qu) {
    let qa = prompt(qu + " (y/n)");
    qa = trim(qa);
    if (qa == true || qa == "y" || qa == "yes") {
        return true;
    } else {
        if (qa == false || qa == "n" || qa == "no") {
            return false;
        } else {
            return false;
        };
    };
};
function trim(text) {
    return text.trim().toLowerCase();
};
//Credits
console.log("Thank you for playing BOTW Txt Edition");
//End Credits
p.atck = 0;
p.atck_n = "none";
p.def = 0;
p.def_n = "none";
p.hp = 12;
p.xp = 0;
p.inv = []
p.rupees = 0;
heals = 5;
var ded = false;
alert('DrSmashsenstien is proud to presest');
alert('The legend of Zelda text of the wild');
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
----
V2.50
 - Complete overhaul of the inventory system, removed heals and items, replaced with meals
 - Made the game third person
----
V2.75
 - Made the game first person again
*/
var version = 'V 2.75';
alert(`Welcome, to the Legend of Zelda, Text of the wild!\n${version}`);

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
    p.name = prompt("What is your name?");
    alert(`you awake to find yourself sleeping in a water bed inside of a dimly lit cavern`);
    quote('???', `${p.name}, ${p.name}...`);
    quote('???', `Wake up, ${p.name}, the world needs you.`)
    quote('???', `Take this, It is a Sheikah Slate, It will guide you after your long slumber`)
    if (q(`Should you this mysterious Sheikah Slate?`)) {
        alert(`You pick up the mysterious device, and the door to the room starts unlocking.`);
        alert(`You walk out the door but all you see is another room with boxes and a place to put in your Sheikah slate. You slot in Your Sheikah slate`);
        quote('???', "You have been asleep for the past 10,000 years.")
        alert(`The door leads you into a final room and you can see sunlight in the distance`);
        if (q("You find a chest, open it?")) {
            drop("Rugged Armor", 1, "armor");
            drop("heal", 2, "heal");
        }

        alert("You walk outside and the brightness of the sun blinds you");
        if (q("You trip on a stick and get back up. Grab the stick?")) {
            drop("Tree Branch", 1, "weapon");
        }
        battle("Bokoblin", 6, 2, 0.5, 1);
        if (ded) {
            return "";
        };
        drop("heal", 5, "heal");
        alert("You walk forward and hear the mysterious voice again.");
        quote('???', `${p.name}... ${p.name}, head for the point on your map marked on your Sheikah slate, it will show you the way.`)
        if (q(`After walking a while you find an axe, pick it up?`)) {
            drop("Woodcutters Axe", 3, "weapon");
        }
        alert("You get close to the point and see a structure in the distance but there is a group of enemy's");
        /*----------------------------------------------------------------------*/
        battle("Keese", 1, 1.25, 0.1, 0);
        if (ded) {
            return "";
        };
        /*----------------------------------------------------------------------*/
        battle("Keese", 1, 1.25, 0.1, 0);
        if (ded) {
            return "";
        };
        /*----------------------------------------------------------------------*/
        battle("Bokoblin", 6, 2, 0.5, 0);
        if (ded) {
            return "";
        };
        /*----------------------------------------------------------------------*/
        battle("Moblin", 18, 1.5, 3, 0);
        if (ded) {
            return "";
        };
        drop("Hylian Armor", 2, "armor");
        drop("heal", 5, "heal");
        /*----------------------------------------------------------------------*/
        alert(`After clearing the group of enemys you find a small structure with a place to insert your Sheikah Slate.`);
        alert("You insert their Sheikah Slate and the structure starts rising into a great tower.");
        alert("-- GREAT TOWER --");
        quote('???', `${p.name}... ${p.name}... ${p.name}, this is the great tower. over there you can see Hyrule Castle.`);
        quote('???', "My Name is Princess Zelda.");
        quote('Zelda', "I have been in there for the past 1000 years, fighting Ganon.");
        quote('Zelda', "Go find Impa in Kakariko Village.");
        quote('Zelda', "She will help you find and destroy Ganon");
        quote('Zelda', `${p.name}, ... The fate of Hyrule rests within your hands.`);
        alert(`An old man aproches you`);
        quote('Old Man', "Oh... Hello there");
        quote('Old Man', "What brings you here?");
        quote(p.name, "I just woke up... I dont really know what's happening.")
        quote('Old Man', "Did you... by any chance here a voice?");
        quote(p.name, 'Yes. It was from someone called "Princess Zelda", telling me to save Hyrule')
        quote('Old Man', "Ahhh. now i understand... in that case, you might want to make your way off of this plateu");
        alert('You shake your head in agreement')
        quote('Old Man', "I have a deal for you, you defeat this lynel over there that has been bothering me and i will give you this paraglider.")
        var c5 = prompt("Do you take the old mans deal and defeat the lynel (1) or try to steal the paraglider form him (2)");
        if (c5 == "1") {
            alert("You walk over to the lynel and engage in battle");
            battle("Red Lynel", 45, 3, 2.5, 0);
            if (ded) {
                return "";
            };
            drop("Lynel Sword", 5, "weapon");
            alert('The old man calls you over to join him');
            quote('Old Man', "Aha! I see that you have taken that Lynels weapon, you could use that to protect yourself");
            quote('Old Man', `Here, ${p.name}, you deserve my paraglider`);
        }
        if (c5 == "2") {
            alert("You attempt to steal the paraglider from the man");
            battle("Old Man", 50, 4, 1.9, 0);
            if (ded) {
                return "";
            };
            quote('Old Man', "Heh, you have defeated me. I now realize that you are much stronger than I.");
            alert(`''Here, you deserve this paraglider, you can also use my cane to defend yourself.''`);
            drop("Old Cane", 4.5, "weapon");
        };
        quote('Old Man', "I will watch over you, take good care of yourself");
    } else {
        alert("You decide to sit there, unsure of what to do. After a while you start feeling hungry, you then fall asleep and never awake.\n\nGAME OVER");
    };
}
/*
Document Anylasess
Doc A
The Epen Museum - university of pensyvania
author not precent in ancient greece
secondary source
Reliable because well known universityy
Key words
mountainis
islands
watercity states
maritime
coastlines
peninsula
harbors
----
Doc B
Hellsanius - was present during time period
First hand source
translation issue?
different language
primary source can get it wrong
bias
didnt see it all
key words
states
harbor
islands
beach
mountains
salt

Similaritys:
talk about geogryaphy, mountains, water, beaches, islands
using the ocean to their advantage
adapting to their enviorment
document a about government, political devision
document a talking about terrain and general idea
document b talking about location of civilizations and etcetera
document a more of birds eye veiw (more genereal)
document b alot more specific




*/