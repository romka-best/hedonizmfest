const pages = ["/categories.html", "/infoCafe.html", "/contactCafe.html"];

const header = document.querySelector(".header");
const info = document.querySelector(".form_type_info");
const nextBtn = info.querySelector(".button_type_next");
const cancelBtn = info.querySelector(".button_type_cancel");

let prevScroll = window.scrollY;
let curScroll;

window.addEventListener("scroll", () => {
  curScroll = window.scrollY;
  const headerIsHidden = header.classList.contains("header_hidden");

  if (curScroll > prevScroll && !headerIsHidden) {
    header.classList.add("header_hidden");
  } else if (curScroll < prevScroll && headerIsHidden) {
    header.classList.remove("header_hidden");
  }

  prevScroll = curScroll;
});

nextBtn.addEventListener("click", function () {
  let current = location.pathname;
  let idx = pages.indexOf(current); // находим текущую страницу в массиве

  // переходим на следующую страницу
  if (idx > -1) {
    location.pathname = pages[++idx];
  }
});

cancelBtn.addEventListener("click", function () {
  let current = location.pathname;
  let idx = pages.indexOf(current); // находим текущую страницу в массиве

  // переходим на предыдущую страницу
  if (idx > -1) {
    location.pathname = pages[--idx];
  }
});