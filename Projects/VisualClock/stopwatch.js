
const stopwatch = document.querySelector(".stopwatch");
const alarm_date = document.querySelector("#alarmDate");
const btn_setalarm = document.querySelector("#setAlarm");
const btnstart = document.getElementById('startwatch');
const btnstop = document.getElementById('stop');
const btnReset = document.getElementById('Resetwatch');

let msec = 0;
let secs = 0;
let mins = 0;
let timerID = null;

window.addEventListener("load", () => {
    const savedTime = JSON.parse(localStorage.getItem("stopwatchTime"));
    if (savedTime) {
        msec = savedTime.msec;
        secs = savedTime.secs;
        mins = savedTime.mins;
        updateDisplay();
    }
});

btnstart.addEventListener("click", function () {
    alert("stopwatch started");
    if (timerID !== null) {
        clearInterval(timerID);
    }
    timerID = setInterval(startTimer, 10);
});

btnstop.addEventListener("click", function () {
    alert("stopwatch stopped");
    clearInterval(timerID);
});

btnReset.addEventListener("click", function () {
    alert("stopwatch cleared");
    clearInterval(timerID);
    msec = secs = mins = 0;
    updateDisplay();
    localStorage.removeItem("stopwatchTime");
});

function startTimer() {
    msec++;
    if (msec === 100) {
        msec = 0;
        secs++;
        if (secs === 60) {
            secs = 0;
            mins++;
        }
    }
    updateDisplay();

    localStorage.setItem("stopwatchTime", JSON.stringify({ msec, secs, mins }));
}

function updateDisplay() {
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;
    stopwatch.innerHTML = `${minsString}:${secsString}:${msecString}`;
}
