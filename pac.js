var PlayList = {
	Name: 'jahid',
	Id: 20,
	Batch: true,
	Subject: ['math','physics','c++']	
};

function print(message){
	var div = document.getElementById('hello');
	div.innerHTML = message;
}

for(var i in PlayList){
	console.log( i , ' :' ,PlayList[i]);
}

