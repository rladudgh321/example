<?php
htmlspecialchars(file_put_contents('./data/'.basename($_POST['title']),basename($_POST['description'])));

header('location: index.php');

?>