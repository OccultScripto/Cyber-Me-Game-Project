$(document).ready(function(){
	$("#username").on("click", function(){
		clearContents($(this)[0]);
	});
	$("#password").on("click", function(){
		clearContents($(this)[0]);
	});
});

function clearContents(element) {
  element.value = '';
}
