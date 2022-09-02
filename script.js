const sidebar = document.querySelector(".sidebar");
const showSidebar = document.querySelector(".show_sidebar");
const toggle = document.querySelectorAll(".toggle");

toggle.forEach((toggle) =>
  toggle.addEventListener("click", function () {
    sidebar.classList.toggle("show_sidebar");
  })
);
