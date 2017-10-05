let capturedKeys = [];

document.addEventListener("keypress", function(e) {
	capturedKeys.push(e.key);
	document.getElementById('display-box').innerHTML = capturedKeys.join('');

});



// let capturedKeys;

// document.addEventListener("keypress", function(e) {
// 	capturedKeys = String(e.key);
// 	document.getElementById('display-box').innerHTML = capturedKeys;

// });


