// ==================== Navbar ==================== 
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

// Function to open the menu
menuBtn.onclick = () => {
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled"); // Prevent scrolling on the main page
};

// Function to close the menu
cancelBtn.onclick = () => {
  body.classList.remove("disabled"); // Allow scrolling on the main page
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
};

// Scroll event to handle sticky navbar
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
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

  document.getElementById("scrollProgress").style.width = `${scrolled}%`;
}



// ==================== Hero ==================== 
const slides = document.querySelectorAll('.text-slide');
let currentSlide = 0;

function changeSlide() {
  // Remove active class from the current slide and add previous
  slides[currentSlide].classList.remove('active');
  slides[currentSlide].classList.add('previous');

  // Move to the next slide, or loop back to the first one
  currentSlide = (currentSlide + 1) % slides.length;

  // Add active class to the new slide
  slides[currentSlide].classList.add('active');

  // Remove the 'previous' class from the new active slide after transition
  slides.forEach(slide => slide.classList.remove('previous'));
}

// Start the slider; change slides every 4 seconds
setInterval(changeSlide, 5000);



// ==================== Showcase ==================== 
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