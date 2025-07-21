

const hour = document.getElementById("hour");
const minute = document.getElementById("Min");
const second = document.getElementById("Sec");
const Display1 = document.getElementById("Disp");
const Start1 = document.getElementById("btnstart1");
const Reset1 = document.getElementById("btnreset1");
const stop1 = document.getElementById("btnstop1");

let interval = null;
let total = 0;

const timer = () => {
    if (total >= 0) {
        const hr = Math.floor(total / 3600);
        const mt = Math.floor((total % 3600) / 60);
        const sc = total % 60;

        hour.value = hr;
        minute.value = mt;
        second.value = sc;

        localStorage.setItem("totalTime", total); 
        total--;
    } else {
        clearInterval(interval);
        Display1.innerText = "Time over!!";
        localStorage.removeItem("totalTime");
        localStorage.removeItem("isRunning");
    }
};

const totalvalue = () => {
    total = Number(hour.value) * 3600 + Number(minute.value) * 60 + Number(second.value);
};

Start1.addEventListener('click', () => {
    clearInterval(interval);
    totalvalue();
    if (total > 0) {
        interval = setInterval(timer, 1000);
        Display1.innerText = "Timer started";


        localStorage.setItem("totalTime", total);
        localStorage.setItem("isRunning", "true");
    } else {
        Display1.innerText = "Please enter a valid time";
    }
});

Reset1.addEventListener('click', () => {
    clearInterval(interval);
    hour.value = "";
    minute.value = "";
    second.value = "";
    Display1.innerText = "Timer Reset";

    
    localStorage.removeItem("totalTime");
    localStorage.removeItem("isRunning");
});

stop1.addEventListener('click', () => {
    alert("timer stopped");
    clearInterval(interval);
    Display1.innerText = "Timer stopped";

    
    localStorage.setItem("totalTime", total);
    localStorage.setItem("isRunning", "false");
});

window.addEventListener("load", () => {
    const savedTime = localStorage.getItem("totalTime");
    const isRunning = localStorage.getItem("isRunning");

    if (savedTime !== null) {
        total = Number(savedTime);

        const hr = Math.floor(total / 3600);
        const mt = Math.floor((total % 3600) / 60);
        const sc = total % 60;

        hour.value = hr;
        minute.value = mt;
        second.value = sc;

        if (isRunning === "true" && total > 0) {
            interval = setInterval(timer, 1000);
            Display1.innerText = "Resumed after refresh";
        } else {
            Display1.innerText = "Paused (can resume)";
        }
    }
});
