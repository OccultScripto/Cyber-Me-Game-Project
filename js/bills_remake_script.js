$(document).ready(function(){
	database.currentStore = database.stores.bills;
	
	document.getElementById('scoreDisplay').value=localStorage.getItem('score');

	database.initializeDB(countUnpaid);
	database.initializeDB(getAllFromDB);
	database.initializeDB(Total);
//	database.initializeDB(UpdateMonth);
		var d=new Date();
    	Crtmonth=d.getMonth()+1;
    if (Crtmonth!=localStorage.getItem('MonthDB')){
    		database.initializeDB(UpdateMonth);

    }	
	ul = document.getElementById('UnpaidBills');
		ul.style.visibility='hidden';
	//database.initializeDB(Pay);

	document.getElementById('SubButton').disabled=true;

	
	$('#plus').click(function(){

		document.getElementById('SubButton').disabled=false;

		$(this).toggleClass('green');
		ul = document.getElementById('UnpaidBills');
		ul.style.visibility='hidden';
	    ul.innerHTML="";
	    var allB=document.getElementById('AllBills');
		 allB.style.visibility='hidden';
	     allB.innerHTML="";
	    allBills=document.getElementById('ListFixedBills');
	    if (allBills.style.visibility=='hidden')
	    {
         	database.initializeDB(getAllFromDB);
		}
    	allBills.style.visibility='visible';

		//newBill();
	});
var submit=document.getElementById('SubButton');

console.log(submit);
$(submit).click(function(){

  var object={};
  var name=document.getElementById('NameDB').value;
    var price=document.getElementById('PriceDB').value;
    var date=document.getElementById('dueDateDB').value;
    var fix=document.getElementById('FixedDB');
    Points(price);
    TotalScore();
    if (fix.checked){
    	object.fixed=1;
    }
    else
    {
    	object.fixed=0;
    }
    console.log('values',name,price,date);
 object.name=name;
 object.price=price;
 object.date=date;
 object.paid=0;


  	database.insertItem(object);
});
var robot=document.getElementById('sadRobot');
$(robot).click(function(){
	document.getElementById('SubButton').disabled=true;

	var red=document.getElementById('red');
	red.style.visibility='hidden';
    var allBills=document.getElementById('ListFixedBills');
    allBills.style.visibility='hidden';
    allBills.innerHTML="";
    var allB=document.getElementById('AllBills');
	 allB.style.visibility='hidden';
	     allB.innerHTML="";


    ul = document.getElementById('UnpaidBills');

	 if (ul.style.visibility=='hidden')
	    {
			database.initializeDB(getUnpaidDB);
		}
	    ul.style.visibility='visible';


});
var all=document.getElementById('allBills');
$(all).click(function(){
	document.getElementById('SubButton').disabled=true;
	 var allBills=document.getElementById('ListFixedBills');
    allBills.style.visibility='hidden';
    allBills.innerHTML="";
    ul = document.getElementById('UnpaidBills');
	ul.style.visibility='hidden';
	 ul.innerHTML="";
	 var allB=document.getElementById('AllBills');
	 
	 if (allB.style.visibility=='hidden')
	    {
			database.initializeDB(ShowAll);
		}
	 allB.style.visibility='visible';
});
 

plus=document.getElementById('plus');
plus.addEventListener('click',newBill);

});
	

function newBill(){
if (document.getElementById('NameDB')==null){
	var ul = document.getElementById('ListFixedBills');
	var input1 = document.createElement('input');
		input1.setAttribute("id","NameDB");
		input1.setAttribute("type","text");
		input1.setAttribute("placeholder","Bill");
		input1.setAttribute("class","InputField");


	var input2= document.createElement('input');
		input2.setAttribute("id","PriceDB");
		input2.setAttribute("type","text");
		input2.setAttribute("placeholder","Price");
		input2.setAttribute("class","InputField");


	var input3= document.createElement('input');
		input3.setAttribute("id","dueDateDB");
		input3.setAttribute("type","text");
		input3.setAttribute("placeholder","Due Date");
		input3.setAttribute("class","InputField");
	
	var check=document.createElement('input');
		check.setAttribute("type","checkbox");
		check.setAttribute('id','FixedDB');
		check.setAttribute("class","InputField");

//var br1=document.createElement('p');
//var br2=document.createElement('p');

	ul.appendChild(input1);
	ul.appendChild(input2);
	ul.appendChild(input3);
	ul.appendChild(check);
	//ul.appendChild(br1);
	//ul.appendChild(br2);
	$(input3).datepicker();
	
}

}

	function getUnpaidDB(){
		database.getAllItems(unpaidBills);

	}
	function getAllFromDB(){
		//alert("asdadads");
		database.getAllItems(updateUI);
	}
	function countUnpaid(){
		database.getAllItems(nrUnpaidBills);

	}
	function UpdateMonth(){
		database.getAllItems(UpdatePayDay);
	}
	function Total(){
		database.getAllItems(TotalPrice);
	}
	function Pay(){
		database.getAllItems(payBills);
	}
	function ShowAll(){
		database.getAllItems(ShowBills);
	}
	
function  classChange(e){
 	//e.toggleClass('green');
$(e).toggleClass('green');	
}

function payBills(item,key){
	
 	var newO={};
 	
 	newO.paid=1;
 	console.log(newO);
 	database.updateItem(key,newO);
 
 
};
	
	function updateUI(objects){
		var rows="";
		var ul = document.getElementById('ListFixedBills');
		for(var i=0; i<objects.length; i++){
    		var item = objects[i];
    		var x=i;
    		if (item.value.fixed==1){
    		 var icon=document.createElement('i');
    	    icon.setAttribute('id',item.key);
    	    icon.setAttribute('class','fa fa-usd fa-1x');
    	  //  icon.setAttribute('value',i);
    	 //   icon.innerHTML="<i id="+i+" class='fa fa-usd fa-1x' onclick='' >"
    	    	
    	    icon.addEventListener('click',function(){classChange(this);});
    	    icon.addEventListener('click',function(){
    	     	var key=parseInt(this.getAttribute('id'),10);
    	     	console.log('key is',key);
    	     	function callback(item){
    	     		console.log('got item',item);
    	     		payBills(item,key);
    	     	}
    	     	database.getItemById(key,callback);
    	     });


    		var row = document.createElement('li');
    		row.setAttribute("id","FixedListItem");
    		row.innerHTML = "<div id='NameDBB' class='FixedLi'>"+item.value.name+"</div>" +
    		"<div class='FixedLi' id='PriceDBB'>"+item.value.price+"</div> "+ 
    		"<div class='FixedLi' id='DateDBB'>"+item.value.date+"</div>";
    		row.appendChild(icon);	
    	  
    		ul.appendChild(row);

    		

    		}    		
				
    	}
   // 	 icon.addEventListener('click',payBills(objects,i));
   
		
   }
    function unpaidBills(objects){
		var rows="";
		var ul = document.getElementById('UnpaidBills');
		for(var i=0; i<objects.length; i++){
    		var item = objects[i];
    	  var d=new Date();
    	  day=parseInt(d.getDate());
    	  var dayDB=parseInt(item.value.date[3]+item.value.date[4]);
    	  var pay=item.value.paid;
  		  if ((day>dayDB)&&(pay==0)){
  		 /* var row = document.createElement('li');
    		row.setAttribute("id","FixedListItem");
    		row.innerHTML = item.value.name +" "+ item.value.price+" "+item.value.date+"<i id='dollar1' value=1  class='fa fa-usd fa-1x inactiv' > ";
  		  	ul.appendChild(row);*/
  		  	 var icon=document.createElement('i');
    	    icon.setAttribute('id',item.key);
    	    icon.setAttribute('class','fa fa-usd fa-1x');
    	  //  icon.setAttribute('value',i);
    	 //   icon.innerHTML="<i id="+i+" class='fa fa-usd fa-1x' onclick='' >"
    	    	
    	    icon.addEventListener('click',function(){classChange(this);});
    	    icon.addEventListener('click',function(){
    	     	var key=parseInt(this.getAttribute('id'),10);
    	     	console.log('key is',key);
    	     	function callback(item){
    	     		console.log('got item',item);
    	     		payBills(item,key);
    	     	}
    	     	database.getItemById(key,callback);
    	     });


    		var row = document.createElement('li');
    		row.setAttribute("id","FixedListItem");
    		row.innerHTML = "<div id='NameDBB' class='FixedLi'>"+item.value.name+"</div>" +
    		"<div class='FixedLi' id='PriceDBB'>"+item.value.price+"</div> "+ 
    		"<div class='FixedLi' id='DateDBB'>"+item.value.date+"</div>";
    		row.appendChild(icon);	
    	  
    		ul.appendChild(row);
  		  }
    	 
    						
    	}
	}
	function nrUnpaidBills(objects){
		var nr=0;
		for(var i=0; i<objects.length; i++){
    		var item = objects[i];
    		var d=new Date();
    		day=parseInt(d.getDate());
    	  var dayDB=parseInt(item.value.date[3]+item.value.date[4]);
    	  var pay=item.value.paid;
  		  if ((day>dayDB)&&(pay==0)){
  		  	nr=nr+1;
  		  }
		
	}
	localStorage.setItem('unpaidBills',nr);
	if (localStorage.getItem('unpaidBills')>=1){
			document.getElementById('red').value=localStorage.getItem('unpaidBills');	
	}
	else
	{	var red=document.getElementById('red');
		red.style.visibility='hidden';
}		
	}
	
	
function ShowBills(objects){
	var rows="";
		var ul = document.getElementById('AllBills');
		for(var i=0; i<objects.length; i++){
    		var item = objects[i];
    		var x=i;
    		
    		 var icon=document.createElement('i');
    	    icon.setAttribute('id',item.key);
    	    icon.setAttribute('class','fa fa-usd fa-1x');
    	  //  icon.setAttribute('value',i);
    	 //   icon.innerHTML="<i id="+i+" class='fa fa-usd fa-1x' onclick='' >"
    	    	
    	    icon.addEventListener('click',function(){classChange(this);});
    	    icon.addEventListener('click',function(){
    	     	var key=parseInt(this.getAttribute('id'),10);
    	     	console.log('key is',key);
    	     	function callback(item){
    	     		console.log('got item',item);
    	     		payBills(item,key);
    	     	}
    	     	database.getItemById(key,callback);
    	     });


    		var row = document.createElement('li');
    		row.setAttribute("id","FixedListItem");
    		row.innerHTML = "<div id='NameDBB' class='FixedLi'>"+item.value.name+"</div>" +
    		"<div class='FixedLi' id='PriceDBB'>"+item.value.price+"</div> "+ 
    		"<div class='FixedLi' id='DateDBB'>"+item.value.date+"</div>";
    		row.appendChild(icon);	
    	  
    		ul.appendChild(row);

    		

    			
				
    	}
	
}
	
	
function UpdatePayDay(objects){
		for(var i=0; i<objects.length; i++){
    		var item = objects[i];
    		var d=new Date();
    		m=d.getMonth()+1;
    		year=d.getFullYear();
    		month=m.toString();
       	 	 var monthDB=parseInt(item.value.date[0]+item.value.date[1]);
       	 	  localStorage.setItem('MonthDB',monthDB);

       	 	 var newObj={};
       	 	 newObj.name=item.value.name;
       	 	 newObj.price=item.value.price;
       	 	 newObj.fixed=item.value.fixed;
       	 	 newObj.paid=0;
       	 	 var count=parseInt(i+1,10);
    	  if (m<10){
    	 		newMonth='0'+month+'/'+item.value.date[3]+item.value.date[4]+'/'+year;
    	 		newObj.date=newMonth;
    	 		database.updateItem(count,newObj);
    	  }
    	  else{
    	  	   newMonth=month+'/'+item.value.date[3]+item.value.date[4]+'/'+year;
    	  	   newObj.date=newMonth;
				database.updateItem(count,newObj);


    	  }
    	
    	  
 
		
	}

};


function Points(value){

x=value;
//alert('value???'+x);
if (x<=50){	
	localStorage.setItem('pointsb',1);
	value=localStorage.getItem('pointsb');
		//confirm("OK? "+value);

}
else if (x>50 && x<=100){
	localStorage.setItem('pointsb',2);
	value=localStorage.getItem('pointsb');
	
	//confirm("OK? "+value);

}
else if (x>100 && x<=200){
	localStorage.setItem('pointsb',3);
	value=localStorage.getItem('pointsb');
	
	//confirm("OK? "+ value);
	//document.getElementById('score_val').value=value;
} else if (x>200 && x<=500){
	localStorage.setItem('pointsb',4);
	value=localStorage.getItem('pointsb');
	
	//confirm("OK? "+ value);
	//document.getElementById('score_val').value=value;
} else {
	localStorage.setItem('pointsb',5);
	value=localStorage.getItem('pointsb');
	
	//confirm("OK? "+ value);
	//document.getElementById('score_val').value=value;
}

};

function TotalScore(){
	//localStorage.setItem('score',0);
	sum= +localStorage.getItem('score') + +localStorage.getItem('pointsb');
	localStorage.setItem('score',sum);
	v=localStorage.getItem('score');
	//confirm("Ok: "+v+" ?");	
	document.getElementById('scoreDisplay').value=v;
	
};




function TotalPrice(objects){
	var total=0;
	var score=0;
	for(var i=0; i<objects.length; i++){
    		var item = objects[i];
			total=+total+ +item.value.price;
		}
    	localStorage.setItem('TotalBills',total);
	document.getElementById('TotalBills').value=localStorage.getItem('TotalBills');
}