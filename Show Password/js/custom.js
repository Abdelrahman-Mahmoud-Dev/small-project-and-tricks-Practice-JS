let btn = document.getElementById("btn"),
	input = document.getElementById("my-input");


btn.onclick = function(e){
e.preventDefault()
	if(this.textContent ===`Show Password`){
		input.setAttribute("type","text")
		this.textContent = "Hide Password"
	}else{
		input.setAttribute("type","password")
		this.textContent = "Show Password"
	}
}
