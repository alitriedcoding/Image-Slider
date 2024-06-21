const imgconEl = document.querySelector(".imag-container");
const forwardbtnEl = document.querySelector(".btn-forward");
const backbtnEl = document.querySelector(".btn-back");
const imgsEl = document.querySelectorAll("img");

let curentimage = 1;
var timout;

forwardbtnEl.addEventListener("click", () => {
  clearTimeout(timout);
  curentimage++;
  updateimage();
});
backbtnEl.addEventListener("click", () => {
  clearTimeout(timout);
  curentimage--;
  updateimage();
});

updateimage();

function updateimage() {
  if (curentimage > imgsEl.length) {
    curentimage = 1;
  } else if (curentimage < 1) {
    curentimage = imgsEl.length;
  }
  imgconEl.style.transform = `translateX(-${(curentimage - 1) * 300}px)`;
  timout = setTimeout(() => {
    curentimage++;
    updateimage();
  }, 2000);
}
