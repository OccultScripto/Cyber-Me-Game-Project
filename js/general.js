$( document ).ready(function() {
	$("#LogIn").on("click", function(){
		var username = $("#username").val();
		localStorage.setItem("username", username);
		window.location.replace("work.html");
	});
});

var general = (function() {
	
	this.getUsername = function(){
		var username = localStorage.getItem("username") || "User";
		var user = $("#user").html(username);
	}
	
	return this;
	
})();