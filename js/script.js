const closeBtn = document.getElementById("closeBanner");
const banner = document.getElementById("banner");
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
//offer timer
const hoursBox =document.getElementById("hours");
const minutesBox =document.getElementById("minutes");
const secondsBox =document.getElementById("seconds");

const endTime= new Date();
endTime.setHours(23,59,59,1000);




main();
function main(){
closeBtn.addEventListener("click", () => {
    banner.style.display = "none";
});

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});


}
// timer function
function updateTime(){
    const now=new Date();
    const diff = endTime - now;

    if(diff <= 0){
        hoursBox.textContent ="00";
        minutesBox.textContent ="00";
        secondsBox.textContent ="00";
        clearInterval(countdown);
        return;
    }

    const hours = Math.floor(diff/(1000*60*60));
    const minutes = Math.floor((diff%(1000*60*60)) / (1000*60));
    const seconds = Math.floor((diff%(1000*60)) / 1000);
   
    hoursBox.textContent = hours < 10 ? "0" + hours : hours;
    minutesBox.textContent = minutes < 10 ? "0" + minutes : minutes;
    secondsBox.textContent = seconds < 10 ? "0" + seconds : seconds;


} 
const countdown = setInterval(updateTime , 1000);
updateTime();
