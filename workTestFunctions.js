<!DOCTYPE html>



<head>
  <title>ChangePic</title>

</style>
<script type="text/javascript">

var arr = [];

arr[0]= new Image();
arr[0].src = "image1.png";

arr[1]= new Image();
arr[1].src = "image2.png";

arr[2]= new Image();
arr[2].src = "image3.png";



var i=0;

function slide(){
 document.getElementById("image1").src= arr[i].src;
 
 i++;
 if(i==arr.length){
  i=0;
 }
 setTimeout(function(){ slide(); },document.getElementById("formTime").value*60000);
 
}

</script>


<button onclick="takeTime();">Set time</button>

<script type="text/javascript"> 
function change(){
	//alert("intra");
	
	var x;
	//var time = document.getElementById("formTime").value;
	
	if (confirm("Time's UP! Did you finished habbit?")=== true){
		document.getElementById("image1").src=arr[1].src;
	}
	else{
		document.getElementById("image1").src=arr[2].src;
	}
	
	
}

function takeTime(){
setTimeout(function(){change();},document.getElementById("formTime").value);
}
</script>

</head>

<body >
<form> <input class="inputform" id="formTime" type="text" name="Time Allocated" value = "Time"></form>

<div id="img"><img id="image1" height="100px" width="100px" />
	<img id="image2" height="100px" width="100px" />
	
</div> <br>
<button type="button" onclick="slide('image1',arr);" name="Run" width="50px" height="30px">
</button>


</body>
