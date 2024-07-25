<!DOCTYPE html>
<html lang = "en">
<head>
<meta content = "text/html" charset = "UTF-8">
<meta content = "text/javascript">
<meta name = "viewport" content="width=device-width, initial-scale=1.0">
<title>SimaoThe1Ferreira</title>
</head>
<body>
<script src="program.js"></script>
</body>
</html>
<?php
if(isset($_POST["submit_button0"])) {
	$db_server = "localhost";
	$db_user = "root";
	$db_pass = "";
	$db_name = "test";
	try {
		$conn = mysqli_connect($db_server, $db_user, $db_pass, $db_name);
	}
	catch(mysqli_sql_exception) {
		echo "could not connect";
	}	
	echo "you are connected";
	$sql = "INSERT INTO data0 (data0) VALUES ('Spongebob')";
	mysqli_query($conn, $sql);
	mysqli_close($conn);
}
?>