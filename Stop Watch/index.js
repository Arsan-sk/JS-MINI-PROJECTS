let secondsElapsed = 60
const clock = document.getElementById("time")

function paddString(value){
    return String(value).padStart(2, "0") // 2 padds of 0 will be added i.e. 00 

}

function Timer(){
    secondsElapsed++
    setTimer()
}

function setTimer(){
    const minutes =Math.floor(secondsElapsed / 60)
    const seconds = secondsElapsed %  60
    clock.innerHTML = `${paddString(minutes)}:${paddString(seconds)}`
}
function startClock(){
    interval = setInterval(Timer, 1000) // call function after each 1000 ms or 1s
}

function stopClock(){
    if(interval){
        clearInterval(interval)
    }
}


function resetClock(){
    stopClock()
    secondsElapsed = 0
    setTimer()

}