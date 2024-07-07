const startClock = () => {
  // get date
  let date = new Date();
  // set date elements which is no need to dynamically update
  setDayofWeek(date.getDay());
  setDayofMonth(date.getDate());
  setMonthOfYear(date.getMonth());
  setYear(date.getFullYear());
  // update time every second
  setInterval(clockLogic, 1000);
};

// clock logic for set dynamic elements
const clockLogic = () => {
  let date = new Date();
  setHour(date.getHours());
  setMinute(date.getMinutes());
  setSecond(date.getSeconds());
  setBackground(date.getHours());
};

// settings time hours
const setHour = (time) => {
  hourContainer.innerHTML = String(time).padStart(2, "0");
};

// settings time minutes
const setMinute = (time) => {
  minuteContainer.innerHTML = String(time).padStart(2, "0");
};

// settings time seconds
const setSecond = (time) => {
  secondContainer.innerHTML = String(time).padStart(2, "0");
};

// settings day of week which depending number
const setDayofWeek = (time) => {
  switch (time) {
    case 0:
      dayofWeekText.innerHTML = "Sunday";
      break;

    case 1:
      dayofWeekText.innerHTML = "Monday";
      break;

    case 2:
      dayofWeekText.innerHTML = "Tuesday";
      break;

    case 3:
      dayofWeekText.innerHTML = "Wednesday";
      break;

    case 4:
      dayofWeekText.innerHTML = "Thursday";
      break;

    case 5:
      dayofWeekText.innerHTML = "Friday";
      break;

    case 6:
      dayofWeekText.innerHTML = "Saturday";
      break;

    default:
      dayofWeekText.innerHTML = "Error";
      break;
  }
};

// settings day of month
const setDayofMonth = (time) => {
  dayofMonthText.innerHTML = String(time).padStart(2, "0");
};

// settings month
const setMonthOfYear = (time) => {
  monthText.innerHTML = String(time).padStart(2, "0");
};

// settings year
const setYear = (time) => {
  yearText.innerHTML = time;
};

// setting dynamic background gradient for better look
const setBackground = (hour) => {
  if (hour < 6 || hour > 18) {
    titleText.innerHTML = "Good Night 🌙";
    bodyContent.style.background =
      "linear-gradient(to right, #4b79a1, #283e51)"; //"linear-gradient(90deg, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)";
  } else if (hour < 12) {
    titleText.innerHTML = "Good Morning ☀️";
    bodyContent.style.background =
      "linear-gradient(90deg, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)";
  } else if (hour < 18) {
    titleText.innerHTML = "Good Afternoon ☀️";
    bodyContent.style.background =
      "linear-gradient(to right, #f3904f, #3b4371);";
  }
};

// start clock
startClock();
