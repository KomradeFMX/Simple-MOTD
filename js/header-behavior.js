function nav() {
  var x = document.getElementById("nav");
  if (x.className === "header-container") {
    x.className += " responsive";
  } else {
    x.className = "header-container";
  }
}