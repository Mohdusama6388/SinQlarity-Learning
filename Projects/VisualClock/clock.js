
 const hoursSpan = document.getElementById("hours");
    const minutesSpan = document.getElementById("minutes");
    const secondsSpan = document.getElementById("seconds");
    const ampmSpan = document.getElementById("ampm");
    const toggleButton = document.getElementById("toggle");

    let is12Hour = true;

    function updateTime() {
      const date = new Date();
      let hours = date.getHours();
      const minutes = formatTime(date.getMinutes());
      const seconds = formatTime(date.getSeconds());
      let ampm = "";

      if (is12Hour) {
        ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;
        hours = hours ? hours : 12; // 0 => 12
      }

      hoursSpan.innerText = formatTime(hours);
      minutesSpan.innerText = minutes;
      secondsSpan.innerText = seconds;
      ampmSpan.innerText = is12Hour ? ` ${ampm}` : "";
    }

    function formatTime(t) {
      return t < 10 ? "0" + t : t;
    }

    toggleButton.addEventListener("click", () => {
      is12Hour = !is12Hour;
      toggleButton.innerText = is12Hour ? "SWITCH TO 24-HOUR" : "SWITCH TO 12-HOUR";
      updateTime();
    });

    setInterval(updateTime, 1000);
    updateTime();