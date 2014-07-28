
window.onload = (function(){

	
	
})();
myStyles={
	formal:0,
	casual:0,
	office:0
};

var valuecheck;
function check_value(val)
    {
    	
    	var url;
        switch(val)
        {
            case 1:
				url='http://venturebeat.files.wordpress.com/2014/03/nao-robot.jpg';
                document.getElementById("robot").src =url ;
                 valuecheck=val;
                 return valuecheck;
                 
                    break;

            case 2:
				url="http://www.kordos.com/images/qrio.jpg";
                document.getElementById("robot").src =url;
    			valuecheck=val;
    			return valuecheck;
    			
    			
    		      break;

            case 3:
				url="http://www.scienceclarified.com/photos/ai-and-robotics-3252.jpg";
                document.getElementById("robot").src =url;
                 valuecheck=val;
                 return valuecheck;
                                
                    break;
            default: alert("Default");
        }
       

    }
   

function ChangeClass(element)
{
  
	if (element.className=='active')
	{
		element.className='inactive';
	}
	else
	{
    	element.className='active';
	}
	
};

function myVar(){
	
	var myE=document.getElementById('sum').value;
	//confirm("OK?"+ myE);
	return myE;
}
function resetval(){
	var d=new Date();
	var current=d.getDate();
	var hour=d.getHours();
	var min=d.getMinutes();
	localStorage.setItem('reset_h',hour);
	localStorage.setItem('reset_m',min);
	localStorage.setItem('day',current);
	if((localStorage.getItem('day')==28)&&(localStorage.getItem('reset_h')==6)&&(localStorage.getItem('reset_m')==30)){
	localStorage.setItem('formal',0);
	localStorage.setItem('casual',0);
	localStorage.setItem('office',0);
	localStorage.setItem('formalt',0);
	localStorage.setItem('casualt',0);
	localStorage.setItem('officet',0);
	localStorage.setItem('clothestotal',0);
	}
}
function total(){
	f=parseInt(localStorage.getItem('formalt'));
	c=parseInt(localStorage.getItem('casualt'));
	o=parseInt(localStorage.getItem('officet'));
	alert('formallt '+f);
	alert('casualt '+c);
	alert('officet '+o);
	
	if (compare(f,c,o)==f)
	{
	url='http://cdn.instructables.com/FZ4/H40S/F1A4XZQM/FZ4H40SF1A4XZQM.LARGE.jpg';
    document.getElementById("robot").src =url ;
    document.getElementById('change').innerHTML="<p align='center'>I am fancy!</p>";
    //alert('casual:'+localStorage.getItem('casualt'));
	}
	else if (compare(f,c,o)==c){
     url="http://exhibitmag.com/wp-content/uploads/2012/12/bot2.jpg";
     document.getElementById("robot").src =url;
     document.getElementById('change').innerHTML="<p align='center'>Casual time</p>";
     //alert('formal:'+localStorage.getItem('formalt'));
   }
    else if(compare(f,c,o)==o){
   	url="http://jaysbrickblog.com/wp-content/uploads/2014/01/President-Business-Angry-Face.jpg";
    document.getElementById("robot").src =url;
    document.getElementById('change').innerHTML="<p align='center'>Let's office up!</p>";
   // alert('office:'+localStorage.getItem('officet'));
    }

	
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

function changeme(){
	document.getElementById('change').innerHTML="<p align='center'>There you go!</p>";
}

function operation(){
	document.getElementById('operation').innerHTML="<div align='center'><p align='center'>Do you want to register another product?</p> <form align='center'> <input type='radio'id='yes1' name='buttons' value=1 onchange='reload(1);' ><label for='yes1'>Yes</label><input type='radio' id='no1' name='buttons' value=2 onchange='reload(2);'><label for='no1'>No</label> </form></div>";
}

function reload(val){
	
		window.location.reload();
	
};
function add()
{

var newtotal=document.getElementById('sum').value;
localStorage.setItem('today',newtotal);
var retrievedObject = localStorage.getItem('today');

};

function sumtotal(){
	var s=localStorage.getItem('today');
	st=0;
	st=+st + +s;
	var thisweadd=localStorage.getItem('clothestotal');
	sum=+thisweadd + +st;
    localStorage.setItem('clothestotal',sum);
	document.getElementById('total').value=localStorage.getItem('clothestotal');
	Points(s);
	

}

function typesclothes()
    {
    
    	var url;
    	
        switch(valuecheck)
        {
            case 1:
				//url='http://venturebeat.files.wordpress.com/2014/03/nao-robot.jpg';
                //document.getElementById("robot").src =url ;
                //var tcasual=localStorage.getItem('casual');
                //tcasual=+tcasual+ +1;
               //localStorage.setItem('casual',1);
                //var obj=localStorage.getItem('casual');
				
               /* var c=0;
				c=+c + +obj;*/
				var cast=localStorage.getItem('casualt');
				var t=0;
	        	t=+cast + +1;
    			localStorage.setItem('casualt',t);
				//alert('casual:'+localStorage.getItem('casual'));
                 
                    break;

            case 2:
				//url="http://www.kordos.com/images/qrio.jpg";
                //document.getElementById("robot").src =url;
               // var tformal=localStorage.getItem('formal');
               // tformal=+tformal+ +1;
				//localStorage.setItem('formal',tformal);
				 // var obj=localStorage.getItem('formal');
				
               /* c=0;
				c=+c + +obj;*/
				var formt=localStorage.getItem('formalt');
				var t=0;
	        	t=+formt + +1;
    			localStorage.setItem('formalt',t);
				//alert('formal:'+localStorage.getItem('formal'));
                 

                    break;

            case 3:
				//url="http://www.scienceclarified.com/photos/ai-and-robotics-3252.jpg";
                //document.getElementById("robot").src =url;
               // var toffice=localStorage.getItem('office');
               // toffice=+toffice+ +1;
                //localStorage.setItem('office',toffice);
                  //var obj=localStorage.getItem('office');
				
               /*c=0;
				c=+c + +obj;*/
				var offt=localStorage.getItem('officet');
				var t=0;
	        	t=+offt + +1;
    			localStorage.setItem('officet',t);
				//alert('office:'+localStorage.getItem('office'));
                 
                    break;
            default: alert("Default");
        
        }
      
 
    }

function Points(value){

x=value;

if (x<=50){	
	localStorage.setItem('pointsc',1);
	value=localStorage.getItem('pointsc');
	
	//confirm("OK? "+ value);
	//document.getElementById('score_val').value=value;
}
else if (x>50 && x<=100){
	localStorage.setItem('pointsc',2);
	value=localStorage.getItem('pointsc');
	
	//confirm("OK? "+value);
	//document.getElementById('score_val').value=value;

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
	document.getElementById('score_val').value=v;
	
};

$(document).ready(function(){
	document.getElementById('score_val').value=localStorage.getItem('scorec');
	document.getElementById('total').value=localStorage.getItem('clothestotal');
	
	$('li').click(function(){
		
		 $(this).addClass('activetab');
		$(this).siblings().removeClass('activetab');
		
	});
	
});



