<?php

ignore_user_abort(true);
set_time_limit(0);
$com="com7";
	//set_time_limit(3);
        //echo 'windows下设置窜口参数<br>';
	function openCOM($com){
		exec("mode ".$com."BAUD=9600 PARITY=n DATA=8 STOP=1 odsr=off");

        //echo "打开端口$com<br>";
		$f =  dio_open ($com, O_RDWR  );
	if(!$f)
		{
	die("Error when open $com");
		}
	return $f;
}

$f=openCOM($com);
WriteFromDIO($f);
function writeFromDIO($f){
	dio_read($f,"eeeeeeee",8);
	
}
?>