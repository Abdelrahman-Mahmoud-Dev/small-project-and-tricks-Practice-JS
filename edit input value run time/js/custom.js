let txt = document.getElementById("txt"),
	inputTxt = document.getElementById("input-txt"),
	heading = document.body.children[1].firstElementChild,
	artical = document.body.children[1].lastElementChild;

txt.onkeyup = function(){
	
	artical.textContent = this.value

}	
inputTxt.onkeyup = function(){

	heading.textContent = this.value
	
}
	