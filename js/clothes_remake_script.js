
window.onload=(function(){
   


	
})();

function init(){
	
	document.getElementById('name').value="";
	document.getElementById('price').value="";
	var el=document.getElementById('field');//.deleteRow(localStorage.getItem('rows')-1);
	var x=localStorage.getItem('rows');
	//el.remove(el.x);
	for(var i=1;i<x;i++){
		el.removeChild(el.childNodes[i]);	
	}
	
	localStorage.setItem('rows',1);
	
};

function add()
{

var newtotal=document.getElementById('price').value;
localStorage.setItem('today',newtotal);
var retrievedObject = localStorage.getItem('today');
//alert('price'+retrievedObject);
Points(retrievedObject);
};

function sumtotal(){
	var s=localStorage.getItem('today');
	alert('whaat??'+s);
	st=0;
	st=+st + +s;
	var thisweadd=localStorage.getItem('clothestotal');
	sum=+thisweadd + +st;
    localStorage.setItem('clothestotal',sum);
	//document.getElementById('total').value=localStorage.getItem('clothestotal');
	Points(s);
	

}

function Points(value){

x=value;
//alert('value???'+x);
if (x<=50){	
	localStorage.setItem('pointsc',1);
	value=localStorage.getItem('pointsc');
		//confirm("OK? "+value);

}
else if (x>50 && x<=100){
	localStorage.setItem('pointsc',2);
	value=localStorage.getItem('pointsc');
	
	//confirm("OK? "+value);

}
else if (x>100 && x<=200){
	localStorage.setItem('pointsc',3);
	value=localStorage.getItem('pointsc');
	
	//confirm("OK? "+ value);
	//document.getElementById('score_val').value=value;
} else if (x>200 && x<=500){
	localStorage.setItem('pointsc',4);
	value=localStorage.getItem('pointsc');
	
	//confirm("OK? "+ value);
	//document.getElementById('score_val').value=value;
} else {
	localStorage.setItem('pointsc',5);
	value=localStorage.getItem('pointsc');
	
	//confirm("OK? "+ value);
	//document.getElementById('score_val').value=value;
}

};

function TotalScore(){
	//localStorage.setItem('score',0);
	sum= +localStorage.getItem('scorec') + +localStorage.getItem('pointsc');
	localStorage.setItem('scorec',sum);
	v=localStorage.getItem('scorec');
	//confirm("Ok: "+v+" ?");	
	document.getElementById('scoreDisplay').value=v;
	
};



function more_fields(){
	 
	var nr_rows=localStorage.getItem('rows');
	nr_rows=+nr_rows+ +1;
	localStorage.setItem('rows',nr_rows);
	alert(localStorage.getItem('rows'));
	var node=document.getElementById('field');
/*	var node1=document.getElementById('field1');
	var node2=document.getElementById('field2');
	var node3=document.getElementById('field3');*/
	var node1=document.getElementById('allFields');
	var p1=node1.cloneNode(true);
	//var p2=node2.cloneNode(false);
	//var p3=node3.cloneNode(false);
	
	//node.appendChild(p3);
	node.appendChild(p1);
	//node.appendChild(p2);
	
	

	
}

function remove_fields(){
	var el=document.getElementById('field');//.deleteRow(localStorage.getItem('rows')-1);
	var x=localStorage.getItem('rows')-1;
	alert(localStorage.getItem('rows'));
	//el.remove(el.x);
	el.removeChild(el.childNodes[x]);
	var rows=localStorage.getItem('rows');
	rows=rows-1;
	localStorage.setItem('rows',rows);
	/*var node1=document.getElementById('field1');
	var node2=document.getElementById('field2');
	var node3=document.getElementById('field3');*/
	//var node1=document.getElementById('allFields');

	//node.removeChild(node3);
///while (node1.firstChild) {
  //node.removeChild(node1.firstChild);
//
	//node.removeChild(node2);
	
	
}

function nrTtypes(){
  	
function call(objects){
/*document.getElementById('form').style.display='none';
document.getElementById('form').style.visibility='hidden';*/
	var rows="";
var formal=0;
var casual=0;
var office=0;
    	for(var i=0; i<objects.length; i++){
    		var item = objects[i];
           if(item.value.type=='Formal')
           {
    			formal=+formal +1;
    			
           }
			else if(item.value.type=='Office'){
				office=+office+1;
			}	
		 else if(item.value.type=='Casual'){
		 		casual=+casual+1;
		 }
        
        }
 localStorage.setItem('Formalt',formal);
 localStorage.setItem('Officet',office);
 localStorage.setItem('Casualt',casual);
 
          	



};
database.getAllItems(call);

}
function reset(){
	localStorage.setItem('Formalt',0);
	localStorage.setItem('Officet',0);
	localStorage.setItem('Casualt',0);
	localStorage.setItem('scorec',0);
	localStorage.setItem('clothestotal',0);

}


function tableCreate(val){
document.getElementById('form').style.visibility='hidden';
document.getElementById('DatabaseList').style.visibility='visible';
function callback(objects){
/*document.getElementById('form').style.display='none';
document.getElementById('form').style.visibility='hidden';*/
	var rows="";

    	for(var i=0; i<objects.length; i++){
    		var item = objects[i];
    		console.log(item.value.type,val);
    
    			if (item.value.type==val){
    			    	rows+="<li id='listRow'>"+	
	  			"<div  id='nameD' class='databaseList1'>"+item.value.name+"</div>"+
	  			"<div  id='priceD' class='databaseList1'>"+item.value.price+"</div>"+

	  			//"<div class='col-md-2 col-xs-3' id='databaseList1'>"+item.value.price+"</div>" +
	  			/*
				"	<li id='databaseList2'>"+item.value.price+"</li>"  + */
				"</li>";
				
				document.getElementById("column1").innerHTML ="<div>"+rows +"</div>";	
		
    			};
  			
  	}
 var f=localStorage.getItem('Formalt');
  var o=localStorage.getItem('Officet');
 var c=localStorage.getItem('Casualt');

  data={
  	labels:["Formal", "Office"," Casual"],
  	datasets:[
  	{
  		 label: "My First dataset",
            fillColor: "rgba(140, 72, 159,1)",
            strokeColor: "rgba(140, 72, 159,1)",
            highlightFill: "rgba(140, 72, 159,1)",
            highlightStroke: "rgba(140, 72, 159,1)",
            data: [f, o, c]
  	}
  	]
  };
  	var ctx = document.getElementById("myChart").getContext("2d");
var myNewChart = new Chart(ctx).PolarArea(data);   
new Chart(ctx).PolarArea(data, data.labels);
var myBarChart = new Chart(ctx).Bar(data, data.datasets);
 /* 
  var chart="";
   chart+="<canvas id='myChart' width='400' height='400'></canvas>";
   document.getElementById("column2").innerHTML ="<div>"+chart +"</div>";	
		*/
    };


/*for (var i=1;i<objects.lenght;i++){

}
*/
database.getAllItems(callback);

}

function compare(x,y,z){
	if ((x>=y)&&(x>=z)){
		return x;
	}
	else if((y>x)&&(y>=z)){
		return y;
	}
	else if((z>x)&&(z>y)){
		return z;
	}
}

function popUp()
{
   var popImg=document.createElement('div'); 
   popImg.setAttribute('id',popImg);
   var f=localStorage.getItem('Formalt');
  var o=localStorage.getItem('Officet');
 var c=localStorage.getItem('Casualt');
if(compare(f,c,o)==f){
	popImg.setAttribute('innerHTML',"<img src='http://cf.chucklesnetwork.com/items/5/2/6/3/original/not-sure-if-everything-is-expensive-or-im-just-poor.jpg'/>");
}
}

function replace(){
	
  var change=document.getElementById('form');
 

  ///cont.replaceChild(change,newT);
 
   	
   //document.getElementById('DatabaseList').style.display='none';
document.getElementById('DatabaseList').style.visibility='hidden';
  change.style.visibility='visible';
  document.getElementById('column1').innerHTML="";
  document.getElementById('column2').innerHTML="";
  document.getElementById('DatabaseList').innerHMTL="";
  init();

};

$(document).ready(function(){
//reset();
	   window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    var dbVersion=1.0;
    window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
	window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
	
	if (!window.indexedDB) {
    window.alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
}
 document.getElementById('scoreFormal').value=localStorage.getItem('Formalt');
  document.getElementById('scoreOffice').value=localStorage.getItem('Officet');
   document.getElementById('scoreCasual').value=localStorage.getItem('Casualt');
   document.getElementById('scoreDisplay').value=localStorage.getItem('scorec');
var add=document.getElementById('submit');
$(add).click(function(){

var object={};
var type=document.getElementById('field3').value;
var name=document.getElementById('name').value;
var price=document.getElementById('price').value;

object.type=type;
object.name=name;
object.price=price;


database.insertItem(object);
nrTtypes();

	
});
/*
var list=document.getElementById('listRow');
$('li').click(function(){
/var val=document.getElementById('databasePrice').value;
if (val<10){
	var cheap_img="";
	cheap_img+="<li id='img'>"+
	"<div><img src='http://images.clipartof.com/thumbnails/439898-Cartoon-Hungry-Homeless-Man-Holding-A-Fish-Bone-By-A-Trash-Can-Poster-Art-Print.jpg'/>"+
	"</div>"+
	"</li>";
};	
});*/
	


var rem=document.getElementById('remove');
$(rem).click(function(){
	remove_fields();

});


	localStorage.setItem('rows',1);
	var formal=document.getElementById('plus1');
	formal.addEventListener("click",more_fields);
	formal.addEventListener("click",replace);
	//.addEventListener('click',ShowDatabase);

	var office=document.getElementById('plus2');
	office.addEventListener("click",more_fields);
	office.addEventListener("click",replace);
	
	var casual=document.getElementById('plus3');
	casual.addEventListener("click",more_fields);
	casual.addEventListener("click",replace);
	
	var d=document.getElementById('dress');
	 
	d.addEventListener("click",function(){
		tableCreate('Formal');
	});
	
	var shirt=document.getElementById('shirt');
	shirt.addEventListener('click',function(){
		tableCreate('Office');
		});
	
	var tshirt=document.getElementById('tshirt');
	tshirt.addEventListener('click',function(){
		tableCreate('Casual');
		});
	//document.getElementById('score_val').readonly=true;
	//document.getElementById('score_val').value=localStorage.getItem('score');


 

	
/*$('li').click(function(){
		
		 $(this).addClass('activetab');
		$(this).siblings().removeClass('activetab');
		
	});*/
	$('i').click(function(){
		//form()
		$(this).toggleClass('green');
	
	});	
	$('#plus1').click(function(){
			if ($('#plus1').hasClass('green')){
				$('#plus2').removeClass('green');
				$('#plus3').removeClass('green');
				document.getElementById('field3').value="Formal";
				
		
		}
	});
   $('#plus2').click(function(){
   	if ($('#plus2').hasClass('green')){
   		$('#plus1').removeClass('green');
   		$('#plus3').removeClass('green');
   				document.getElementById('field3').value="Office";
   	
   	}
   });
    $('#plus3').click(function(){
   	if ($('#plus3').hasClass('green')){
   		$('#plus1').removeClass('green');
   		$('#plus2').removeClass('green');
   				document.getElementById('field3').value="Casual";
   	}
   });
 



});


