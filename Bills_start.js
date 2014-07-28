$(document).ready(function(){
	$('#incomeDate').datepicker();
});

$('input.incomeDate').datepicker({
    beforeShow: function(input, inst)
    {
        inst.dpDiv.css({marginTop: -input.offsetHeight + 'px', marginLeft: input.offsetWidth + 'px'});
    }
});

function addHabbit() {
alert("in >>");
window.open("workMain.html");

/*var table = document.getElementById("tableBody");
var row = table.insertRow(0);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
cell1.innerHTML = "Habbit Test";
cell3.innerHTML = "Check ";
var img = document.createElement('img');
img.src = "http://icons.iconarchive.com/icons/saki/nuoveXT-2/128/Status-image-loading-icon.png";
cell2.appendChild(img);*/
}	

