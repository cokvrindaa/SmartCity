const tomboldarkmode = document.getElementById("modegelap");
const navbar = document.getElementById("navbar");
const body = document.body;
const menu = document.getElementById("menu");
const dropdown = document.getElementById("dropdown");
const linkkotaka = document.getElementById("kotaklinka");
const linkkotakb = document.getElementById("kotaklinkb");
const linkkotakc = document.getElementById("kotaklinkc");

function klikmodegelap() {
  body.classList.add("styledarkmode");
  navbar.classList.add("styledarkmode");
  dropdown.classList.add("styledarkmode")
  dropdown.classList.add("styledarkmode")
  linkkotaka.classList.add("styledarkmode")
  linkkotakb.classList.add("styledarkmode")
  linkkotakc.classList.add("styledarkmode")

}
function klikmodeterang() {
  body.classList.remove("styledarkmode");
  navbar.classList.remove("styledarkmode");
  dropdown.classList.remove("styledarkmode")
  linkkotaka.classList.remove("styledarkmode")
  linkkotakb.classList.remove("styledarkmode")
  linkkotakc.classList.remove("styledarkmode")
}
menu.addEventListener("click", function(){
  if (dropdown.style.display === 'none' ) {
    dropdown.style.display = 'block';
  } else {
    dropdown.style.display = 'none';
  }
})
