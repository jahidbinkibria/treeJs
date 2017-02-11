var students = [
	{ 
		name: 'jahid',
		track: 'javascript',
		achivements: 175,
		point: 12007
	},
	{ 
		name: 'mehedi',
		track: 'java',
		achivements: 275,
		point: 27007
	},

	{ 
		name: 'robbani',
		track: 'css',
		achivements: 67,
		point: 9007
	},

	{ 
		name: 'shamim',
		track: 'html',
		achivements: 175,
		point: 12067
	},

	{ 
		name: 'nazmul',
		track: 'python',
		achivements: 15,
		point: 807
	},

];

var inHTML= '';
var student;

function print(message){
	var outputDiv = document.getElementById('hello');
	outputDiv.innerHTML = message;
} 

for(var i=0; i<students.length;i++){
	student = students[i];
	inHTML += '<h2> Name - ' + student.name + '</h2>';
	inHTML += '<p> Track : ' + student.track + '</p>';
	inHTML += '<p> Achivements : ' + student.achivements + '</p>';
	inHTML += '<p> Point : ' + student.point + '</p>';
}

print(inHTML);

