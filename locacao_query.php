<?php
require_once 'connect.php';
// Obtém as informações que serão inseridas no banco de dados
$room_id = $_POST['room_id'];
$mensagens_id = 2;
$disciplina_id = $_POST['disciplina_id'];
$time_F = $_POST['time_F'];
$time_T = $_POST['time_T'];
$checkin = $_POST['checkin'];
$query = $conn->query("SELECT users_id  FROM `disciplinas` WHERE disciplina_id = '$disciplina_id'") or die(mysqli_error());
$fetch = $query->fetch_array();
$users_id = $_POST['users_id'];

// Executa o INSERT no banco de dados
$conn->query("INSERT INTO `locacao` (users_id, room_id, mensagens_id, disciplina_id, checkin, checkin_time, checkout_time) VALUES('$users_id', '$room_id', '$mensagens_id','$disciplina_id' , '$checkin', '$time_F','$time_T'") or die(mysqli_error());

// Retorna a resposta do servidor
echo "Dados inseridos com sucesso!";
?>