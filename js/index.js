console.log("ur js is loaded correctly, proud of u");
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navigationTop");
var sticky = navbar.offsetTop;
function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }