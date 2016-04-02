 
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
readFromDIO($f);
$conn=mysql_connect("localhost","root","root");
//writeToDIO($f,"3,FFE01F");
function readFromDIO($f){
	$str="";
    //    for ($i = 0; $i <= 7; $i++) 
     //   {
       //         $str.=bin2hex(dio_read( $f,1));
     //   }        
     //   echo $str;
	//echo	dio_read( $f,200);
	$tmp="";
	$count=0;
	$cache="";
	/*d=dio_read($f,11);
	for($i=0;$i<strlen($d);$i++){
		echo ord($d[$i]);
		echo " ";
	}
	
	echo "\r\n";

	*/
	/*dio_read($f,1);
	$dd="3,FFE01F";
	for($i=0;$i<strlen($dd);$i++){
		echo ord($dd[$i]);
		echo " ";
	}
	
	dio_write($f,$dd,strlen($dd));
	sleep(1);
	*/
	//dio_write($f,"3\r\n", strlen("3\r\n"));
	//dio_write($f,"FFE01F\r\n", strlen("FFE01F\r\n"));
	//dio_close($f);
	//echo strlen("FFE01F\r\n");
	echo "dio_read\r\n";
	dio_write($f,"\r\n",2);
	while(1){
	dio_write($f,"\r\n",2);
	$tmp=dio_read($f,1);
	//echo $tmp;
		//if($count>10){
			$s=read();
			//echo "s:".$s;
			if(strlen($s)!=0){
				echo "cmd:".$s."\r\n";
				writeToDIO($f,$s);	
				clearFile();
				//echo $s;
			}
			
			//ordd()
			if($tmp=="#"){
				
			}
			else if(ord($tmp)==13||ord($tmp)==10){
				test($cache);
			}else if($tmp1!=""&&$tmp=="0"){
				
			}
			else{	
			$cache.=$tmp;
				
				echo $tmp;
			}
			//writeToDIO($f,$tmp);
			//$tmp="";
			//$count=0;
		//}
		//save($count);
		//$count++;
		//sleep(0.01);
		//reply();
		//dio_write($f,"`",1);
		//echo "g";
	}
}
//$f=openCOM($com);

function writeToDIO($f,$tmp){
	//dio_read($f,1);
	//while(1){	
	dio_write($f,$tmp,strlen($tmp));
	//sleep(10);
	//}
	
}


//$pre="";
function save($tmp){
	$pre=$tmp;
	$file=fopen("c.txt","a+");
	fwrite($file,$tmp);

}

function test($cache){
//$cache="temp:21 humi:45 tol:66 Raw Signal Value (0-1023): 0.00 - Voltage: 0.00V - Dust Density: 0.00 mg/m3";
    preg_match_all('/temp(.*)m3/',$cache,$result);
    if(isset($result[0][0])){
        $row=$result[0][0];
        preg_match_all('/\d+(\.\d*)?/',$cache,$res);
        $out=$res[0];
        print_r($out);
		$file=fopen("test.txt","a+");
		fwrite($file,serialize($out));
    }else{
        echo "nu";
    }
	
/*	Array
(
    [0] => 21
    [1] => 45
    [2] => 66
    [3] => 0
    [4] => 1023
    [5] => 0.00
    [6] => 0.00
    [7] => 0.00
    [8] => 3
)
*/
}

function read(){
	$file=fopen("cmd","rw");
	$s=fread($file,20);
	//echo "readFile\n";
	return trim($s);
}
function clearFile(){
	echo "clearFileStart\r\n";
	file_put_contents("cmd","");
	echo "clearFileEnd\r\n";
}
function reply(){
	ob_end_clean();
	ob_start();
	echo "向串口发送数据1<br>".'<br>';
// dio_write ($f, $data);
	echo "接收数据<br>";
	header("HTTP/1.1 200 OK");
	header("Connection:close");
	$size=ob_get_length();
	header("Content-Length:$size");
	ob_end_flush();
	flush();
}
//$s=mysql_connect("localhost","root","root");
?>