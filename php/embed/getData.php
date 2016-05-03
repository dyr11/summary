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

function save($tmp){
	$file=fopen("cmd","w");
	fwrite($file,$tmp);

}

?>