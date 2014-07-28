function Information (date, location, message){
	this.date = date;
	this.location = location;
	this.message = message;
}
var info = new Array();
var pos = 0;

$(document).ready(function(){
	  $('#datep').datepicker({
	            	showOtherMonths: true,  
                    dayNamesMin: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','Sun'],
                    inline: true,
                    altField: '#date'
              });
      $('#date').change(function(){
                $('#datep').datepicker('setDate', $(this).val());
             });        
              
  	$('#submitField').click(function(){
  	    var comeback = JSON.parse(localStorage.getItem('info'));
        console.log(JSON.stringify(comeback));
        if(comeback){
            info = comeback;
            var pos = comeback.length;
        } else{
            var info = new Array();
            var pos = 0;
        }
        var date = $('#date').val();
		var location = $("#loc").val();
		var message = $("#mes").val(); 
        
        info[pos] = new Information(date,location,message);
        localStorage.setItem( 'info', JSON.stringify(info) );
        pos = pos + 1;
        
	   	
		});
	
});


$('#bDisplay').click(function(){
	  var result = JSON.parse(localStorage.getItem('info'));
	  $('#n').html('');
	  var flist=$('<ul style="text-align:left;font-family:sans-serif"></ul>');
	  flist.attr('id','flist'); 
	  for(var i=0; i<result.length; i++){
            var p=$('<li ></li>');
            p.text(result[i]);
            info.append(p);
        }
        $('#n').append(flist);
    });
