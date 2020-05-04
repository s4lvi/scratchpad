<?php

class file_parser {
	private $file;
	private $filename;
	private $format;
	
	// set up object
	function __construct($fn, $format) {
			$this->filename = $fn;
			$this->file = fopen($fn, 'r');
			$this->format = $format;
	}
	
	// return an output formatted version of the next item
	function next_item() { 
		// format is a csv file
		if ($this->format == 'csv') {
			$row = fgetcsv($this->file);
			if ($row) {
				$output = '';
				if ($row[0] != '') {
					$output = $output.$row[0]." ";
				}
				if ($row[1] != '') {
					$output = $output.$row[1]." ";
				}
				if ($row[2] != '') {
					$output = $output."(".$row[2].")";
				}
				$split = explode(';',$row[3]);
				foreach ($split as $i) {
					if ($i != '') {
						$output = $output."\n- ".$i;
					}
				}
				if ($output != '') {
					$output = $output."\n\n";
				}
			} 
			else { 
				$output = null; 
			}
			return $output;
		}
		
		// any other format
		else {
			return 'unknown format';
		}
	}
	
	// return to beginning of file
	function reset() {
			$this->file = fopen($this->filename, 'r');
	}
}


$test = new file_parser('items.csv', 'csv');

$item = $test->next_item();
while ($item != null) {
	print($item);
	$item = $test->next_item();
}

?>
