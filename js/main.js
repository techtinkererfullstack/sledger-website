// selecting elements on section 5
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");
// selecting elements on section 6
const pricing_tabs = document.querySelectorAll(".pricing__tab");
const pricing_tabsContainer = document.querySelector(".pricing__tab-container");
const pricing_tabsContent = document.querySelectorAll(".pricing__content");
// selecting faq elements
const faq_container = document.querySelector(".faq-container");
const questions_container = document.querySelectorAll(".question-container");

console.log(faq_container);

// implementing tabes in section 5
tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");

  if (!clicked) return;

  tabs.forEach((tab) => tab.classList.remove("operations__tab--active"));
  tabsContent.forEach((content) =>
    content.classList.remove("operations__content--active")
  );

  clicked.classList.add("operations__content--active");
  clicked.classList.add("operations__tab--active");
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

// implementing tabes in section 6
pricing_tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".pricing__tab");

  if (!clicked) return;

  pricing_tabs.forEach((tab) => tab.classList.remove("pricing__tab--active"));
  pricing_tabsContent.forEach((content) =>
    content.classList.remove("pricing__content--active")
  );

  clicked.classList.add("pricing__content--active");
  clicked.classList.add("pricing__tab--active");
  document
    .querySelector(`.pricing__content--${clicked.dataset.tab}`)
    .classList.add("pricing__content--active");
});

// implementing faq revealing answers
faq_container.addEventListener("click", function (e) {
  const answer = e.target.nextElementSibling;
  // if (answer.classlist.contain("answer"))
  answer.classList.toggle("hidden");
});
