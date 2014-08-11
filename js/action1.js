$(document).ready(function(){
$('#bRemove10').click(function() {
    $('#form').css('visibility','visible');
	$('#tblList').css('visibility','hidden');
	$('#bAdd').css('visibility','visible');
	$('#bUpdate').css('visibility','visible');
	$('#title').css('visibility','visible');
	$('#alarm').css('visibility','visible');
	$('#canvas').css('visibility','visible');
	$('#edit').css('visibility','hidden');
	$('#edit1').css('visibility','hidden');
		$('#bAdd3').css('visibility','hidden');
	$('#bUpdate3').css('visibility','hidden');
})
$('#edit').click(function() {
    $('#form').css('visibility','visible');
	$('#tblList').css('visibility','hidden');
	$('#edit').css('visibility','hidden');
	$('#bAdd3').css('visibility','visible');
	$('#bUpdate3').css('visibility','visible');
	$('#title').css('visibility','visible');
		$('#bAdd').css('visibility','hidden');
	$('#bUpdate').css('visibility','hidden');
	
})
$('#bUpdate').click(function() {
		List();
	$('#tblList').css('visibility','visible');
	$('#form').css('visibility','hidden');
	$('#title').css('visibility','hidden');
	$('#bAdd').css('visibility','hidden');
	$('#bUpdate').css('visibility','hidden');
	$('#alarm').css('visibility','hidden');
	$('#canvas').css('visibility','hidden');
	
})
$('#bUpdate3').click(function() {
   List();
	$('#tblList').css('visibility','visible');
	$('#form').css('visibility','hidden');
	$('#title').css('visibility','hidden');
	$('#edit').css('visibility','visible');
	$('#bAdd3').css('visibility','hidden');
	$('#bUpdate3').css('visibility','hidden');
	$('#alarm').css('visibility','hidden');
	$('#canvas').css('visibility','hidden');
})
$('#bAdd').click(function() {
   List();
	$('#tblList').css('visibility','visible');
	$('#form').css('visibility','hidden');
	$('#title').css('visibility','hidden');
	$('#bAdd').css('visibility','hidden');
	$('#bUpdate').css('visibility','hidden');
	$('#edit').css('visibility','visible');
	$('#edit1').css('visibility','visible');
	$('#alarm').css('visibility','hidden');
	$('#canvas').css('visibility','hidden');
})
$('#bAdd3').click(function() {
   List();
	$('#tblList').css('visibility','visible');
	$('#form').css('visibility','hidden');
	$('#title').css('visibility','hidden');
	$('#bAdd3').css('visibility','hidden');
	$('#bUpdate3').css('visibility','hidden');
	$('#edit').css('visibility','visible');
	$('#edit1').css('visibility','visible');
	$('#alarm').css('visibility','hidden');
	$('#canvas').css('visibility','hidden');
})
$('#total').click(function() {
   List();
	$('#tblList').css('visibility','visible');
	$('#form').css('visibility','hidden');
	$('#title').css('visibility','hidden');
	$('#bAdd').css('visibility','hidden');
	$('#bUpdate').css('visibility','hidden');
	$('#total').css('visibility','hidden');
})
$('#bRemove2').click(function() {
   
	$('#tblList').css('visibility','hidden');
	$('#total').css('visibility','visible');
	$('#form').css('visibility','hidden');
	$('#title').css('visibility','hidden');
	$('#bAdd').css('visibility','hidden');
	$('#bUpdate').css('visibility','hidden');
})

});