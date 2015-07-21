<?php
if(isset($_REQUEST['data'])){
	$url='http://jc.znds.com/plus/getCpbyTid.php';
	$data=$_REQUEST['data'];
	$post_data = array ("tid" => $data);
	$json_data = postData($url,$post_data);
}
else{
	$url='http://jc.znds.com/plus/getBrand.php';
	$json_data = getData($url);
}

echo json_decode($json_data); 




function getData($url)  
    {
	    //初始化
	    $ch = curl_init();    //初始化一个curl对象
	    $timeout = 100;

	    //设置选项，包括URL
		curl_setopt($ch, CURLOPT_URL, $url);    //设置你需要抓取的URL
		curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);    //设置是将结果保存到字符串中还是输出到屏幕上，1表示将结果保存到字符串
		curl_setopt($ch, CURLOPT_HEADER, 0);     
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);

		$str = curl_exec($ch);    //执行请求
		$json_data=json_encode($str);
		return $json_data;    //输出抓取的结果
		curl_close($ch);
    }



function postData($url,$data)  
    {
	    //初始化
	    $ch = curl_init();    //初始化一个curl对象
	    $timeout = 100;

	    //设置选项，包括URL
		curl_setopt($ch, CURLOPT_URL, $url);    //设置你需要抓取的URL
		curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);    //设置是将结果保存到字符串中还是输出到屏幕上，1表示将结果保存到字符串
		curl_setopt($ch, CURLOPT_HEADER, 0);     
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);

        curl_setopt($ch, CURLOPT_POST, true);  
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

		$str = curl_exec($ch);    //执行请求
		$json_data=json_encode($str);
		return $json_data;    //输出抓取的结果
		curl_close($ch);
    }
?>