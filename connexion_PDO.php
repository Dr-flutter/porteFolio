<?php
if(isset($_POST["send"])) {
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $number = htmlspecialchars($_POST['number']);
  $subject = htmlspecialchars($_POST['subject']);
  $message = htmlspecialchars($_POST['message']);

  try {
    $con = new PDO('mysql:host=localhost;dbname=db_portfolio', 'root', '');
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sqlInsert = "INSERT INTO users (name, email, number, subject, message) VALUES (:name, :email, :number, :subject, :message)";
    $stmt = $con->prepare($sqlInsert);
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':number', $number);
    $stmt->bindParam(':subject', $subject);
    $stmt->bindParam(':message', $message);
    
    if ($stmt->execute()) {
      echo "<label style='color: red;'>New record is inserted successfully</label>";
    } else {
      echo "Error inserting record";
    }
  } catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
  }
  $con = null;
}
?>


<?php
//  code pour renseigner un autre script dans une page 
require __DIR__ ."\connexion_mysqly";

?>

<!-- tutoriel gerer les erreur en php -->
<!-- faire des recherche sur la fonction Getcode()
et getMessage  -->
