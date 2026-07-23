const header = document.querySelector("[data-header]");
const bannerClose = document.querySelector("[data-banner-close]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");

let lastY = window.scrollY;

window.addEventListener("scroll", () => {
  if (!header || header.classList.contains("is-dismissed")) return;
  const currentY = window.scrollY;
  header.classList.toggle("is-compact", currentY > 48 && currentY > lastY);
  if (currentY < 24 || currentY < lastY) header.classList.remove("is-compact");
  lastY = currentY;
}, { passive: true });

bannerClose?.addEventListener("click", () => {
  header?.classList.add("is-dismissed");
  document.documentElement.style.setProperty("--banner-h", "0px");
});

menuToggle?.addEventListener("click", () => {
  const open = mobileMenu?.classList.toggle("is-open") ?? false;
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});

mobileMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Open menu");
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape" || !mobileMenu?.classList.contains("is-open")) return;
  mobileMenu.classList.remove("is-open");
  menuToggle?.setAttribute("aria-expanded", "false");
  menuToggle?.setAttribute("aria-label", "Open menu");
  menuToggle?.focus();
});

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});
