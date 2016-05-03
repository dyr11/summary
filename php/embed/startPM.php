 
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
	$str="";

	$tmp="";
	$count=0;
	$cache="";
	echo "dio_read\r\n";
	dio_write($f,"\r\n",2);
	while(1){
	dio_write($f,"\r\n",2);
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
    preg_match_all('/temp(.*)m3/',$cache,$result);
    if(isset($result[0][0])){
		$cache="";
        $row=$result[0][0];
        preg_match_all('/\d+(\.\d*)?/',$cache,$res);
        $out=$res[0];
       // print_r($out);
		$file=fopen("test.txt","a+");
		fwrite($file,json_encode($out));
    }else{
      //  echo "nu";
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
