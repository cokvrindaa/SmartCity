const tomboldarkmode = document.getElementById("modegelap");
const navbar = document.getElementById("navbar");
const body = document.body;
const menu = document.getElementById("menu");
const dropdown = document.getElementById("dropdown");
function klikmodegelap() {
  body.classList.add("styledarkmode");
  navbar.classList.add("styledarkmode");
}
function klikmodeterang() {
  body.classList.remove("styledarkmode");
  navbar.classList.remove("styledarkmode");
}

menu.addEventListener("click", function(){
  dropdown.style.display = "block"
})
