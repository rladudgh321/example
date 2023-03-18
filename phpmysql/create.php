<?php
$conn = mysqli_connect("localhost", "root", "111111", "test2");

//list
$sql = "SELECT * FROM topic";
$result = mysqli_query($conn, $sql);
$list = '';
while($row = mysqli_fetch_array($result)){
    // var_dump($row);
    $list .= "<li><a href=\"index.php?id={$row['id']}\">{$row['title']}</a></li>";
}
 
//author list
$sql = "SELECT * FROM author";
$result = mysqli_query($conn, $sql);
$select_form = '<select name="author_id">';
while($row = mysqli_fetch_array($result)){
    $select_form .= '<option value="'.$row['id'].'">'.$row['name'].'</option>';
}
$select_form .= '</select>';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="night.js"></script>
</head>
<body>
    <h1><a href="index.php">WEB</a></h1>
    <input type="button" value="night" onClick="night()";/>
    <ol>
        <?=$list?>
    </ol>
    <h2>Create</h2>
    <form action="process_create.php" method="post">
        <p><input type="text" name="title" placeholder="title"/></p>
        <p><textarea name="description" rows="10" placeholder="description"></textarea></p>
        <!-- author list -->
        <?=$select_form?>
        <p><input type="submit" value="CREATE"/></p>
    </form>
</body>
</html>