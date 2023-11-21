const startmunite=10;
let time=startmunite*60;
const countdown=document.getElementById('countdown');

function count(){
    const minutes=Math.floor(time/60);
    let second=time % 60;
    second=second<10 ? '0' +second:second;
    countdown.innerHTML=`${minutes}:${second}`;
    time--;
}
setInterval(count,1000)