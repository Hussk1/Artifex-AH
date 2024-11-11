// ==================== Navbar ==================== 
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

  toggle.addEventListener('click', () => {
    // Add show-menu class to nav menu
    nav.classList.toggle('show-menu')

    // Add show-icon to show and hide the menu icon
    toggle.classList.toggle('show-icon')
  })
}

const navbarElements = document.querySelectorAll('.header, .nav__logo, .nav__burger, .nav__close, .nav__link, .dropdown__link, .nav__list');
window.addEventListener('scroll', () => {
  if (window.scrollY > 75) {
    navbarElements.forEach(element => {
      element.classList.add('scrolled');
    });
  } else {
    navbarElements.forEach(element => {
      element.classList.remove('scrolled');
    });
  }
})

showMenu('nav-toggle', 'nav-menu')



// ==================== Hero ==================== 
document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.hero-item');
  let currentIndex = 0;
  const totalItems = items.length;

  // Function to show the next item
  function showNextItem() {
      // Hide the current item
      items[currentIndex].classList.remove('active');
      items[currentIndex].classList.add('hero-item-exit');

      // Calculate the next index
      currentIndex = (currentIndex + 1) % totalItems;

      // Wait for the exit animation to finish before showing the next item
      setTimeout(() => {
          // Show the next item
          items[currentIndex].classList.remove('hero-item-exit');
          items[currentIndex].classList.add('active');
      }, 1000); // Wait for the duration of the exit animation
  }

  // Initially set the first item to be active
  items[0].classList.add('active');

  // Set an interval to show the next item every 5 seconds
  setInterval(showNextItem, 5000);
});



// ==================== Scroll back to top ==================== 
window.onscroll = function () { scrollFunction(); updateScrollProgress(); };

function scrollFunction() {
  const topBtn = document.getElementById("topBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topBtn.style.display = "block";
    topBtn.style.opacity = 1;
  } else {
    topBtn.style.opacity = 0;
    setTimeout(() => {
      if (topBtn.style.opacity == 0) {
        topBtn.style.display = "none";
      }
    }, 300);
  }
}

function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateScrollProgress() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
  const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;

  //document.getElementById("scrollProgress").style.width = `${scrolled}%`;

}

























const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
