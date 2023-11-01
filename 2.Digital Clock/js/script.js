const clk=document.querySelector('.clock');

function runClock(){
var time=new Date();
var hur=time.getHours();
var min=time.getMinutes();
var sec=time.getSeconds();
var txt='AM'

if(hur>12)
{
hur=hur-12;
txt='PM'
}
else if(hur==0)
{
hur=12;
txt='AM'
}
hur=hur<10?'0'+hur:hur;
min=min<10?'0'+min:min;
sec=sec<10?'0'+sec:sec;

clk.innerHTML=`${hur} : ${min} : ${sec} : ${txt}`;


}
runClock();
setInterval(runClock,1000);