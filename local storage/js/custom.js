// add default localstorage class on body 
// || >> Or (ture falsee pattern) 
document.body.classList.add(localStorage.getItem("pageColor")||"red");

console.log(localStorage.getItem("pageColor")) 




var el = document.querySelectorAll(".color-switcher li"),
	classesList = [];

for(var i =0; i<el.length ;i++){
	// get value attribute ==> console.log(el[i].getAttribute("data-type"));
	classesList.push(el[i].getAttribute("data-type"));
	
	el[i].addEventListener("click",function(){
		document.body.classList.remove(...classesList);
		document.body.classList.add(this.getAttribute("data-type"));
		localStorage.setItem("pageColor" , this.getAttribute("data-type"));
		console.log(el[i]);
	});
}

//console.log(localStorage.getItem("pageColor"))
//localStorage.removeItem("pageColor");
