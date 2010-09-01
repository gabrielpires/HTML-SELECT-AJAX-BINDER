function InitPage(){
	FillMySelect();
}

function FillMySelect(){

	var mySelect = document.getElementById('mySelect');
	var binder = new bindList(mySelect);
	
	binder.fill(
		{
			"source":getMyService(),
			"success":function(){alert('Just filled.');},
			"fail":function(){alert('Just failed.');},
			"load":"Loading list.."
		}
	);
}


function getMyService(){

	return "my-service.php";
	
}