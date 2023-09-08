function currentUTCTime() {
  const utcTimeElement = document.getElementById('time');
  const currentDate = new Date();
  const utcTimeString = currentDate.toISOString().split('T')[1].split('.')[0];
  utcTimeElement.textContent = `Current UTC Time: ${utcTimeString}`;
}
document.addEventListener('DOMContentLoaded', currentUTCTime);
setInterval(currentUTCTime, 1000);

function dayOfWeek() {
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const currentDate = new Date();
  const dayIndex = currentDate.getDay();
  const dayName = daysOfWeek[dayIndex];
  const dayOfWeekElement = document.getElementById('day');
  dayOfWeekElement.textContent = `Today is ${dayName}`;
}
document.addEventListener('DOMContentLoaded', dayOfWeek);
