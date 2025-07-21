const Display = document.getElementById("time");
    const audio = new Audio("alarm_clock.mp3");
    audio.loop = true;

    let alarms = [];

    

    function addAlarm() {
      const input = document.getElementById("alarmTime").value;
      if (!input) return alert("Please select a valid date/time");

      const alarmTime = new Date(input);
      if (alarmTime <= new Date()) {
        alert("Please set a future time!");
        return;
     
      }

      const alarmId = Date.now(); 
      const timeout = setTimeout(() => {
        audio.play();
        alert("Alarm ringing for: " + alarmTime.toLocaleString());
      }, alarmTime - new Date());

      alarms.push({ id: alarmId, time: alarmTime, timeout });
      updateAlarmList();
      alert("Alarm set for: " + alarmTime.toLocaleString());
    }

    function updateAlarmList() {
      const list = document.getElementById("alarmList");
      list.innerHTML = "";

      alarms.forEach(alarm => {
        const li = document.createElement("li");
        li.innerText = alarm.time.toLocaleString();
        const btn = document.createElement("button");
        btn.innerText = "DELETE";
        btn.onclick = () => deleteAlarm(alarm.id);
		btn.style.color="#fff";
		btn.style.backgroundColor ="#142d4a";
		btn.style.padding=" 10px 20px 10px 20px"
		btn.style.fontSize="1.0rem";
		btn.style.height="30px"
		btn.style.marginLeft="10px"
		btn.style.border="none"
		btn.style.borderRadius="5px"
		btn.style.cursor="pointer";
		btn.style.transitionDuration="background-colour 0.3s"
        btn.style.marginBottom="10px"

        li.appendChild(btn);
        list.appendChild(li);
      });
    }

    function deleteAlarm(id) {
      const index = alarms.findIndex(alarm => alarm.id === id);
      if (index !== -1) {
        clearTimeout(alarms[index].timeout);
        alarms.splice(index, 1);
        updateAlarmList();
        alert("Alarm deleted");
      }
    }

    function clearAllAlarms() {

      alarms.forEach(alarm => clearTimeout(alarm.timeout));
      alarms = [];
      updateAlarmList();
      audio.pause();
      
      alarmTime.value=0;
      alert("all alarms cleared");
      
    }

    function checkAlarms(currentTime) {

    }
