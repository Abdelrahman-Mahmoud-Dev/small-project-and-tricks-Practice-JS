
// ===> first method

let myInput = document.getElementById("myinput");



myInput.onfocus = function(){
	"use strict";
	this.setAttribute("data-place",this.getAttribute("placeholder"));
	myInput.setAttribute("placeholder","")
	
}

myInput.onblur = function(){
	"use strict";
	this.setAttribute("placeholder",this.getAttribute("data-place"));
	this.setAttribute("data-place","");

}


// myInput.onclick = function(){
// 	let placeholder = myInput.getAttribute("placeholder")
// 	"use strict";
// 	if(myInput.focus()){
// 		//myInput.setAttribute("data-place",myInput.getAttribute("placeholder"));
// 		myInput.setAttribute("placeholder","")
// 	 }else{
// 		 myInput.setAttribute("placeholder",placeholder);
// 		 //myInput.setAttribute("data-place","")
// 	 }
		
// }
// myInput.onblur = function(){
// 	"use strict";
// }



