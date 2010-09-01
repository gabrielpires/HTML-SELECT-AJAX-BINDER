<?php 
	
	class MyItem
	{
		public $text;
		public $value;
		
		public function MyItem()
		{
			
		}
	}
	
	
	$list = array();
	
	//first item
	$first = new MyItem();
	$first->text = "Select an item";
	$first->value = 0;
	$first->selected = "selected";
	array_push($list, $first);
	
	//creating the list
	for($i = 1; $i < 11; $i++)
	{
		$item = new MyItem();	
		$item->text = "Item " + $i;
		$item->value = $i;
		array_push($list, $item);
	}
	
	echo(json_encode($list));
	
?>