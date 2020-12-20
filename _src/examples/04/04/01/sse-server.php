<?PHP
set_time_limit( 0 );
header("Content-Type: text/event-stream");
header("Cache-Control: no-cache");
date_default_timezone_set("Europe/Berlin");


function postMessage($event, $data){
	echo "event: {$event}", PHP_EOL;
  echo "data: ", json_encode($data, true), PHP_EOL, PHP_EOL;
  ob_end_flush();
  flush();
}
while (true) {
  postMessage("foo", array("time" => date("r")) );
  sleep(1);
}