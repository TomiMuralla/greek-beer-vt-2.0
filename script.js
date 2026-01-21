let index = 0;

const slidesContainer = document.querySelector(".slides");
const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

function showSlide(i) {
  slidesContainer.style.transform = `translateX(-${i * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

let interval = setInterval(nextSlide, 5000);

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(nextSlide, 5000);
}

next.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  showSlide(index);
  resetInterval();
});

prev.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
  resetInterval();
});