const header = document.querySelector("[data-header]");
const bannerClose = document.querySelector("[data-banner-close]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const mobileOverlay = document.querySelector("[data-mobile-overlay]");
const mobileClose = document.querySelector("[data-mobile-close]");

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

const setMenu = (open) => {
  if (!mobileMenu) return;
  mobileMenu.classList.toggle("is-open", open);
  mobileOverlay?.classList.toggle("is-open", open);
  document.body.classList.toggle("is-locked", open);
  menuToggle?.setAttribute("aria-expanded", String(open));
  menuToggle?.setAttribute("aria-label", open ? "Close menu" : "Open menu");
};

menuToggle?.addEventListener("click", () => {
  const open = !mobileMenu?.classList.contains("is-open");
  setMenu(open);
});

mobileClose?.addEventListener("click", () => setMenu(false));

mobileOverlay?.addEventListener("click", () => setMenu(false));

mobileMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape" || !mobileMenu?.classList.contains("is-open")) return;
  setMenu(false);
  menuToggle?.focus();
});

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});
