const tomboldarkmode = document.getElementById("modegelap");
const navbar = document.getElementById("navbar");
const body = document.body;
function klikmodegelap() {
  body.classList.add("styledarkmode");
  navbar.classList.add("styledarkmode");
}
function klikmodeterang() {
  body.classList.remove("styledarkmode");
  navbar.classList.remove("styledarkmode");
}
