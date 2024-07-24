<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta content="text/html">
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
                $conn = new mysqli($db_server, $db_user, $db_pass, $db_name);
        }
        catch(mysqli_sql_exception) {
                //echo "could not connect";
		exit($conn->connect_error);
        }
        echo "you are connected";
        $sql = "INSERT INTO data0 (data0) VALUES ('Spongebob')";
        mysqli_query($conn, $sql);
        mysqli_close($conn);
}
?>
