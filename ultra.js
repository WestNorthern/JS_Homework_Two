let capturedKeys = [];
let konami = "";

document.addEventListener("keydown", function(e) {
	capturedKeys.push(e.key);
	if (capturedKeys.join('') == "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightba"){
		document.getElementById('star').innerHTML = `<span id='mario' style='background-image: url(mariostar.jpg); background-size: contain; background-repeat: no-repeat;'></span>`
	}

});