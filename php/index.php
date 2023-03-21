<?php
require_once('./print.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?=print_title()?></title>
</head>
<body>
    <h1><a href="index.php">web</a></h1>
    <ol>
        <?=print_list()?>
    </ol>
    <h2><?=print_title()?></h2>
    <p><?=print_desc()?></p>
    <a href="./create.php">create</a>
    <?php 
    if(isset($_GET['id'])){
        ?>
       <a href="./update.php?id=<?=$_GET['id']?>">update</a><br>
       <form action="process_delete.php" method="post">
        <input type="hidden" name="delete" value="<?=$_GET['id']?>" />
        <p><input type="submit" value="delete" /></p>
       </form>
    <?php
    }
    ?>
        
</body>
</html>