let fact = document.getElementById('fact');
let factText = document.getElementById('factText');
let numberInput = document.getElementById('numberinput')
numberInput.addEventListener('input',getFactAjax)

 function getFactAjax (){
 	let number = numberInput.value;

 	let myRequest = new XMLHttpRequest()
	 
 	myRequest.open('GET',`http://numbersapi.com/${number}`,'true')
	 	myRequest.send()

 	myRequest.onload = function(){
 		if(this.status===200 && this.readyState===4 && number!=''){
 			fact.style.display = 'block';
 			factText.textContent = this.responseText
 		}else{
 			fact.style.display = 'none';
 		}

 	}
 }
//function getFactAjax(){
//	let number = numberInput.value;
//	fetch(`http://numbersapi.com/${number}`)
//	.then((result)=>{
//		return result.text()
//	}).then(result=>{
//		if(number.length!=0){  
//			console.log(number.length);
//			fact.style.display = 'block';
//			factText.textContent = result
//		}
//
//	}).catch((error)=>{
//		console.log(error);
//	})
//}