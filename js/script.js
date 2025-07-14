const closeBtn = document.getElementById("closeBanner");
const banner = document.getElementById("banner");
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
//offer timer
const hoursBox =document.getElementById("hours");
const minutesBox =document.getElementById("minutes");
const secondsBox =document.getElementById("seconds");
//question
const questionItems = document.querySelectorAll(".q-item");

questionItems.forEach(item => {
    const question = item.querySelector('.q-question');
    const toggleBtn = item.querySelector('.q-btn');
    const toggleIcon = toggleBtn.querySelector("i");

    let answerBox = null;

    question.addEventListener('click', () => {
        if (!answerBox) {
        const answerText = question.getAttribute('data-answer');

        answerBox = document.createElement("div");
        answerBox.className = "bg-purple-500 p-8 my-2 shadow-xl border border-gray-300 w-full";
        const para = document.createElement("p");
        para.textContent = answerText;
        answerBox.appendChild(para);
        item.appendChild(answerBox);

        toggleIcon.classList.add('rotate-90');
        } else {
        answerBox.remove();
        answerBox = null;

        toggleIcon.classList.toggle('rotate-90');
        }
    });
});

//

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

//swiper
document.addEventListener('DOMContentLoaded', () => {
  const swiper1 = new Swiper('.swiper-category', {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 20,
    navigation: {
      nextEl: '.custom-next',
      prevEl: '.custom-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });
  const swiper2 = new Swiper('.swiper-comment', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: '.custom-next',
      prevEl: '.custom-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });
    const swiper3 = new Swiper('.swiper-offer', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });
  const swiper4 = new Swiper('.swiper-moreviwe', {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });
    const swiper5 = new Swiper('.swiper-best', {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });
  const swiper6 = new Swiper('.swiper-company', {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });
});

