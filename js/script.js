const closeBtn = document.getElementById("closeBanner");
const banner = document.getElementById("banner");
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');


main();
function main(){
closeBtn.addEventListener("click", () => {
    banner.style.display = "none";
});

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});
}

