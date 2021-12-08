const pagesCafe = ["/categories.html", "/infoCafe.html"];
const pagesLecture = ["/categories.html", "/infoLecture.html"];
const pagesParty = ["/categories.html", "/infoParty.html"];
const pagesOther = ["/categories.html", "/infoOther.html"];

const header = document.querySelector(".header");
const categories = document.querySelector(".form_type_categories");
const nextBtn = categories.querySelector(".button_type_next");
const radioBtns = categories.querySelectorAll(".radio-group__button");

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

function pageSelect() {
  let radio = document.getElementsByName("radio_categories");
  let pages = [];
  for (let i = 0; i < radio.length; i++) {
    if (radio[0].checked) {
      pages = pagesCafe;
    } else if (radio[1].checked) {
      pages = pagesLecture;
    } else if (radio[2].checked) {
      pages = pagesParty;
    } else if (radio[3].checked) {
      pages = pagesOther;
    }
  }

  return pages;
}

function selectBtn() {
  nextBtn.classList.add("button_filled");
}

nextBtn.addEventListener("click", function (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы

  let pages = pageSelect(); // смотрим выбор пользователя
  let current = location.pathname;
  let idx = pages.indexOf(current); // находим текущую страницу в массиве

  // переходим на следующую страницу
  if (idx > -1) {
    location.pathname = pages[++idx];
  }
});

for (let i = 0; i < radioBtns.length; i++) {
  radioBtns[i].addEventListener("click", selectBtn);
}
