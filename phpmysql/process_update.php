<?php
$conn = mysqli_connect("localhost", "root", "111111", "test2");
// var_dump($_POST);
$sql = "UPDATE topic SET
        title= '{$_POST['title']}',
        description = '{$_POST['description']}'
        WHERE id = {$_POST['id']}";
        // die($sql);
$result = mysqli_query($conn, $sql);
if($result === false){
    echo '저장하는 과정에서 문제가 생겼습니다';
}else{
    echo '성공<a href="update.php?id='.$_POST['id'].'">돌아가기</a>';
}
?> 