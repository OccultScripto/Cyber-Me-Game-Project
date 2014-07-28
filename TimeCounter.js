var arr = [];

arr[0]= new Image();
arr[0].src = "image1.png";

arr[1]= new Image();
arr[1].src = "image2.png";

arr[2]= new Image();
arr[2].src = "image3.png";



function takeTime(){
setTimeout(function(){change();},document.getElementById("formTime").value*3600000);
}
