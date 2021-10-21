let count = document.getElementById("count"),
	txtarea = document.getElementById("text"),
	maxLength = txtarea.getAttribute("maxlength");



txtarea.oninput = function(){
	count.innerHTML = maxLength - this.value.length;

	if(count.innerHTML == 0){
		count.classList.add("zero")
	}else{
		count.classList.remove("zero")
	}
};

