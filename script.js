window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  document.querySelector(".loader").classList.add("loader--hidden");

  document.querySelector(".loader").addEventListener("transitioned", () => {
    document.body.removeChild(document.querySelector(".loader"));
  });
});

let progress = document.getElementById("progressbar");
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = progressHeight + "%";
};

let image = document.querySelector(".hero");

window.addEventListener("scroll", function () {
  let value = 1 + window.scrollY / -600;
  image.style.opacity = value;
});

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

var hamburger = document.querySelector(".hamb");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

hamburger.addEventListener("click", function () {
  this.classList.toggle("click");
  navlist.classList.toggle("open");
});
