<?php
require_once 'connect.php';
// Executa a consulta SQL para buscar os eventos inseridos no banco de dados
$query = "SELECT * FROM `locacao`as lc INNER JOIN `laboratorios` as lb ON lb.room_id = lc.room_id";
$result = $conn->query($query);

// Cria um array para armazenar os eventos
$events = array();
// Adiciona cada evento ao array de eventos
while ($row = $result->fetch_assoc()) {
  list($year, $month, $day) = explode('-', $row['checkin']);
  $checkin_time = date('h:i A', strtotime($row['checkin_time']));
  $checkout_time = date('h:i A', strtotime($row['checkout_time']));
  $evento = array(
        'title' => $row['room_type'],
        'time' => $checkin_time . " - " . $checkout_time,
  );
  array_push($events, $evento);
  $date = array('day'=> intval($day),'month'=> intval($month),'year'=> intval($year),'events'=> $evento);
  // array_push($date, $evento);
}    

// Converte o array de eventos para JSON e retorna a resposta do servidor
echo json_encode($date);

?>