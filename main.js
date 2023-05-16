const openNav = document.getElementById("bar");
const closeNav = document.getElementById("close");

openNav.addEventListener("click", () => {
  document.getElementById("mySidenav").style.right = 0;
});

closeNav.addEventListener("click", () => {
  document.getElementById("mySidenav").style.right = "-350px";
});
