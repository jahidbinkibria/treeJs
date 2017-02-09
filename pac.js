var html = '';
var red;
var green;
var blue;
var rgbColor;
function rgbfunction(){
	return Math.floor(Math.random() * 256);
}
function rgbrandom(){
	var color = 'rgb(';
	color += rgbfunction() + ',';
	color += rgbfunction() + ',';
	color += rgbfunction() + ')';
	return color;
}
function print(message){
	document.write(message);
}
for(var i = 1;i<=112;i++){
	rgbColor = rgbrandom();
	html += '<div style="background-color:' + rgbColor + '"></div>';
}

print(html);