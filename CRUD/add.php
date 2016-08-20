<?php
session_start();
$pyrvo = $_POST['nick'];
$vtoro = $_POST['class'];
$treto = $_POST['subclass'];


echo json_encode($_POST);