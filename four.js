

document.getElementById('rubbish').addEventListener('submit', function(e) {
	
  let name = document.forms["stupidForm"]["username"].value;
  let password = document.forms["stupidForm"]["password"].value;

  if (parseInt(password) === 12345678 && name.length < 14 && name !== "") {
  	e.preventDefault();
  	document.getElementById('congrats').innerText = "You did it!";
  	
  }
  else {
  	alert("Name or password is incorrect.")
  }
});