var a,b;
a=window.prompt("Enter a: ");
b=window.prompt("Enter b: ");
var foo=function(){
	return (a * a) + (2 * a * b) - (b * b);
}
var value=foo();
console.log(value);
if(value>0){
	console.log("Wynik jest dodatni: ",value)
}
else if(value<0){
	console.log("Wynik jest ujemny: ",value)
}
else{
	console.log("Wynik jest zerowy: ",value)
}
