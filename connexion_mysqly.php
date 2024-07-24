<?php

if(isset($_POST["send"])) {
	$name = htmlspecialchars($_POST['name']);
	$email = htmlspecialchars($_POST['email']);
	$number = htmlspecialchars($_POST['number']);
	$subject = htmlspecialchars($_POST['subject']);
	$message = htmlspecialchars($_POST['message']);

	$con = mysqli_connect('localhost','root','','portfolio_db');

		$sqlInsert = "INSERT INTO users (name, email, number, subject, message)
		values ('$name', '$email', '$number', '$subject', '$message')";

		if ($con->query($sqlInsert)) {
			echo "<label style='color: red;'>New record is inserted successfully</label>";
		} else {
			echo "Error:". $sqlInsert . "<br>" .$con->error;
		}
		$con->close();

       
}

?>
