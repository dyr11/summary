 
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
	$cache="";
	echo "dio_read\r\n";
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
		save($tmp,"IR");
	}
}
function save($tmp,$fileName){
	$pre=$tmp;
	$file=fopen("$fileName.txt","a+");
	fwrite($file,$tmp);

}
function test($cache){
	$cache="3,FFE01 ";
	preg_match('/\d,[0-9ABCDEF]{6}\s/i',$cache,$result);
	if(isset($result[0])){
		print_r($result);
		insertToDB($result);
	}else{
		echo "error data!\r\n";
	}
	$cache="";

/*	Array
(
    [0] => 3,FFE01f 
    )*/

}


mysql_connect("localhost","root","root");
mysql_select_db("");
function insertToDB($data){
	$time=date("Y-m-d H:i:s",time());
	$sql="insert into PM(value,time)values('$data[0])',$time";
	save($sql+"\r\n","IRSQL");
	mysql_query($sql);
	$uid=mysql_insert_id();
	if($uid!=0){
		echo "success!id=".$uid."\r\n";
	}else{
		echo "insert error!\r\n"
	}
}
