<html>

<body>
	<?php

		$con = mysql_connect("localhost","root","","test");
		if (!$con){
			die('Could not connect: ' . mysql_error());
		}
		mysql_select_db("test", $con);
		
		$sql="INSERT INTO user (id,name, message)VALUES($_POST[id],'$_POST[name]','$_POST[message]')";
		if (!mysql_query($sql,$con)){
			die('Error: ' . mysql_error());
		}		
		
		echo "User added!";

		mysql_close($con);
	?>

</body>

</html>

 