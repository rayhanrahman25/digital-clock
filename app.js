function digitalClock(){
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let timeFormat = 'AM';
 
  if(hour === 0){
   hour = 12;
  }
 if(hour>12){
   hour = hour - 12;
   timeFormat = 'PM';
 }
  hour = hour < 10 ? '0' + hour : hour;
  min = min < 10 ? '0' + min : min;
  sec = sec < 10 ? '0' + sec : sec;

  let totalTime = `${hour}:${min}:${sec}`;
  document.getElementById('time').innerText = totalTime;
  document.querySelector('small').innerText = timeFormat;
  setInterval(digitalClock,1000);
}
digitalClock();
