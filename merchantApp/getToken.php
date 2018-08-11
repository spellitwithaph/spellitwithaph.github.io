<?php 

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://dev-rce-tw-uat.rzlvtest.co/rest/default/V1/integration/admin/token",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{\"username\": \"".$_POST['username']."\",\"password\": \"".$_POST['userpass']."\"}",
  CURLOPT_HTTPHEADER => array(
    "Content-Type: application/json"
  )
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo  $_SESSION['token'] = str_replace('"', '', $response);
}

?>