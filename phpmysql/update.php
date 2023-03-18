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

//select query

    $article = array(
        'title' => 'WELCOME',
        'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus repellendus, vel repudiandae voluptate ducimus officia mollitia doloribus quisquam laboriosam in minima eos earum provident numquam, odio corrupti eligendi suscipit necessitatibus!'
    );
    $update = '';

if(isset($_GET['id'])){
    $sql = "SELECT * FROM topic WHERE id = {$_GET['id']}";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_array($result);
    $article = array(
        'title' => $row['title'],
        'description' => $row['description']
    );
    // var_dump($row);
    $update='<a href="update.php?id='.$_GET['id'].'">update</a>';
}

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
    <h2><?=$article['title']?></h2>
    <p><?=$article['description']?></p>

    <h2>Update</h2>
    <form action="process_update.php" method="post">
        <p><input type="hidden" name="id" value="<?=$_GET['id']?>"/></p>
        <p><input type="text" name="title" placeholder="title" value="<?=$article['title']?>"/></p>
        <p><textarea name="description" rows="10" placeholder="description"><?=$article['description']?></textarea></p>
        <p><input type="submit" value="UPDATE"/></p>
    </form>
 
</body>
</html>