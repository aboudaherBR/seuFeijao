const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  sideMenu.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

overlay.addEventListener("click", () => {
  menuBtn.classList.remove("active");
  sideMenu.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("menu-open");
});

const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const saibaMaisBtns = document.querySelectorAll(".btn");

saibaMaisBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.classList.add("active");
    document.body.classList.add("menu-open");
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
  document.body.classList.remove("menu-open");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
    document.body.classList.remove("menu-open");
  }
});