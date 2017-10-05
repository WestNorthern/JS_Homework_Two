
const declarationArray = [
	"Sir, I am correct", 
	"I am indubitably correct!", 
	"That other button's opinion is invalid! I am correct.",
	"Don't listen to that button. It is I who am correct.", 
	"That button is quite simple. And I am quite correct!", 
	"Silly daft button! You're wrong, and I'm right.", 
	"Don't listen to the left button! Right makes right!",
	"Ninny! I am right.",
	"Listen to ME! I am right.",
	"I am clearly correct"
];


// let rando = Math.floor(Math.random() * 9);
let arrayNum = 0;


document.getElementById('button-left').addEventListener('click', function() {
	document.getElementById('box').innerHTML = declarationArray[arrayNum];
	arrayNum++;
	// document.getElementById('box').innerHTML = declarationArray[Math.floor(Math.random() * 9)];
	// document.getElementById('box').innerHTML = "No, Im right!";

});

document.getElementById('button-right').addEventListener('click', function(){
	document.getElementById('box').innerHTML = declarationArray[arrayNum];
	arrayNum++;
	// document.getElementById('box').innerHTML = "Im right";
	// document.getElementById('box').innerHTML = declarationArray[Math.floor(Math.random() * 9)];

});
