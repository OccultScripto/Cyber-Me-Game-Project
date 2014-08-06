function Information (date, location, message){
	this.date = date;
	this.location = location;
	this.message = message;
}
var info = new Array();
var pos = 0;

$(document).ready(function(){
    $('#bAdd').click(function(){
        var comeback = JSON.parse(localStorage.getItem('friendlist'));
        console.log(JSON.stringify(comeback));
        if(comeback){
            friendlist = comeback;
            var pos = comeback.length;
        } else{
            var friendlist = new Array();
            var pos = 0;
        }
        var friend=prompt("Add friend!");
        if(friend != null){
            alert(friend + " was added in your friend list!");
            friendlist[pos] = friend;
            localStorage.setItem( 'friendlist', JSON.stringify(friendlist) );
            pos = pos + 1;
        }
    });
	$('#bDisplay').click(function(){
        var result = JSON.parse(localStorage.getItem('friendlist'));
        $('#n').html('' + '<img style ="width:15%;margin-top: 19.5rem; margin-left:1.3rem;position: fixed;" src="Icons/logo_20140718.png">');
        var flist=$('<ol></ol>');
        flist.attr('id','flist');  
        for(var i=0; i<result.length; i++){
            var p=$('<li></li>');
            p.text(result[i]);
            p.on("click",function(){
            	removeFriend($(this));
            });
            flist.append(p);
        }
        $('#n').append(flist);
    });
    
   function removeFriend(el){
        
        if(confirm('Are you sure you want to delete '+ el.html() +' from your friend list?'))
         {
        	var friendlist = JSON.parse(localStorage.getItem('friendlist'));
        	var friend=el.html(); 
        	if(friendlist.length>0){
            for(var i=0;i<friendlist.length;i++){
                if(friendlist[i]==friend){
                    friendlist.splice(i,1);
            		alert(friend + " was succesfully removed!");
                }
            }
            el.remove();
            localStorage.setItem( 'friendlist', JSON.stringify(friendlist) );
        }
        };
                
       }
     
    $('#bEvents').click(function(){
    	$('#n').html('');
    }); 
});
