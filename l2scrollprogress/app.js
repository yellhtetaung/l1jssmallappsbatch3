var getprogressbar = document.getElementById("progress-bar");

window.onscroll = function () {
  scrollpoint();
};

function scrollpoint() {
  // console.log("i am working");

  // scrolltop
  // project height
  // current height

  // project height - current height
  // scrolltop * 100 / (project height - current height)

  var getscrolltop = document.documentElement.scrollTop; // windowheight
  // console.log(getscrolltop);
  var getscorllheight = document.documentElement.scrollHeight; // projectheight
  // console.log(getscorllheight);
  var getclientheight = document.documentElement.clientHeight; // currentheight
  // console.log(getclientheight);

  var calcheight = getscorllheight - getclientheight;
  // console.log(calcheight);

  // var getfinal = Math.floor((getscrolltop * 100) / calcheight);
  // console.log(getfinal);

  var getfinal = Math.round((getscrolltop / calcheight) * 100);

  getprogressbar.style.width = `${getfinal}%`;
}

function printme() {
  window.print();
}
