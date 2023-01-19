<?php
$coupon = "";
$coupon = $_GET["CZX_coupon"];
if($coupon=="200"){
  $content = file_get_contents("inventory_data_vip.txt",true);
  echo $content;
} else {
  $content = file_get_contents("inventory_data.txt",true);
  echo $content;
};

$manager = "";
$manager = $_GET["manager_infor"];
if($manager=="CXW"){
  $content = file_get_contents("ourTeam_threeImage.txt",true);
  echo $content;
}




?>