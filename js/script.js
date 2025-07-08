const closeBtn = document.getElementById("closeBanner");
const banner = document.getElementById("banner");

main();
function main(){
closeBtn.addEventListener("click", () => {
  banner.style.display = "none";
});
}

