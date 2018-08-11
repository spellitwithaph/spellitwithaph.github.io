<?php 

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://dev-rce-tw-uat.rzlvtest.co/rest/V1/orders?searchCriteria[filter_groups][0][filters][0][field]=rezolve_order_id&searchCriteria[filter_groups][0][filters][0][value]=" . $_POST['orderid'] . "&searchCriteria[filter_groups][0][filters][0][conditionType]=eq&fields=items[entity_id]",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => array(
    "Content-Type: application/json",
    "Authorization: Bearer " . $_POST['currentToken']
)));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
  $arr = json_decode($response, true);
  $entity_id = $arr['items'][0]['entity_id'];
  getFullDetails($entity_id);
}



function getFullDetails($ei) {

  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://dev-rce-tw-uat.rzlvtest.co/rest/V1/orders/".$ei,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "Content-Type: application/json",
      "Authorization: Bearer " . $_POST['currentToken']
  )));

  $fullresponse = curl_exec($curl);
  $err = curl_error($curl);

  curl_close($curl);

  if ($err) {
    echo "cURL Error #:" . $err;
  } else {
    print_r(json_decode($fullresponse));
  }

}


?>