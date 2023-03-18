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
    $delete = '';
    $author= ''; 


if(isset($_GET['id'])){
    $sql = "SELECT * FROM topic LEFT JOIN author ON topic.author_id = author.id WHERE topic.id = {$_GET['id']}";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_array($result);
    $article = array(
        'title' => $row['title'],
        'description' => $row['description']
    );
    // var_dump($row);
    $update='<a href="update.php?id='.$_GET['id'].'">update</a>';
    $delete= '<form action="process_delete.php" method="post">
                <p><input type="hidden" name="id" value="'.$_GET['id'].'"/></p>
                <p><input type="submit" value="delete"/></p>
            </form>';


    $author= '<p>by '.$row['name'].'</p>'; 
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
    <a href="author.php">author</a>
    <input type="button" value="night" onClick="night()";/>
    <ol>
        <?=$list?>
    </ol>
    <h2><?=$article['title']?></h2>
    <p><?=$article['description']?></p>
    <?=$author?>
    <a href="create.php">create</a>
    <?=$update?>
    <?=$delete?>
</body>
</html>