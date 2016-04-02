 
<?php
ignore_user_abort(true);
set_time_limit(0);
$com="com9";
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
//writeToDIO($f,"3,FFE01F");
function readFromDIO($f){
	//$str="";
	$tmp="";
	//$count=0;
	$cache="";
	echo "dio_read\r\n";
	//dio_write($f,"\r\n",2);
	while(1){
		//dio_write($f,"\r\n",2);
		$tmp=dio_read($f,1);
		if(ord($tmp)==13||ord($tmp)==10){
			$cache.=" ";
			test($cache);
		}
		else{	
			$cache.=$tmp;
		}
		echo $tmp;
		save($tmp);
	}
}
function save($tmp){
	$pre=$tmp;
	$file=fopen("PM.txt","a+");
	fwrite($file,$tmp);

}
function test($cache){
//$cache="temp:21 humi:45 tol:66 Raw Signal Value (0-1023): 0.00 - Voltage: 0.00V - Dust Density: 0.00 mg/m3";
	preg_match('/temp.*m3/',$cache,$result);
	
	if(isset($result[0])){
		$row=$result[0];
		preg_match_all('/\d+(\.\d*)?/',$row,$res);
		$out=$res[0];
		print_r($out);
		inserToDB($out);
	}else{
		echo "error data!\r\n";
	}
	$cache="";

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
mysql_connect("localhost","root","root");
mysql_select_db("");
function insertToDB($data){
	$sql="insert into PM(temp,humi,tol,RSV,Voltage,Dust,Density)values($data[0],$data[1],$data[2],$data[5],$data[6],$data[7],$data[8])";
	mysql_query($sql);
	$uid=mysql_insert_id();
	if($uid!=0){
		echo "success!id=".$uid."\r\n";
	}else{
		echo "insert error!\r\n"
	}
}
