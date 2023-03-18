<?php
$conn = mysqli_connect("localhost", "root", "111111", "test2");

$sql = "INSERT INTO topic
        (title,description,created,author_id)
        VALUES(
            '{$_POST['title']}', '{$_POST['description']}', NOW(), {$_POST['author_id']}
         )";
$result = mysqli_query($conn, $sql);
if($result === false){
    echo '저장하는 과정에서 문제가 생겼습니다';
}else{
    header('Location: index.php');
}
?> 