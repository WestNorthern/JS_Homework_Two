document.getElementById('hover-box').addEventListener("mouseover", function(){
	document.getElementById('hover-box').innerHTML = "<span style='color:red;'>I thought I told you not to hover over me!</span>";

});

document.getElementById('hover-box').addEventListener("mouseout", function(){
	document.getElementById('hover-box').innerHTML = "<span style='color:orange;'>DON'T HOVER OVER ME!</span>";

});