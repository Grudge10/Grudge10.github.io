var typed = new Typed(".typing-hero", {
  strings: ["Jan Liam.", "A Web Developer.", "Creative.", "Cool."],
  typeSpeed: 70,
  backSpeed: 60,
  loop: true,
});

var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tabLinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabContents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

const menu_btn = document.querySelector('.hamburger');

menu_btn.addEventListener('click', function () {
  menu_btn.classList.toggle('is-active')
})