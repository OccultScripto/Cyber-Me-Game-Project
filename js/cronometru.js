var c=0;
var t;
var timer_is_on=0;
var a=0;
function timedCount()
{
 a=parseInt(document.getElementById('inputEmail3').value);

document.getElementById('txt').value=c;
c=c+1;

t=setTimeout("timedCount()",1000);
if(c>60)
{
c=0;
c.innerHTML="1m:c"
}
}
 
function doTimer()
{
if (!timer_is_on)
  {
  timer_is_on=1;
  timedCount();

  }
}
 
function stopCount()
{

clearTimeout(t);
timer_is_on=0;
}