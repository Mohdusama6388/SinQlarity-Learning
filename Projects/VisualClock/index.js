const stopwatch=document.querySelector(".stopwatch")
const alarm_date=document.querySelector("#alarmDate");
const btn_setalarm=document.querySelector("#setAlarm");
const btnstart=document.getElementById('startwatch');
const btnstop=document.getElementById('stop');
const btnReset=document.getElementById('Resetwatch');
let msec = 0 ;
let secs = 0;
let mins = 0;
let timerID=null;
btnstart.addEventListener("click",function(){
	 
if(timerID!==null){
	clearInterval(timerID)
}
timerID=setInterval(startTimer,10);
});
btnstop.addEventListener("click",function(){
	clearInterval(timerID)
});
btnReset.addEventListener("click",function(){
	clearInterval(timerID)
	stopwatch.innerHTML=`00:00:00`;
	msec= secs= mins = 0;
});

function startTimer(){
	msec++;
	if(msec==100){
		msec=0;
		secs++
		if(secs==60){
			secs=0;
			mins++
		}
	}
	let msecString=msec<10?`0${msec}`:msec;
	let secsString=secs<10?`0${secs}`:secs;
	let minsString=mins<10?`0${mins}`:mins;
	stopwatch.innerHTML=`${minsString}:${secsString}:${msecString}`;


}
const Display=document.getElementById("time")
	const audio= new Audio ("alarm_clock.mp3");
	audio.loop= true;
	let alarmTime = null;
	let alarmTimeout= null;
function updateTime(){
const date =new Date();
const hour=date.getHours();
const minutes=date.getMinutes();
const seconds=date.getSeconds();
Display.innerText=hour+":"+minutes+":"+seconds;
}
function formatTime(time){
	if(time<10) return "0"+ time;
	return time;
}
setInterval(updateTime,1000);
function setAlarmTime(value){
	alarmTime = value;
};
function setAlarm(){
	alert("Alarm set" +alarmTime)

	if(alarmTime){
		const current=new Date();
		const timeToAlarm=new Date(alarmTime);
		if (timeToAlarm>current){
			const timeout=timeToAlarm.getTime()-current.getTime();
			alarmTimeout=setTimeout(function(){
				audio.play();
			} ,timeout)
		}
	}
}
function clearAlarm (){
	audio.pause();
	if (alarmTimeout){
		clearTimeout(alarmTimeout);
alert("Alarm cleared");
	}

}
