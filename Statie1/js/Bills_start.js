$(document).ready(function(){
	$('#incomeDate').datepicker();
	
	$('input.incomeDate').datepicker({
   			 beforeShow: function(input, inst)
   			 {
      		  inst.dpDiv.css({marginTop: -input.offsetHeight + 'px', marginLeft: input.offsetWidth + 'px'});
   			 }
	});

function addHabbit() {
alert("in >>");
window.open("workMain.html");


