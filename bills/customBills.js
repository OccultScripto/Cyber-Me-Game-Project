
window.onload=(function(){
   


	
})();

function reg (element) {
    
   cls=element.className;
   alert(cls);
  alert(/'fa fa-usd fa-2x inactived'/.test(cls));
	if (/'inactived'/.test(cls)){
		cls = cls.replace(/'inactived'/, "actived");
    
	}
	else
	{
		cls = cls.replace(/'actived'/, "inactived");
		
	} 
	
	
    
}

function add()
{
var el=document.getElementById('electricity').value;
	localStorage.setItem('electricitybill',el);
	var retriveEl= localStorage.getItem('electricitybill');

var re=document.getElementById('rent').value;
localStorage.setItem('rentbill',re);
var retriveRe= localStorage.getItem('rentbill');

var wa=document.getElementById('water').value;
localStorage.setItem('waterbill',wa);
var retriveWa= localStorage.getItem('waterbill');


var ph=document.getElementById('phone').value;
localStorage.setItem('phonebill',ph);
var retrivePh= localStorage.getItem('phonebill');


var ca=document.getElementById('cable').value;
localStorage.setItem('cablebill',ca);
var retriveCa= localStorage.getItem('cablebill');


var he=document.getElementById('heat').value;
localStorage.setItem('heatbill',he);
var retriveHe= localStorage.getItem('heatbill');

 if ((localStorage.getItem('electricitybill')!=0)&&($('#dollar1').hasClass('actived'))&&(verify_number(el)==true))
 				{
 					
 					document.getElementById('totalel').value=localStorage.getItem('electricitybill');
 					
					
		 		};
if((localStorage.getItem('rentbill')!=0)&&($('#dollar2').hasClass('actived'))&&(verify_number(re)==true))
 				{
                     document.getElementById('totalre').value=localStorage.getItem('rentbill');
                   
		 		}
if ((localStorage.getItem('waterbill')!=0)&&($('#dollar3').hasClass('actived'))&&(verify_number(wa)==true))
 				{
					document.getElementById('totalwa').value=localStorage.getItem('waterbill');
 					
		 		}
if((localStorage.getItem('phonebill')!=0)&&($('#dollar4').hasClass('actived'))&&(verify_number(ph)==true))
 				{
					 document.getElementById('totalph').value=localStorage.getItem('phonebill');
 					
		 		}
if((localStorage.getItem('cablebill')!=0)&&($('#dollar5').hasClass('actived'))&&(verify_number(ca)==true))
 				{
					document.getElementById('totalca').value=localStorage.getItem('cablebill');
 					
		 		}
if((localStorage.getItem('heatbill')!=0)&&($('#dollar6').hasClass('actived'))&&(verify_number(he)==true))
 				{
					 document.getElementById('totalhe').value=localStorage.getItem('heatbill');
 					
		 		}




};




$(document).ready(function(){
	//We display once a bill is paied
$('li').click(function(){
		
		 $(this).addClass('activetab');
		$(this).siblings().removeClass('activetab');
		
	});
	
	if ((30-(localStorage.getItem('day')))<10){
		$('#alert_msg').show();
	}
	else{
		$('#alert_msg').hide();
	}
	document.getElementById('total').value=localStorage.getItem('billstotal');
	document.getElementById('score_val').value=localStorage.getItem('score');
	
	if(localStorage.getItem('electricitybill')!=0)
 				{
 					document.getElementById('totalel').value=localStorage.getItem('electricitybill');
 					//$('#dollar1').addClass('actived');
					
		 		};
		 if(localStorage.getItem('rentbill')!=0)
 				{
                     document.getElementById('totalre').value=localStorage.getItem('rentbill');
                    // $('#dollar2').addClass('actived');
		 		}
		 	if(localStorage.getItem('waterbill')!=0)
 				{
					document.getElementById('totalwa').value=localStorage.getItem('waterbill');
 					
		 		}
		 	if(localStorage.getItem('phonebill')!=0)
 				{
					 document.getElementById('totalph').value=localStorage.getItem('phonebill');
 					
		 		}
		 	if(localStorage.getItem('cablebill')!=0)
 				{
					document.getElementById('totalca').value=localStorage.getItem('cablebill');
 					
		 		}
		 	if(localStorage.getItem('heatbill')!=0)
 				{
					 document.getElementById('totalhe').value=localStorage.getItem('heatbill');
 					
		 		}

 			
		 

	
	$('i').click(function(){
	
		$(this).toggleClass('actived');
	});
	
	$('button').click(function sumtotal(){
	var el=localStorage.getItem('electricitybill');
	var re=localStorage.getItem('rentbill');
	var ph=localStorage.getItem('phonebill');
	var ca=localStorage.getItem('cablebill');
	var he=localStorage.getItem('heatbill');
	var wa=localStorage.getItem('waterbill');
	
	e=document.getElementById('electricity').value;
	
	if (($('#dollar1').hasClass('actived'))&&(check(e)==true)&&(verify_number(e)==true))
	{
		
	st=0;
	st=+st + +el;
	var weadd=localStorage.getItem('billstotal');
	sum=+weadd + +st;
    localStorage.setItem('billstotal',sum);
    localStorage.setItem('electricitypaid',1);
    //alert(localStorage.getItem('electricitypaid'));
    Points(el);
    
	}
	
	
	r=document.getElementById('rent').value;
	if ($('#dollar2').hasClass('actived')&&(check(r)==true)&&(verify_number(r)==true))
	{
	st=0;
	st=+st + +re;
	var weadd=localStorage.getItem('billstotal');
	sum=+weadd + +st;
    localStorage.setItem('billstotal',sum);
    localStorage.setItem('rentpaid',1);
   // alert(localStorage.getItem('rentpaid'));
    Points(re);
	
	}
	p=document.getElementById('phone').value;
	if ($('#dollar4').hasClass('actived')&&(check(p)==true)&&(verify_number(p)==true))
	{
	st=0;
	st=+st + +ph;
	var weadd=localStorage.getItem('billstotal');
	sum=+weadd + +st;
    localStorage.setItem('billstotal',sum);
    localStorage.setItem('phonepaid',1);
    //alert(localStorage.getItem('phonepaid'));
    Points(ph);
	
	}
	w=document.getElementById('water').value;
	if ($('#dollar3').hasClass('actived')&&(check(w)==true)&&(verify_number(w)==true))
	{
	st=0;
	st=+st + +wa;
	var weadd=localStorage.getItem('billstotal');
	sum=+weadd + +st;
    localStorage.setItem('billstotal',sum);
    localStorage.setItem('waterpaid',1);
    //alert(localStorage.getItem('waterpaid'));
    Points(wa);
	
	}
	c=document.getElementById('cable').value;
	if ($('#dollar5').hasClass('actived')&&(check(c)==true)&&(verify_number(c)==true))
	{
	st=0;
	st=+st + +ca;
	var weadd=localStorage.getItem('billstotal');
	sum=+weadd + +st;
    localStorage.setItem('billstotal',sum);
    localStorage.setItem('cablepaid',1);
    //alert(localStorage.getItem('cablepaid'));
    Points(ca);
	
	}
	h=document.getElementById('heat').value;
	if ($('#dollar6').hasClass('actived')&&(check(h)==true)&&(verify_number(h)==true))
	{
	st=0;
	st=+st + +he;
	var weadd=localStorage.getItem('billstotal');
	sum=+weadd + +st;
    localStorage.setItem('billstotal',sum);
    localStorage.setItem('heatpaid',1);
    //alert(localStorage.getItem('heatpaid'));
    Points(he);
	
	}
	document.getElementById('total').value=localStorage.getItem('billstotal');
	
var day=localStorage.getItem('day');
var diffrence=30-day;

 	
 		if(diffrence<10){
 			
 			
   			if(localStorage.getItem('electricitypaid')==0)
 				{
 					document.getElementById('p1').innerHTML='You should pay your Electricity bill ';
					
		 		};
		 	if(localStorage.getItem('rentpaid')==0)
 				{
                     document.getElementById('p2').innerHTML='You should pay your Rent bill ';
 					
		 		}
		 	if(localStorage.getItem('waterpaid')==0)
 				{
					 document.getElementById('p3').innerHTML='You should pay your Water bill ';
 					
		 		}
		 	if(localStorage.getItem('phonepaid')==0)
 				{
					 document.getElementById('p4').innerHTML='You should pay your Phone bill ';
 					
		 		}
		 	if(localStorage.getItem('cablepaid')==0)
 				{
					 document.getElementById('p5').innerHTML='You should pay your Internet/Cable bill ';
 					
		 		}
		 	if(localStorage.getItem('heatpaid')==0)
 				{
					 document.getElementById('p6').innerHTML='You should pay your Heat bill ';
 					
		 		}
		 }
		
		 


});





});

function date_today(){
 var d=new Date();
 
 var month=d.getMonth()+1;
 var day=d.getDate();
 var diffrence=30-day;
 localStorage.setItem('day',day);
 var hour=d.getHours();
 localStorage.setItem('resethour',hour);
 var min=d.getMinutes();
 localStorage.setItem('minutes',min);
 
 

   
};

function check(string){
	
if(!string.match(/\S/)) {
        
        return false;
    } else {
        
        return true;
    }

};

function reset_end_month(){
	
	var current_date=localStorage.getItem('day');
	var hour=localStorage.getItem('resethour');
	var min=localStorage.getItem('minutes');
	

	if((current_date==28)&&(hour==6)&&(min==30)){
		localStorage.setItem('electricitypaid',0);
		localStorage.setItem('rentpaid',0);
		localStorage.setItem('waterpaid',0);
		localStorage.setItem('phonepaid',0);
		localStorage.setItem('cablepaid',0);
		localStorage.setItem('heatpaid',0);
		localStorage.setItem('billstotal',0);
		localStorage.setItem('electricitybill',0);
		localStorage.setItem('rentbill',0);
		localStorage.setItem('waterbill',0);
		localStorage.setItem('phonebill',0);
		localStorage.setItem('cablebill',0);
		localStorage.setItem('heatbill',0);
	}
}
function verify_number(string){
	if (string.match(/^\d+$/)){
		return true;
	}
	else
	{
		return false;
		
	}
}

function Points(value){

x=value;

if (x<=50){	
	localStorage.setItem('points',1);
	value=localStorage.getItem('points');
	TotalScore();
	//confirm("OK? "+ value);
	//document.getElementById('score_val').value=value;
}
else if (x>50 && x<=100){
	localStorage.setItem('points',2);
	value=localStorage.getItem('points');
	TotalScore();
	//confirm("OK? "+value);
	//document.getElementById('score_val').value=value;

}
else if (x>100 && x<=200){
	localStorage.setItem('points',3);
	value=localStorage.getItem('points');
	TotalScore();
	//confirm("OK? "+ value);
	//document.getElementById('score_val').value=value;
} else if (x>200 && x<=500){
	localStorage.setItem('points',4);
	value=localStorage.getItem('points');
	TotalScore();
	//confirm("OK? "+ value);
	//document.getElementById('score_val').value=value;
} else {
	localStorage.setItem('points',5);
	value=localStorage.getItem('points');
	TotalScore();
	//confirm("OK? "+ value);
	//document.getElementById('score_val').value=value;
}

};

function TotalScore(){
	//localStorage.setItem('score',0);
	sum= +localStorage.getItem('score') + +localStorage.getItem('points');
	localStorage.setItem('score',sum);
	v=localStorage.getItem('score');
	//confirm("Ok: "+v+" ?");	
	document.getElementById('score_val').value=v;
	
};


