



/**
 * The first menu function
 */
function addHabbit() {
alert("in >>");
window.open("others.html");}

/**
 * Date calendar function
 */
$(document).ready(function(){
	$('#incomeDate').datepicker();
	
	$('#start').click(function() {
 			 $('#action-menu').show();
	});
	$('#close').click(function() {
 			 $('#action-menu').hide();
	});

  	$('input.incomeDate').datepicker({
   			 beforeShow: function(input, inst)
   			 {
      		  inst.dpDiv.css({marginTop: -input.offsetHeight + 'px', marginLeft: input.offsetWidth + 'px'});
   			 }
	});
	
	var save_button = document.getElementById('Save');
	save_button.addEventListener("click", add, false);
	save_button.addEventListener("click", TotalScore, false);
	
	
 
});



