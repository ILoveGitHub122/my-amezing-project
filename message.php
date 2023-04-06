<?php
// Anslut till databasen
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";

$conn = new mysqli($servername, $username, $password, $dbname);

// Hämta meddelande från formuläret
$message_text = $_POST["message"];

// Skydda mot säkerhetshot
$message_text = htmlspecialchars($message_text);

// Lägg till meddelande i databasen
$sql = "INSERT INTO messages (message_text) VALUES ('$message_text')";
$conn->query($sql);

// Stäng anslutningen till databasen
$conn->close();

// Skicka användaren tillbaka till meddelandebrädan
header("Location: index.php");
?>
