<?php

$number = isset($_POST['input']) ? $_POST['input'] : 0;

$arrayLet = ["b", "s", "s", "g", "j", "i", "h", "a"];
		
	for ($k = 0; $k < $number; $k++) {
		$string = "";
		shuffle($arrayLet);  								//shuffled array
		$wordLen = rand(2, $number);  						// word lenght on random case
		
		
		for ($i = 0; $i < count($arrayLet); $i++) {
		$string .= $arrayLet[$i];         					// new string form shuffled array     
		}
		$string = substr($string, 0, $wordLen);				// string lenght = random lenght
		$array[] = $string;									// import string
		
	}	
echo json_encode($array);