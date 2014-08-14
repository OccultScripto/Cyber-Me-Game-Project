
/**
 * Date calendar function
 */
$(document).ready(function(){
	
	database.currentStore = database.stores.others;
	//Get all records from indexedDB and display them on UI
	database.initializeDB(listare);
	
	//Show the modal view
	$('#start').click(function() {
 	$('#action-menu').show();		 
	});
	
	//Add into the dataBase 
	$('#Save').click(function (){
		insertToDb();
		add();
		$('#action-menu').hide();
	});
	
	//Close the modal view
	$('#close').click(function() {
 		$('#action-menu').hide();
	});
	
	//Show the score and the total sum
	showValues();

	//The date picker from modal view
	$('#incomeDate').datepicker();
	$('input.incomeDate').datepicker({
    beforeShow: function(input, inst)
    	{
       	 inst.dpDiv.css({marginTop: -input.offsetHeight + 'px', marginLeft: input.offsetWidth + 'px'});
   		}
	});
	
	$('#year').click(function (){
		listare();
	});
	$('#month').click(function (){
		listare();
	});
	$('#day').click(function (){
		listare();
	});
});
	

 
   
