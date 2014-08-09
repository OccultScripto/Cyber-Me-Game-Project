window.onload=(function(){
   


	
})();





function newBill(){
	var ul = document.getElementById('ListFixedBills');
	var input1 = document.createElement('input');
		input1.setAttribute("id","NameDB");
		input1.setAttribute("type","text");
		input1.setAttribute("placeholder","Name");
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
	
	function updateUI(objects){
		var rows="";
		var ul = document.getElementById('ListFixedBills');
		for(var i=0; i<objects.length; i++){
    		var item = objects[i];
    		var x=i;
    		console.log("Item number " + i+ "is ", item);
    		if (item.value.fixed==1){
    		var row = document.createElement('li');
    		row.setAttribute("id","FixedListItem");
    		row.innerHTML = item.value.name +" "+ item.value.price+" "+item.value.date+"<i value=1  class='fa fa-usd fa-1x inactiv' > ";	
			
    	
    		ul.appendChild(row);

    		}
    		
				
    	}
    	$('.fa-usd').click(function(){
				console.log('here click', this);
				$(this).toggleClass('green');
			});
		
   }
    function unpaidBills(objects){
		var rows="";
		var ul = document.getElementById('UnpaidBills');
		for(var i=0; i<objects.length; i++){
    		var item = objects[i];
    	  var d=new Date();
    	  day=parseInt(d.getDate());
    	  var dayDB=parseInt(item.value.date[3]+item.value.date[4]);
    	  
  		  if (day>dayDB){
  		 /* var row = document.createElement('li');
    		row.setAttribute("id","FixedListItem");
    		row.innerHTML = item.value.name +" "+ item.value.price+" "+item.value.date+"<i id='dollar1' value=1  class='fa fa-usd fa-1x inactiv' > ";
  		  	ul.appendChild(row);*/
  		  	rows+="<li id='Row'>"+	
	  			"<li id='FixedListItem'>"+item.value.name +" "+ item.value.price+" "+item.value.date+
	  			"<i id='dollar' value=1  class='fa fa-usd fa-1x inactiv' > </i>"+
				"</li>";
				
				ul.innerHTML ="<div>"+rows +"</div>";

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
    	  
  		  if (day>dayDB){
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
	
	
function UpdatePayDay(objects){
		for(var i=0; i<objects.length; i++){
    		var item = objects[i];
    		var d=new Date();
    		m=d.getMonth();
    		month=m.toString();
       	 	 var monthDB=parseInt(item.value.date[0]+item.value.date[1]);
    	  if (m<10){
    	 		item.value.date[0]=0;
    	 	    item.value.date[1]=month[0];
    	  }
    	  else{
    	  	  item.value.date[0]=month[0];
    	  	  item.value.date[1]=month[1];
    	  }
    	
    	  
 
		
	}

};

$(document).ready(function(){
	database.initializeDB(countUnpaid);
	database.initializeDB(getAllFromDB);
	database.initializeDB(UpdateMonth);

	
	$('#plus').click(function(){
		$(this).toggleClass('green');
		ul = document.getElementById('UnpaidBills');
		ul.style.visibility='hidden';
	    ul.innerHTML="";
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
 alert(object.name);

  	database.insertItem(object);
});
var robot=document.getElementById('sadRobot');
$(robot).click(function(){
	var red=document.getElementById('red');
	red.style.visibility='hidden';
	database.initializeDB(getUnpaidDB);
    var allBills=document.getElementById('ListFixedBills');
    allBills.style.visibility='hidden';
    allBills.innerHTML="";
    ul = document.getElementById('UnpaidBills');
	ul.style.visibility='visible';

});
 

plus=document.getElementById('plus');
plus.addEventListener('click',newBill);


});
	