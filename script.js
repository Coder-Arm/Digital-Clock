const dateBox = document.getElementById('curr-date');
const timeBox = document.getElementById('curr-time'); 
const daysArr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const monthArr = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let date = new Date();
// let totalSec = Math.floor(date.getTime()/1000);
// console.log(date.getDate());
let currDay = daysArr[date.getDay()];
let currMonth = monthArr[date.getMonth()];
let currDate = date.getDate();
let currYear = date.getFullYear();

dateBox.innerText = `${currDay} , ${currMonth} ${currDate} , ${currYear}`;

let hrs = date.getHours();
let mins = date.getMinutes();
let secs = date.getSeconds();
let amPm = hrs >= 12 ? 'PM' : 'AM'

function timeUpdate(){
    timeBox.innerText = `${hrs.toString().padStart(2,'0')}  :  ${mins.toString().padStart(2,'0')}  :  ${secs.toString().padStart(2,'0')} ${amPm}`
    if(secs > 59){
        secs = 0;
        mins++;
    }
    else if(mins > 59 && secs == 0){
        mins = 0;
        hrs++;
    }
    else if(hrs > 23 && mins == 0){
        hrs = 0;
    }
}

setInterval(()=> {
    secs++;
    timeUpdate()
},1000);


