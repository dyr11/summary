 
<?php
ignore_user_abort(true);
set_time_limit(0);
$com="com1";
	//set_time_limit(3);
        //echo 'windows�����ôܿڲ���<br>';
// exec("mode ".$com."BAUD=9600 PARITY=n DATA=8 STOP=1 odsr=off");

//         //echo "�򿪶˿�$com<br>";
// $f =  dio_open ($com, O_RDWR  );
// if(!$f)
// {
// 	die("Error when open $com");
// }
readFromDIO();

function readFromDIO(){
	$str="";
    //    for ($i = 0; $i <= 7; $i++) 
     //   {
       //         $str.=bin2hex(dio_read( $f,1));
     //   }        
     //   echo $str;
//echo	dio_read( $f,200);
	$tmp="";
	$count=0;
	while(1){
	//$tmp.=dio_read($f,1);
		if($count>1000){
			save($count);
			$tmp="";
		}
		save($count);
		$count++;
		sleep(1);
		reply();
	}
}

function writeToDIO(){

}
$pre="";
function save($tmp){
	$pre.=$tmp;
	$file=fopen("c.txt","a+");
	fwrite($file,$tmp);

}
function reply(){
	ob_end_clean();
	ob_start();
	echo "�򴮿ڷ�������1<br>".'<br>';
// dio_write ($f, $data);
	echo "��������<br>";
	header("HTTP/1.1 200 OK");
	header("Connection:close");
	$size=ob_get_length();
	header("Content-Length:$size");
	ob_end_flush();
	flush();
}
?>