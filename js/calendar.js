var myCalendar;
		function doOnLoad() {
			myCalendar = new dhtmlXCalendarObject("calendar");
			myCalendar.attachEvent("onShow", function(){
				writeLog("onShow event called");
			});
			myCalendar.attachEvent("onHide", function(){
				writeLog("onHide event called");
			});
		}
		var logObj, logInd=0;
		function writeLog(t) {
			if (!logObj) logObj = document.getElementById("logsHere");
			logObj.innerHTML = (++logInd)+") "+t+"<br>"+logObj.innerHTML;
		}