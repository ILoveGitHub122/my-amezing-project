<?php
// Anslut till databasen
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";

$conn = new mysqli($servername, $username, $password, $dbname);

// Hämta meddelanden från databasen
$sql = "SELECT message_text, created_at FROM messages ORDER BY created_at DESC";
$result = $conn->query($sql);

// Visa meddelanden
if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    echo "<div class='message'>";
    echo "<p>" . $row["message_text"] . "</p>";
    echo "<span>" . $row["created_at"] . "</span>";
    echo "</div>";
  }
} else {
  echo "Inga meddelanden.";
}

// Stäng anslutningen till databasen
$conn->close();
?>
