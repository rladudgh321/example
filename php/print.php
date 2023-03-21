<?php
    function print_list(){
        $list = scandir('./data/');
        $lists = '';
        for($i=0; $i<count($list); $i++){
            $XSS = htmlspecialchars($list[$i]);
            if($list[$i] != '.'){
                if($list[$i] != '..'){
                    $lists .= '<li><a href="index.php?id='.$XSS.'">'.$XSS.'</a></li>';
                }
            }
        }
        return $lists;
    }
    
    function print_title(){
        if(isset($_GET['id'])){
            echo htmlspecialchars($_GET['id']);
        }else{
            echo 'welcome';
        }
    }
    function print_desc(){
        if(isset($_GET['id'])){
            echo file_get_contents('./data/'.htmlspecialchars($_GET['id']));
        }else{
            echo 'hello php';
        }
    }


?>