// Global variables
const sections = document.querySelectorAll('[data-nav]');
const navList = document.querySelector('#navbar__list');

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
    const activeLink = navList.querySelector(`[data-nav=${section.id}]`);
    if (rect.top <= 150 && rect.bottom >= 150) {
      section.classList.add("your-active-class");
      activeLink.classList.add('active-link');
    } else {
      section.classList.remove("your-active-class");
      activeLink.classList.remove('active-link');
    }
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