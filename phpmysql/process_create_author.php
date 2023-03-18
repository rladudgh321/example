<?php
$conn = mysqli_connect("localhost", "root", "111111", "test2");

$sql = "INSERT INTO author
        (name,profile)
        VALUES(
            '{$_POST['name']}', '{$_POST['profile']}'
         )";
$result = mysqli_query($conn, $sql);
if($result === false){
    echo '저장하는 과정에서 문제가 생겼습니다';
}else{
    // echo '성공 '.'<a href="author.php">돌아가기</a>';
    header('Location: author.php');
}
?> 