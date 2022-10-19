    var cccNewEle = document.createElement('div');
    alert('Cookie Clicker Console Loaded!');
    cccNewEle.id = "ccc";
    cccNewEle.setAttribute('z-index', '999999');
    cccNewEle.innerHTML = `<div id="cccheader">Cookie Clicker Console <span id="cccX"><a style="text-decoration:none; color:white; font-family:monospace;" onclick="document.getElementById('ccc').remove()" href="#">x</a></span></div>
  <p>Add Cookies <input type="number" class="cccNumber" id="cccNumberAdd" /><button onclick="Game.Earn(parseInt(document.getElementById('cccNumberAdd').value))" class="cccNumberBtn">+</button></p>
 <p>Set Cookies PS <input type="number" class="cccNumber" id="cccNumberSetPs" /><button onclick="Game.cookiesPs = document.getElementById('cccNumberSetPs').value" class="cccNumberBtn">+</button></p>
 <p>Set Building Buy Amount <input type="number" class="cccNumber" id="cccNumberBBSet" /><button onclick="Game.buyBulk = document.getElementById('cccNumberBBSet').value" class="cccNumberBtn">+</button></p>
 <p>Autoclick Cookie <input type="number" class="cccNumber" id="cccNumberSetInt" /><button onclick="var autoClicker = setInterval(Game.ClickCookie, document.getElementById('cccNumberSetInt').value)" class="cccNumberBtnMid">+</button><button onclick="clearInterval(autoClicker)" class="cccNumberBtn">-</button></p>`;
    var cccNewScript = document.createElement('script');
    cccNewScript.innerHTML = `dragElement(document.getElementById("ccc"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}`;
    var cccNewCSS = document.createElement('style');
    cccNewCSS.innerHTML = `    #ccc {
        position: absolute;
        z-index: 9;
        background-color: #9d9d9dc5;
        text-align: center;
        border: 1px solid #d3d3d3;
        border-radius: 7px;
        backdrop-filter: blur(2px);
    }

    #cccheader {
        padding: 10px;
        cursor: move;
        z-index: 10;
        background-color: #000000;
        color: rgb(255, 255, 255);
        text-align: left;
        border-top-right-radius: 7px;
        border-top-left-radius: 7px;
        width: 300px;
        border-bottom: white 1px solid;
    }

    #cccX {
        font-family: monospace;
        top: 0px;
        position: absolute;
        right: 3px;
    }

    #cccX:hover {
        cursor: pointer;
    }

    .cccNumber {
        width: 50px;
        background-color: white;
        border-left: solid black 2px;
        border-top: solid black 2px;
        border-bottom: solid black 2px;
        border-right: solid gray 1px;
        border-bottom-left-radius: 7px;
        border-top-left-radius: 7px;
    }

    .cccNumberBtn {
        width: 25px;
        background-color: rgb(208, 208, 208);
        border-right: solid black 2px;
        border-top: solid black 2px;
        border-bottom: solid black 2px;
        border-left: none;
        border-bottom-right-radius: 7px;
        border-top-right-radius: 7px;
    }
    .cccNumberBtnMid {
        width: 25px;
        background-color: rgb(208, 208, 208);
        border-top: solid black 2px;
        border-bottom: solid black 2px;
        border-left: none;
        border-right:1px solid gray;
    }
    .cccNumberBtnMid:hover {
        cursor: pointer;
        background-color: rgb(190, 190, 190);
    }
    .cccNumberBtn:hover {
        cursor: pointer;
        background-color: rgb(190, 190, 190);
    }`;
    document.body.appendChild(cccNewCSS);
    document.body.appendChild(cccNewEle);
    document.body.appendChild(cccNewScript);
