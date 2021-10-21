let classes = ["one","two","three","four"];


window.onload = function(){
	let random = Math.floor(Math.random() *   classes.length)

	//===> First Method
	/*
	document.body.classList.remove(...classes)
	document.body.classList.add(classes[random])		
    */

	//====> Second Method

	document.body.setAttribute("class",classes[random])
}