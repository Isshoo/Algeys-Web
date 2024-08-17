const navList = document.querySelector(".nav-list");

document.querySelector("#nav-toggle").addEventListener("click", () => {
  navList.classList.toggle("active");
});

const navLink = document.querySelectorAll(".nav-link");

const linkAction = () => {
  navList.classList.remove("active");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));
