// main.js – small behaviours for the page.

// 1. Show the current year in the footer.
document.getElementById("year").textContent = new Date().getFullYear();

// 2. Highlight the nav link of the section currently on screen.
const links = document.querySelectorAll("nav ul a");
const sections = [...links].map(a => document.querySelector(a.getAttribute("href")));

function highlightNav() {
  const position = window.scrollY + 120;           // 120px offset for the sticky nav
  sections.forEach((section, i) => {
    const active = section.offsetTop <= position &&
                   section.offsetTop + section.offsetHeight > position;
    links[i].style.color = active ? "var(--accent)" : "";
  });
}

window.addEventListener("scroll", highlightNav);
highlightNav();
