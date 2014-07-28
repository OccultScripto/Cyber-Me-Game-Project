function store (){
	var table = document.getElementById("tableBody");
						var row = table.insertRow(0);
						var cell1 = row.insertCell(0);
						var cell2 = row.insertCell(1);
	
	if (typeof(Storage) != "undefined") {
  
   	var img = document.createElement('img');
    					img.src = "image1.png";
    					img.height=100;
    					img.width=100;
   
   
   						
   						
    localStorage.setItem("cell1", document.getElementById("formName").value);
    localStorage.setItem("cell2" , "");
    
    document.getElementById("tableItem").innerHTML = localStorage.getItem("cell1");
    document.getElementById("tablePic").innerHTML = localStorage.getItem("cell2");
} else {
    document.getElementById("tableBody").innerHTML = "Sorry, your browser does not support Web Storage...";
}
	document.getElementById('tableBody').style.visibility='visible';
						document.getElementById('formAdd').style.visibility='hidden';
						
	var i;


	
}
function listAllItems(){  
   for (i=0; i<=localStorage.length-1; i++)  
    {  
        key = localStorage.key(i);  
        alert(localStorage.getItem(key));
    }  
   
   
}

var arr = [];

arr[0]= new Image();
arr[0].src = "image1.png";

arr[1]= new Image();
arr[1].src = "image2.png";

arr[2]= new Image();
arr[2].src = "image3.png";

var i=0;

function slide(){
 document.getElementById("tablePic").src= arr[i].src;
 i++;
 if(i==arr.length){
  i=0;
 }
 setTimeout(function(){ slide(); },document.getElementById("formTime").value);
}




function add()
						{
						
						
						var table = document.getElementById("tableBody");
						var row = table.insertRow(0);
						var cell1 = row.insertCell(0);
						//cell1.style.width = "98%";
						//cell1.style.height = "10em";
						//cell2.style.width = "22%";
						var cell2 = row.insertCell(1);
						
						cell1.innerHTML = document.getElementById("formName").value;
						
						//localstorage.setItem('cell1',JSON.stringify(cell1));
						//localstorage.setItem('cell2', JSON.stringify(cell2));
						//localstorage.getItem('cell1');
						//localstorage.getItem('cell2');
						
						//save(cell1.innerHTML);
						//save(cell2.innerHTML);
						
						var images = new Array();
						images[0] = "image1.png";
						images[1] = "image2.png";
						images[2] = "image3.png";
						var move = 0;
						/*function imageSwap()
						{	
							if(move<=images.length)
							{
								move++;
							}
							
							
							else
							{
								move=0;
							}
							
							setTimeout(imageSwap() , 3000);
						};*/
							
						
						var img = document.createElement('img');
    					img.src = images[move];
    					img.height=100;
    					img.width=100;
   						cell2.appendChild(img);
   						
						
						document.getElementById('tableBody').style.visibility='visible';
						document.getElementById('formAdd').style.visibility='hidden';
						
						};
						
									
function openAdd()
		
		{
			document.getElementById('tableWrapper').style.visibility='hidden';
			document.getElementById('tableBody').style.visibility='hidden';
			//document.getElementById('inputWrapper').style.visibility='visible';
			document.getElementById('formAdd').style.visibility='visible';
			//document.getElementByClassName('inputform').style.visibility='visible';
			//document.getElementById('submitField ').style.visibility='visible';
			//document.getElementById('submitfieldh3').style.visibility='visible';
			
		}
		

function clearContents(element) {
  element.value = '';
}


function imageSwap() {
var $currentImage = $('td#tablePic IMG.slideShow');
var $next = $currentImage.next();

$next.addClass('slideShow');

$currentImage.removeClass('slideShow');
}

$(function() {
setInterval( "imageSwap()", 3000);
});


function ChangeColor(tableRow, highLight)
    {
    if (highLight)
    {
      tableRow.style.backgroundColor = '#dcfac9';
    }
    else
    {
      tableRow.style.backgroundColor = 'white';
    }
  }

/*
function select(){
 var table = document.getElementById('tableBody');
 for (var i=0;i < table.rows.length;i++){
  table.rows[i].onclick= function () {
   if(!this.hilite){
    unselect();
    this.origColor=this.style.backgroundColor;
    this.style.backgroundColor='#BCD4EC';
    this.hilite = true;
   }
   else{
    this.style.backgroundColor=this.origColor;
    this.hilite = false;
   }
   };
 }
};

function unselect(){
 var table = document.getElementById('tableBody');
 for (var i=0;i < table.rows.length;i++){
   var row = table.rows[i];
   row.style.backgroundColor=this.origColor;
   row.hilite = false;
 }
};

var selected = "";

$(document).ready(function(){
  $('table tbody tr').click(function(){
      alert($(this).text());
    });
  
});

function deleteRow(){
	document.getElementById('tableBody').deleteRow(selected);
}


function SelectAll(id)
{
    document.getElementById(id).focus();
    document.getElementById(id).select();
}*/

var currentRow=-1;

function SelectRow(newRow)

{

   for(var i=1;i<5;++i)

   {

       var cell=document.getElementById('cell_'+newRow+','+i);

       cell.style.background='#AAF';

       if(currentRow!=-1)

       {

           var cell=document.getElementById('cell_'+currentRow+','+i);

           cell.style.background='#FFF';

       }

   }

   currentRow=newRow;

}

function IsSelected()

{

   return currentRow==-1?false:true;
   

}


function deleteRow(){
		;
}


function GetSelectedRow()

{

   return currentRow;
   

}


