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
var search;

function print(message){
	var outputDiv = document.getElementById('hello');
	outputDiv.innerHTML = message;
} 
function getStudentReport (student){
	var report = '<h2> student: ' + student.name + ' </h2>';
  	report += '<p> track: ' + student.track + ' </p>';
  	report += '<p> achivements: ' + student.achivements + ' </p>';
  	report += '<p> point: ' + student.point + ' </p>'; 
  	return report 
}

while(true){
  search = prompt("Hey There Type A Name like 'jahid' OR Type 'quit' To Exit").toLowerCase();
  if(search === null || search === 'quit'){
    break;
  }

  for(var i=0 ;i<students.length;i++){
  	student = students[i];
  	if(student.name === search){
  		message = getStudentReport(student);
  		print(message);
  	}
  	
  }

}



