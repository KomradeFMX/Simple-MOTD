function nav() {
  if(document.getElementById("reactive-nav").style.display === "flex") {
    document.getElementById("reactive-nav").style.display = "none";
  } else {
    document.getElementById("reactive-nav").style.display = "flex";
  }
}

window.onresize = function onresize() {
  if(window.innerWidth > 600) {
    document.getElementById("reactive-nav").style.display = "none";
  }
};
