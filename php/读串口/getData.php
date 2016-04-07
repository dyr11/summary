{
	"state": "success",
	"data": {
	"RSV": "40.00",
	"Voltage": "0.20V",
	"DustDensity": "0.00 mg/m3",
	"temp": "18",
	"humi": "27 ",
	"tol ": "45 "
}
}

<?php

if(isset($_REQUEST["cmd"])&&!empty($_REQUEST["cmd"])){
	save($_REQUEST["cmd"]);
}

if(isset($_REQUEST['type'])&&!empty($_REQUEST['type'])){
	$value=$_REQUEST['type'];
	if($value=="PM"){
		getPM();
	}else{
		getIR();
	}
}

function save($tmp){
	$file=fopen("cmd","w");
	fwrite($file,$tmp);

}

function getPM(){
	$table="";
	$row=getRow($table);
	echo json_encode($row);
}

function getIR(){
	$table=""
	$row=getRow($table);
	echo json_encode($row);
}

function getRow($table){
	mysql_connect("localhost","root","root");
	mysql_select_db("");
	$sql="select *from $table where time=(select max(time) from $table)";
	$result=mysql_query($sql);
	$row=mysql_fetch_assoc($result);
	$data=array("state"=>"success","data"=>$row);
	mysql_close();
	return $data;
}

?>