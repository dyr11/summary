 
<?php
$com="com7";
	//set_time_limit(3);
        //echo 'windows�����ôܿڲ���<br>';
        exec("mode ".$com."BAUD=9600 PARITY=n DATA=8 STOP=1 odsr=off");
        
        //echo "�򿪶˿�$com<br>";
        $f =  dio_open ($com, O_RDWR  );
        if(!$f)
        {
                die("Error when open $com");
        }
        //echo "�򴮿ڷ�������<br>".$data.'<br>';
       // dio_write ($f, $data);
        //echo "��������<br>";
        $str="";
    //    for ($i = 0; $i <= 7; $i++) 
     //   {
       //         $str.=bin2hex(dio_read( $f,1));
     //   }        
     //   echo $str;
	echo	dio_read( $f,200);
//dio_write($f,"3333",3);


?>