<?php
$conn = mysqli_connect("localhost", "root", "111111", "test2");

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
    <a href="index.php">topic</a>
    <input type="button" value="night" onClick="night()";/>
    <table border="1" style="margin:10px;">
        <tr>
            <td>id</td>
            <td>name</td>
            <td>profile</td>
        </tr>
        <?php 
        //author list
        $sql = "SELECT * FROM author";
        $result = mysqli_query($conn, $sql);
        $list = '';
        while($row = mysqli_fetch_array($result)){
       
            // $list .= $row['name'];
        ?>
        <tr>
           <td><?=$row['id']?></td>
           <td><?=$row['name']?></td>
           <td><?=$row['profile']?></td>
           <td><a href="author.php?id=<?=$row['id']?>">update</a></td>
           <td><?=
           '<form action="process_delete_author.php" method="post">
                <input type="hidden" name="id" value="'.$row['id'].'" />
                <p><input type="submit" value="delete"/></p>
            </form>'
           ?></td>
        </tr>
        <?php
        }
        ?>
    </table>
    <?php

    //update

    if(isset($_GET['id'])){
        $sql = "SELECT * FROM author WHERE id = {$_GET['id']}";
        $result = mysqli_query($conn, $sql);
        $row = mysqli_fetch_array($result);
        $article = array(
            'id' => $row['id'],
            'name' => $row['name'],
            'profile' => $row['profile']
        );
        $title = 'Update Author';
        $label = 'Update';
    }else{   
        $article= array(
            'id' => '',
            'name' => '',
            'profile' => ''
        );
        $title = 'Create Author';
        $label = 'Create';
    }
    ?>
    <h2><?=$title?></h2>
    <form action="process_update_author.php" method="post">
        <input type="hidden" name="id" value="<?=$article['id']?>" />
        <p><input type="text" name="name" placeholder="name" value="<?=$article['name']?>" /></p>
        <p><textarea name="profile" rows="10" placeholder="profile"><?=$article['profile']?></textarea></p>
        <p><input type="submit" value="<?=$label?>"/></p>
    </form>
</body>
</html>