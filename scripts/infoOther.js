const pages = ["/categories.html", "/infoOther.html", "/contactOther.html"];

const header = document.querySelector(".header");
const info = document.querySelector(".form_type_info");
const form = document.querySelector('.form__inputs');
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

form.addEventListener("submit", function (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы
  location.href = pages[2];
});

cancelBtn.addEventListener("click", function () {
  location.href = pages[0];
});
