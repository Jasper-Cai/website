<?php
header('Content-Type: application/json; charset=utf-8');
$top3Image = "";
$top3Image = $_GET["top3Image_infor"];
if($top3Image=="trunk_model"){
  $content = file_get_contents("index_threeImage.txt",true);
  echo $content;
}

$middleFeature = "";
$middleFeature = $_GET["middleFeature_infor"];
if($middleFeature=="truck_feature"){
  $content = file_get_contents("index_middleFeature.txt",true);
  echo $content;
}

$bottomFeature = "";
$bottomFeature = $_GET["bottomFeature_infor"];
if($bottomFeature=="strength"){
  $content = file_get_contents("index_bottomFeature.txt",true);
  echo $content;
}

?>