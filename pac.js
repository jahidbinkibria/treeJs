function printlist(list){
	var listHTML = '<ol>';
	for(var i=0;i<list.length; i++ ){
		listHTML += '<li>' + list[i] + '</li>'
	}
	listHTML += '</ol>' ;
	print(listHTML);
}
function print(message){
	document.write(message);
}

var playlist = [];
playlist.push('hello there');
playlist.push('how');
playlist.push('are');
playlist.unshift('you');


printlist(playlist);