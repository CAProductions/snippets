javascript: var img_url = prompt("Image URL");
var tab_name = prompt("Tab Name");
function gcloak() {
	var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = 'image/x-icon';
	link.rel = 'shortcut icon';
	link.href = img_url;
	document.title = tab_name;
	console.log(document.title);
	document.getElementsByTagName('head')[0].appendChild(link)
};
gcloak();
setInterval(gcloak, 1000);
