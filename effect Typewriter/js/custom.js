let btn = document.getElementById("btn"),
 	txt = document.getElementById("type"),
	myText = `hello frpm elzero web school`,
	i = 0;

btn.onclick = function(){
	var interval = setInterval(function(){
		txt.textContent += myText[i]
		i++
		if(i===myText.length){
			clearInterval(interval)
		}
	},200)

}

