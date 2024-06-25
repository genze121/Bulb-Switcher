const bulbOnButton = document.querySelector(".on");
const bulbOffButton = document.querySelector(".off");
const imgPic = document.querySelector("img");

bulbOnButton.addEventListener("click", e => {
  if (e.target.classList[0] === "on") {
    imgPic.src = "images/pic_bulbon.gif";
  }
});

bulbOffButton.addEventListener("click", e => {
  if (e.target.classList[0] === "off") {
    imgPic.src = "images/pic_bulboff.gif";
  }
});
