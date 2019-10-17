var i=0;
var m=0;
var h=0;
setInterval(function timechange(){
	i++;
	console.log(i);
	// Document.getElementById()
	document.getElementById('hrs').innerHTML =h+":";

	document.getElementById('min').innerHTML =m+":";
	document.getElementById('sec').innerHTML =i;
	if(i==60){
		i=0;
		m++;}


},1000)