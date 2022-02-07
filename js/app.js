// Global variables
const [sections, navList] = [document.querySelectorAll('[data-nav]'), document.querySelector('#navbar__list')];

// build nav menu
function buildNav() {
  sections.forEach((section) => {
    const [item, link] = [document.createElement('li'), document.createElement('a'),];
    const [title, target] = [section.getAttribute('data-nav'), section.getAttribute('id')];
    navList.appendChild(item);
    item.appendChild(link);
    link.textContent = title;
    link.setAttribute("href", `#${target}`);
    link.setAttribute("data-nav", `${target}`);
    link.classList.add('menu__link');
  });
}

// set section class to active when in view 
function setActive() {
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    (rect.top <= 350 && rect.bottom >= 150) ? section.classList.add("your-active-class")
    : section.classList.remove("your-active-class");
  });
}

// scroll to section on click
function scroll (e) {
  e.preventDefault();
  if (e.target.dataset.nav) {
    document.getElementById(`${e.target.dataset.nav}`).scrollIntoView({behavior: "smooth", duration: 3000})    
  }
}

// event listeners
document.addEventListener('DOMContentLoaded', buildNav);
document.addEventListener('scroll', setActive);
navList.addEventListener('click', scroll);