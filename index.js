window.onscroll = function () {
  myFunction();
};

var header = document.querySelector(".navbar_sticky");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

const secondSection = document.querySelector(".second_section_center_btn");
const btn = document.getElementById("showdiv");

btn.addEventListener("click", function () {
  secondSection.classList.add("active");
  console.log("clcik");
});
