var cccNewEle = document.createElement('div');
//Game.Notify('Cookie Clicker Console Loaded!', "Have fun! to remove, either click the x, or save then reload the page. <br>Note: Make sure to save your game to a file before using incase you currupt it.");
cccNewEle.id = "ccc";
cccNewEle.setAttribute('z-index', '999999');
cccNewEle.innerHTML = `
<div id="cccheader">Cookie Clicker Console <span id="cccX"><a style="text-decoration:none; color:white; font-family:monospace;" onclick="document.getElementById('ccc').remove()" href="#">x</a></span></div>
<div id="cccMain">
<h4>Cookies</h4>
<p>Add Cookies <input type="number" class="cccNumber" id="cccNumberAdd" /><button onclick="Game.Earn(parseInt(document.getElementById('cccNumberAdd').value))" class="cccNumberBtnR">+</button></p>
<p><span style="text-decoration:underline;" title="will grant cheated cookies taste awful.">Set Cookies</span> <input type="number" class="cccNumber" id="cccNumberSet" /><button onclick="Game.cookies = parseInt(document.getElementById('cccNumberSet').value)" class="cccNumberBtnR">+</button></p>
<p>Set Cookies PS <input type="number" class="cccNumber" id="cccNumberSetPs" /><button onclick="Game.cookiesPs = document.getElementById('cccNumberSetPs').value" class="cccNumberBtnR">+</button></p>
<p>Autoclick Cookie <button onclick="window.aC = window.setInterval(Game.ClickCookie, 1)" class="cccNumberBtnL">+</button><button onclick="window.clearInterval(window.aC)" class="cccNumberBtnR">-</button></p>
<hr>
<h4>Buildings</h4>
<p><span style="text-decoration:underline;" title="dangerous, could crash">Set Building Buy Amount</span> <input type="number" class="cccNumber" id="cccNumberBBSet" /><button onclick="Game.buyBulk = document.getElementById('cccNumberBBSet').value" class="cccNumberBtnR">+</button></p>
<p><span style="text-decoration:underline;" title="dangerous, could crash">Make Everything Free</span> <button onclick="Game.ObjectsById.forEach((function(e){e.basePrice=0,e.refresh()})),Game.storeToRebuild=1;" class="cccNumberBtn">+</button></p>
<p>Refill Grimoire Magic <button onclick="Game.Objects['Wizard tower'].minigame.magic = Infinity;" class="cccNumberBtn">+</button></p>
<p>Set Worship Swaps <input type="number" class="cccNumber" id="cccNumberSetWorship" /><button onclick="Game.Objects['Temple'].minigame.swaps = parseInt(document.getElementById('cccNumberSetWorship').value);" class="cccNumberBtnR">+</button></p>
<p>Change Building Level <input placeholder="Cursor" class="cccNumber" id="cccStringId" /><input width="" type="number" value="1" class="cccNumberMid" id="cccNumLevel" /><button onclick="Game.Objects[document.getElementById('cccStringId').value].level += parseInt(document.getElementById('cccNumLevel').value)" class="cccNumberBtnMid">+</button><button onclick="Game.Objects[document.getElementById('cccStringId').value].level -= parseInt(document.getElementById('cccNumLevel').value)" class="cccNumberBtnR">-</button></p>

<hr>
<h4>Sugar Lumps</h4>
<p>Add Lumps <input type="number" class="cccNumber" id="cccNumberAddLumps" /><button onclick="Game.gainLumps(parseInt(document.getElementById('cccNumberAddLumps').value))" class="cccNumberBtnR">+</button></p>
<p>Set Lumps <input type="number" class="cccNumber" id="cccNumberSetLumps" /><button onclick="Game.lumps = parseInt(document.getElementById('cccNumberSetLumps').value)" class="cccNumberBtnR">+</button></p>
<hr>
<h4>Golden Cookies</h4>
<p>Summmon Golden Cookies <input type="number" class="cccNumber" id="cccNumberSpawnGolden"><button class="cccNumberBtnR" onclick="for (let index = 0; index < parseInt(document.getElementById('cccNumberSpawnGolden').value); index++) { var newShimmer=new Game.shimmer('golden');}">+</button></p>
<p>Set Golden Cookie Clicks <input type="number" class="cccNumber" id="cccNumberGoldenClicks"><button class="cccNumberBtnR" onclick="Game.goldenClicks = parseInt(document.getElementById('cccNumberGoldenClicks').value)">+</button></p>
</div>`;
var cccNewScript = document.createElement('script');
cccNewScript.innerHTML = `function dragElement(e){var n=0,t=0,o=0,u=0;function c(e){(e=e||window.event).preventDefault(),o=e.clientX,u=e.clientY,document.onmouseup=l,document.onmousemove=d}function d(c){(c=c||window.event).preventDefault(),n=o-c.clientX,t=u-c.clientY,o=c.clientX,u=c.clientY,e.style.top=e.offsetTop-t+"px",e.style.left=e.offsetLeft-n+"px"}function l(){document.onmouseup=null,document.onmousemove=null}document.getElementById(e.id+"header")?document.getElementById(e.id+"header").onmousedown=c:e.onmousedown=c}dragElement(document.getElementById("ccc"));`;
var cccNewCSS = document.createElement('style');
cccNewCSS.innerHTML = ' #ccc {position: absolute;z-index: 9;background-color: #9d9d9dc5;text-align: center;border: 1px solid #d3d3d3;border-radius: 7px;backdrop-filter: blur(2px);}#cccMain {height:150px;overflow-y:scroll;resize:vertical;}#cccMain::-webkit-scrollbar {display: none;}#cccheader {padding: 10px;cursor: move;z-index: 10;background-color: #000000;color: rgb(255, 255, 255);text-align: left;border-top-right-radius: 7px;border-top-left-radius: 7px;width: 300px;border-bottom: white 1px solid;}#cccX {font-family: monospace;top: 0px;position: absolute;right: 3px;}#cccX:hover {cursor: pointer;}.cccNumber {width: 50px;background-color: white;border-left: solid black 2px;border-top: solid black 2px;border-bottom: solid black 2px;border-right: solid gray 1px;border-bottom-left-radius: 7px;border-top-left-radius: 7px;}.cccNumberMid {width: 30px;background-color: white;border-left: none;border-top: solid black 2px;border-bottom: solid black 2px;border-right: solid gray 1px;}.cccNumberBtnR {width: 25px;background-color: rgb(208, 208, 208);border-right: solid black 2px;border-top: solid black 2px;border-bottom: solid black 2px;border-left: none;border-bottom-right-radius: 7px;border-top-right-radius: 7px;}.cccNumberBtnMid {width: 25px;background-color: rgb(208, 208, 208);border-top: solid black 2px;border-bottom: solid black 2px;border-left: none;border-right:1px solid gray;}.cccNumberBtn {width: 25px;background-color: rgb(208, 208, 208);border: solid black 2px;border-radius:7px;}.cccNumberBtnL {width: 25px;background-color: rgb(208, 208, 208);border-left: solid black 2px;border-top: solid black 2px;border-bottom: solid black 2px;border-right: none;border-bottom-left-radius: 7px;border-top-left-radius: 7px;}.cccNumberBtnMid:hover {cursor: pointer;background-color: rgb(190, 190, 190);}.cccNumberBtn:hover {cursor: pointer;background-color: rgb(190, 190, 190);}.cccNumberBtnR:hover {cursor: pointer;background-color: rgb(190, 190, 190);}.cccNumberBtnL:hover {cursor: pointer;background-color: rgb(190, 190, 190);}.cccNumberBtnRhover {cursor: pointer;background-color: rgb(190, 190, 190);}';
document.body.appendChild(cccNewCSS);
document.body.appendChild(cccNewEle);
document.body.appendChild(cccNewScript);
