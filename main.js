document.addEventListener("DOMContentLoaded", function () {
  const navbarLinks = document.querySelectorAll(".navbar__menu__item");

  navbarLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const activeLink = document.querySelector(".navbar__menu__item.active");
      if (activeLink) {
        activeLink.classList.remove("active");
      }
      this.classList.add("active");
    });
  });
});
