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
    links[i].style.color = active ? "var(--accent-dark)" : "";
  });
}

window.addEventListener("scroll", highlightNav);
highlightNav();

// 3. Scroll animation: fade in and slide up when something enters the screen.
//    To animate more things, add their CSS selector to this list.
const animated = document.querySelectorAll("h2, .section-note, .card, .row, .hero > *");
animated.forEach(el => el.classList.add("reveal"));

// Cards in the same grid appear one after another (0s, 0.1s, 0.2s)
document.querySelectorAll(".grid, .skills").forEach(grid => {
  [...grid.children].forEach((card, i) => {
    card.style.transitionDelay = (i % 3) * 0.1 + "s";
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);            // animate only once
    }
  });
}, { threshold: 0.15 });

animated.forEach(el => observer.observe(el));