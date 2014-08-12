


var global_dt_alarm_sec=0; // global variable to store Alarm value in Seconds
function update_alarm(type,direction) {
switch(type){
case "h":
var h =parseInt(document.getElementById('h1').value);
if(direction =='up' && h < 24){
h=h+1;}
if(direction =='down' && h >0){
h=h-1;}
if(h >24){h=24;}
if(h <0){h=0;}

h=h.toString();
if(h.length < 2){
var h='0'+h;
}
document.getElementById('h1').value =  h;
break;
99413683546116
case "m":
var m =parseInt(document.getElementById('m1').value);
if(direction =='up' && m < 59){
m=m+1;}
if(direction =='down' && m >0){
m=m-1;}
if(m >59){m=59;}
if(m <0){m=0;}
m=m.toString();
if(m.length < 2){
var m='0'+m;
}
document.getElementById('m1').value =  m;

break;

case "s":
var s =parseInt(document.getElementById('s1').value);
if(direction =='up' && s < 59){
s=s+1;}
if(direction =='down' && s >0){
s=s-1;}
if(s >59){s=59;}
if(s <0){s=0;}

s=s.toString();
if(s.length < 2){
var s='0'+s;
}
document.getElementById('s1').value =  s;
break;
} // end of switch
document.getElementById('ct3').style.fontSize='15px';
document.getElementById('ct3').style.color='#0030c0';
document.getElementById('ct3').innerHTML = document.getElementById('h1').value + ':' + document.getElementById('m1').value + ':' + document.getElementById('s1').value;
 }
function set_alarm(){

var dt_alarm= new Date();
dt_alarm.setHours(parseInt(document.getElementById('h1').value));
dt_alarm.setMinutes(parseInt(document.getElementById('m1').value));
dt_alarm.setSeconds(parseInt(document.getElementById('s1').value));

global_dt_alarm_sec=dt_alarm.getTime();

document.getElementById('ct3').style.background='#00f040';

}


function display_c(){
var refresh=1000; // Refresh rate in milli seconds
mytime=setTimeout('display_ct()',refresh)
}

var day=0;
function display_ct() {


var dt = new Date();
document.getElementById('ct4').innerHTML = dt;
if((dt.getTime() >= global_dt_alarm_sec) && (global_dt_alarm_sec > 1000)  )
{
document.getElementById('ct3').style.background='#f00040';
global_dt_alarm_sec=0;
alert('Activity Over');

}
tt=display_c();
}
