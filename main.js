
const time=document.querySelector('.watch .time')
const start_btn=document.getElementById('start')
const stop_btn=document.getElementById('stop')
const reset_btn=document.getElementById('reset')

let counter=0;
let interval=null;

//add event listener on control buttons
start_btn.addEventListener('click',start)
stop_btn.addEventListener('click',stop)
reset_btn.addEventListener('click',reset)







function timer(){
    counter++;
    let secs=counter%60;
    let hrs=Math.floor(counter/3600);
    let mins=Math.floor((counter-(hrs*3600))/60);
      if(secs<10){
          secs='0'+secs
      }
      if(mins<10){
        mins='0'+mins
    }

    if(hrs<10){
        hrs='0'+hrs
    }
    time.innerText=`${hrs}:${mins}:${secs}`
}

function start(){
    if(interval){
        return;
    }
    interval=setInterval(timer,1000);


}
function stop(){
    clearInterval(interval)  
    interval=null
}

function reset(){
    stop();
    counter=0;
    time.innerText='00h:00m:00s';
}