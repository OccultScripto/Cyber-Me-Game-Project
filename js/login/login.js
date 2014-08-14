$(document).ready(function(){
	$("#username").on("click", function(){
		clearContents($(this)[0]);
	})
    .on("blur", function () {
      if ($(this)[0].value === "")
        $(this)[0].value = "username";
    });
	$("#password").on("click", function(){
		clearContents($(this)[0]);
	})
    .on("blur", function () {
      if ($(this)[0].value === "")
        $(this)[0].value = "password";
    });
});

function clearContents(element) {
  element.value = '';
}
