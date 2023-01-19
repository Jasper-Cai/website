<?php
header('Content-Type: application/json; charset=utf-8');
$manager = "";
$manager = $_GET["manager_infor"];
if($manager=="CXW"){
  $content = file_get_contents("ourTeam_threeImage.txt",true);
  echo $content;
}

$salesTeam = "";
$salesTeam = $_GET["salesTeam_infor"];
if($salesTeam=="CZX"){
  $content = file_get_contents("ourTeam_fourImage.txt",true);
  echo $content;
}

?>