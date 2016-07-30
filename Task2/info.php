<?php

$arrayImgLoc = ["images/bg.gif", "images/BGf.jpg", "images/cm.jpg", "images/frodo.png", "images/frodo1.jpg" ];
$number = 3;

for ($i = 0; $i < 3; $i++) {
	shuffle($arrayImgLoc);
	$newAr = array_slice($arrayImgLoc, 0, 3);
		
}

echo json_encode($newAr);