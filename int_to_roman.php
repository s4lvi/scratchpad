<?php

function convert($in, $set = ['I', 'V', 'X', 'L', 'C', 'D', 'M']) {
	$out = '';
	while ($in - 1000 >= 0) {
		$out = $out.$set[6];
		$in = $in - 1000;
	}
	if ($in - 900 >= 0) {
		$out = $out.$set[4].$set[6];
		$in = $in - 900;
	}
	if ($in - 500 >= 0) {
		$out = $out.$set[5];
		$in = $in - 500;
	}
	if ($in - 400 >= 0) {
		$out = $out.$set[4].$set[5];
		$in = $in - 400;
	}
	while ($in - 100 >= 0) {
		$out = $out.$set[4];
		$in = $in - 100;
	}
	if ($in - 90 >= 0) {
		$out = $out.$set[2].$set[4];
		$in = $in - 90;
	}
	if ($in - 50 >= 0) {
		$out = $out.$set[3];
		$in = $in - 50;
	}
	if ($in - 40 >= 0) {
		$out = $out.$set[2].$set[3];
		$in = $in - 40;
	}
	while ($in - 10 >= 0) {
		$out = $out.$set[2];
		$in = $in - 10;
	}
	if ($in - 9 >= 0) {
		$out = $out.$set[0].$set[2];
		$in = $in - 9;
	}
	if ($in - 5 >= 0) {
		$out = $out.$set[1];
		$in = $in - 5;
	}
	if ($in - 4 >= 0) {
		$out = $out.$set[0].$set[1];
		$in = $in - 4;
	}
	while ($in - 1 >= 0) {
		$out = $out.$set[0];
		$in = $in - 1;
	}
	
	return $out;
}


for ($i = 0; $i <= 1000; $i++) {
	print($i.'-'.convert($i)."\n");
}
?>
