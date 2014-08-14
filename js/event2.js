$(document).ready(function(){
	
	database.currentStore = database.stores.events;
	database.initializeDB(getAllFromDB);
	
	$('#datepicker').datepicker({ dateFormat: "yy-mm-dd"}).datepicker("setDate", "0");
    $('#bEvent').click(function(){
            //$('#menu').css('visibility','visible');
            $("#action-menu").show();
        });
    $("#dAdd").on("click", function(){
    	$("#action-menu").hide();
    }); 
   $("#dCancel").on("click", function(){
    	$("#action-menu").hide();
    });
    

	$(".msg").on('click', function(){
		$('#Status').html('');
		$('#Status').append('<p>' + $(this).text()+'</div>');
   		$("#Status").show("slow").delay(4000).fadeOut(1000);
   		// utils.status.show($(this).text(),500);
		});
		
	function getAllFromDB(){
		database.getAllItems(updateUI);
	};
	function updateUI(objects){
		//$('#EventList').html("");
		$('#Date').html("");
		$('#Loc').html("");
		$('#Mes').html("");
		$('#H1').html("");
		$('#H2').html("");
		for(var i=0; i<objects.length; i++){
			var item = objects[i];
			$('#Date').append('<div id="DateAppend">' + item.value.date+'</div>');
			$('#Loc').append('<div id="LocAppend">' + item.value.location+'</div>');
			$('#Mes').append('<div class="msg">' + item.value.message+'</div>');
			$('#H1').append('<div class="H1H2Append">' + item.value.time1+'</div>');
			$('#H2').append('<div class="H1H2Append">' + item.value.time2+'</div>');
				
	   }
	};
	
	// Get the item when the button is clicked
   $('#dAdd').click(function(){
       var item={};
       item.date = document.getElementById("datepicker").value ; 
	   item.location = document.getElementById("locat").value ;
	   item.message = document.getElementById("mes").value ; 
	   item.time1 = document.getElementById("hour1").value ;
	   item.time2 = document.getElementById("hour2").value ; 
       // Insert the item 
       database.insertItem(item);
       getAllFromDB(updateUI);
       
   
   });
  
     
 
});
