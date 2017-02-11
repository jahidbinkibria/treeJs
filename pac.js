var playList = {
	name: 'jahid',
	id: 20,
	batch: true,
	subject: ['math','physics','c++']	
};

function print(message){
	var div = document.getElementById('hello');
	div.innerHTML = message;
}
var message = '<p> hello my name is ' +  playList.name + '</p>'
message += '<p> my id was ' +  playList.id + '</p>'
playList.name = 'jahid khan';
message += '<p> i wish my name was ' + playList.name + '</p>';
playList.id += 1;
message += '<p> my id is now ' + playList.id + '</p>';
message+= '<p> i have subject ' + playList.subject.length + '</p>'
message+= '<p> here the list : ' + playList.subject.join(', ');
print(message);
