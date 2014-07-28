function Information (date, location, message){
	this.date = date;
	this.location = location;
	this.message = message;
}
var info = new Array();
var pos = 0;

$(document).ready(function(){
	$("#bAdd").click(function() {
           $('#bAdd').css({'background':'#af543e'});
           $('#bDisplay').css({'background':'#1f262c'});
           $('#bEvents').css({'background':'#1f262c'});
           $('#bCheckin').css({'background':'#1f262c'});
           $('#bRemove').css({'background':'#1f262c'});
       });
    $("#bRemove").click(function() {
           $('#bRemove').css({'background':'#af543e'});
           $('#bDisplay').css({'background':'#1f262c'});
           $('#bEvents').css({'background':'#1f262c'});
           $('#bCheckin').css({'background':'#1f262c'});
           $('#bAdd').css({'background':'#1f262c'});
       });
    $("#bDisplay").click(function() {
           $('#bDisplay').css({'background':'#af543e'});
           $('#bAdd').css({'background':'#1f262c'});
           $('#bEvents').css({'background':'#1f262c'});
           $('#bCheckin').css({'background':'#1f262c'});
           $('#bRemove').css({'background':'#1f262c'});
       });
    $("#bEvents").click(function() {
           $('#bEvents').css({'background':'#af543e'});
           $('#bDisplay').css({'background':'#1f262c'});
           $('#bAdd').css({'background':'#1f262c'});
           $('#bCheckin').css({'background':'#1f262c'});
           $('#bRemove').css({'background':'#1f262c'});
       });
    $("#bCheckin").click(function() {
           $('#bCheckin').css({'background':'#af543e'});
           $('#bDisplay').css({'background':'#1f262c'});
           $('#bEvents').css({'background':'#1f262c'});
           $('#bAdd').css({'background':'#1f262c'});
           $('#bRemove').css({'background':'#1f262c'});
       });
    

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
        $('#n').html('' + '<img style ="width:15%;float:right;margin-top: 46%;" src="logo_20140718.png">');
        var flist=$('<ol></ol>');
        flist.attr('id','flist');  
        for(var i=0; i<result.length; i++){
            var p=$('<li></li>');
            p.text(result[i]);
            flist.append(p);
        }
        $('#n').append(flist);
    });
    
    $('#bRemove').click(function(){
        var friendlist = JSON.parse(localStorage.getItem('friendlist'));
        var friend=prompt("Remove friend!");
        if(friendlist.length>0){
            for(var i=0;i<friendlist.length;i++){
                if(friendlist[i]==friend){
                    friendlist.splice(i,1);
            		alert(friend + " was removed from your friend list!");
                }
            }
            localStorage.setItem( 'friendlist', JSON.stringify(friendlist) );
        }
    });   
    $('#bEvents').click(function(){
    	$('#n').html('');
    }); 
});
