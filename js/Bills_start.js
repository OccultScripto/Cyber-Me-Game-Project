
/**
 * Date calendar function
 */
$(document).ready(function(){
	

	//The date picker from modal view
	$('#incomeDate').datepicker();
	$('input.incomeDate').datepicker({
    beforeShow: function(input, inst)
    	{
       	 inst.dpDiv.css({marginTop: -input.offsetHeight + 'px', marginLeft: input.offsetWidth + 'px'});
   		}
	});
	
	$('#Save').click(function (){
		saveData();
	});
	
});
	

				
function saveData(){
			
				var input =document.getElementById("incomeText");
				
				localStorage.setItem("server", input.value);
				var storedValue = localStorage.getItem("server");
				
				var payday= document.getElementById("incomeDate");
				localStorage.setItem("pay", payday.value);
				var storedValue2 = localStorage.getItem("pay");
				
				alert("The income sum is: " +input.value + ", and the selected Pay-Day is: " +payday.value +" !");
				document.getElementById("incomeText").value = "";
				
		};


