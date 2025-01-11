(() => {
  const openMenu = document.querySelector(".js-open-menu");
  const closeMenu = document.querySelector(".js-close-menu");
  const mobileMenu = document.querySelector(".js-menu-container");

  function toggleMenu() {
    const isMenuOpen =
      openMenu.getAttribute("aria-expanded") === true || "false";
    openMenu.setAttribute("aria--expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");

    const scrollLockMethod = !isMenuOpen
      ? "disableBodyScroll"
      : "enableBodyScroll";
  }

  openMenu.addEventListener("click", toggleMenu);
  closeMenu.addEventListener("click", toggleMenu);

  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open");
    openMenu.setAttribute("aria-expanded", false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
