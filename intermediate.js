let newColor = ["blue", "red", "green", "yellow"];
let num = 0;

document.getElementById('one').addEventListener('click', function() {
	let content = document.getElementById('one').innerText;
	document.getElementById('one').innerHTML = `<span style='color: ${newColor[num % 4]};'>${content}</span>`;
	num++;

})

document.getElementById('two').addEventListener('click', function() {
	let content = document.getElementById('two').innerText;
	document.getElementById('two').innerHTML = `<span style='color: ${newColor[num % 4]};'>${content}</span>`;
	num++;

});

document.getElementById('three').addEventListener('click', function() {
	let content = document.getElementById('three').innerText;
	document.getElementById('three').innerHTML = `<span style='color: ${newColor[num % 4]};'>${content}</span>`;
	num++;

})

document.getElementById('four').addEventListener('click', function() {
	let content = document.getElementById('four').innerText;
	document.getElementById('four').innerHTML = `<span style='color: ${newColor[num % 4]};'>${content}</span>`;
	num++;

});