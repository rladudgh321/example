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
    <h2>CREATE</h2>
    <form action="process_create.php" method="post">
        <p><input type="text" name="title" placeholder="title" /></p>
        <p><textarea name="description" placeholder="description"></textarea></p>
        <p><input type="submit" value="Create" /></p>
    </form>
</body>
</html>