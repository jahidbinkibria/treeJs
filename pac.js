var playList = [
  ['all of me','john legend'],
  ['imagine','john lenon'],
  ['love the way lie','eminem'],
  ['dear mama','tupac'],
  ['fix you','coldplay']
];

function print(message){
	document.write(message);
}

function printsongs(songs){
	var listHTML = '<ol>';
	for(var i = 0; i<songs.length; i++){
		listHTML += '<li>' + songs[i][0] + ' by ' + songs[i][1] + '</li>'
	}
	listHTML += '</ol>';
	print(listHTML);
}
printsongs(playList)