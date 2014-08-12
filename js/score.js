var a=5;

function score(){ 
localStorage.setItem('score',a);
  var score=localStorage.getItem("score");
 
 
  a += 5;

  localStorage.setItem('score', a);

document.getElementById("score").innerHTML = a;
	    
		}
 

