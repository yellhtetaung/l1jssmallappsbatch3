var getmodal = document.getElementById("signupmodal");
var getbtnsignup = document.getElementById("btn-signup");
var getbtnclose = document.querySelector(".btn-close");
var getbtnfullscreen = document.getElementById("btn-fullscreen");
var getbtnclosescreen = document.getElementById("btn-closescreen");
var getform = document.querySelector("form");

getform.addEventListener("submit", function (e) {
  e.preventDefault();
});

getbtnsignup.addEventListener("click", function () {
  getmodal.style.display = "block";
});

getbtnclose.addEventListener("click", function () {
  getmodal.style.display = "none";
});

window.onclick = function (e) {
  if (e.target === getmodal) {
    getmodal.style.display = "none";
  }
};

var getde = document.documentElement;
// console.log(getde);

getbtnfullscreen.addEventListener("click", function () {
  if (getde.requestFullscreen) {
    getde.requestFullscreen();
  } else if (getde.msRequestFullscreen) {
    getde.msRequestFullscreen();
  } else if (getde.webkitRequestFullscreen) {
    getde.webkitRequestFullscreen();
  }

  localStorage.setItem("fullscreen", 1);

  getbtnclosescreen.style.display = "inline-block";

  fullscreen();
});

getbtnclosescreen.addEventListener("click", function () {
  localStorage.removeItem("fullscreen");

  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }

  localStorage.setItem("fullscreen", 0);

  getbtnclosescreen.style.display = "none";

  fullscreen();
});

function fullscreen() {
  if (localStorage.getItem("fullscreen") === "1") {
    document.addEventListener("keydown", function (e) {
      e.preventDefault();
    });
  }
}
