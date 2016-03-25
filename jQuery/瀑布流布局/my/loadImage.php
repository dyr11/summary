<?php
//设置页面内容是html编码格式是utf-8
header("Content-Type: text/plain;charset=utf-8"); 
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Method:POST,GET");
//header("Content-Type: application/json;charset=utf-8"); 
//header("Content-Type: text/xml;charset=utf-8"); 
//header("Content-Type: text/html;charset=utf-8"); 
//header("Content-Type: application/javascript;charset=utf-8"); 

if ($_SERVER["REQUEST_METHOD"] == "GET") {
	loadImage();
} 

function loadImage(){

	if (!isset($_GET["id"]) || empty($_GET["id"])) {
		echo '{"success":false,"msg":"参数错误"}';
		return;
	}

	$id = $_GET["id"];
	echo  '{"success":true,"msg":"找到图片","data":[';
	

	$max=97;
	$img=$id%$max;

	for ($i=0;$i<5;$i++) {
		$img++;
		if($img>$max){
			$img=0;
		}
		echo '{"src":"Images/'.$img.'.jpg"}';
		if($i<4)
			echo ',';
	}
	echo ']}';
   // echo $result;
   // echo "sdad";
}



?>