<?php
unlink('./data/'.$_POST['delete']);
header('location: index.php');

?>