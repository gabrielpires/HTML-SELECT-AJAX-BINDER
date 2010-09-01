function InitPage(){
	FillMySelect();
}

function FillMySelect(){
	var mySelect = document.getElementById('mySelect');
	var binder = new bindList(mySelect);
	
	binder.fill(
		{
			"source":getMyList(),
			"success":function(){alert('Just filled.');},
			"fail":function(){alert('Just failed.');},
			"load":"Loading list.."
		}
	);
}


function getMyList(){
	
	var myList = [{"text":"Select an item","value":0,"selected":"selected"},{"text":"Item 1","value":1},{"text":"Item 2","value":2}];
	
	return myList;
	
}