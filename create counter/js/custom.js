let seconds = 190,
	countDiv = document.getElementById('countdown'),
	countDown = setInterval(secondPass(),1000);


function secondPass(){
	let minutes = Math.floor(seconds / 60),
		remSecond = seconds % 60 ;
	remSecond<10 ? remSecond = "0" + remSecond :false
	countDiv.innerHTML = minutes + ":" + remSecond
	if(seconds>0){
		seconds --
	}else{
		clearInterval(countDown) //stop countdown timer
	}
}	
function timer(time,stop){
    let min = Math.floor(time/60);
    let seconds = time % 60;
    seconds<10 ? seconds = "0" + seconds :false
    document.querySelector('.container-info .timer span').innerHTML = `${min}:${seconds}`
    if(time>0){
        time --
        console.log(time)
    }else{
        clearInterval(stop)
    }

}