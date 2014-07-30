
window.onload=(function(){
   


	
})();


$(document).ready(function(){
	document.getElementById('score_val').readOnly=true;
	document.getElementById('score_val').value=localStorage.getItem('score');

	
	$('li').click(function(){
		
		 $(this).addClass('activetab');
		$(this).siblings().removeClass('activetab');
		
	});
	$('i').click(function(){
		//form()
		$(this).toggleClass('green');
	
	});	
	$('#plus1').click(function(){
			if ($('#plus1').hasClass('green')){
				$('#plus2').removeClass('green');
				$('#plus3').removeClass('green');
		
		}
	});
   $('#plus2').click(function(){
   	if ($('#plus2').hasClass('green')){
   		$('#plus1').removeClass('green');
   		$('#plus3').removeClass('green');
   	}
   });
    $('#plus3').click(function(){
   	if ($('#plus3').hasClass('green')){
   		$('#plus1').removeClass('green');
   		$('#plus2').removeClass('green');
   	}
   });
});