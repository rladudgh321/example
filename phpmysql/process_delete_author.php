<?php
$conn = mysqli_connect("localhost", "root", "111111", "test2");
// var_dump($_POST);

$sql = "DELETE FROM topic WHERE author_id = {$_POST['id']}";
$result = mysqli_query($conn, $sql);

$sql = "DELETE FROM author WHERE id = {$_POST['id']}";
$result = mysqli_query($conn, $sql);
if($result === false){
    echo '저장하는 과정에서 문제가 생겼습니다';
}else{
    echo '성공<a href="author.php">돌아가기</a>';
    header('Location:author.php');
}
?> 