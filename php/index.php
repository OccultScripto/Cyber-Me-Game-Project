<!DOCTYPE html>
<html>
<head>
	<title>PHP Something</title>
</head>

<body>
	<table border="1">
	  <tr>
	    <td align="center">Users</td>
	  </tr>
	  <tr>
	    <td>
	      <table>
	        <form method="post" action="index.php">
	        <tr>
	          <td>ID</td>
	          <td><input type="text" name="id">
	          </td>
	        </tr>
	        <tr>
	          <td>Name</td>
	          <td><input type="text" name="name">
	          </td>
	        </tr>
			<tr>
	          <td>Message</td>
	          <td><input type="text" name="message">
	          </td>
	        </tr>
	        <tr>
	          <td></td>
	          <td align="right"><input type="submit"
	          name="submit" value="User Added"></td>
	        </tr>
	        </table>
	      </td>
	    </tr>
	</table>


	<?php
	$var="Cristina";
	echo $var;
	echo "<br>";

	$names = array('Ayman' , 'Mama', 'Ion' );
	$nameslength=count($names);
	for($i=0; $i<$nameslength;$i++){
		echo ($names[$i]);
		echo "<br>";
	}

	// Connect to DG
	$con=mysqli_connect("localhost","root","","test"); // host, user, password, db
	if (mysqli_connect_errno()) {
	  echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}

	mysqli_query($con,"INSERT INTO user (id, name, message) VALUES (3, 'Sofiii', 'doggie')");
	$result = mysqli_query($con,"SELECT * FROM user");

	while($row = mysqli_fetch_array($result)) {
	  echo $row['id'] . " " . $row['name'] . " " . $row['message'];
	  echo "<br>";
	}
	mysql_select_db("test");
	mysqli_query($con,"INSERT INTO user(id, name,message) VALUES ('$id','$name','$message')");
	?>

</body>
</html>

