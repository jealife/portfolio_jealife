const hamburgerToggler = document.querySelector(".hamburger")
const navLinksContainer = document.querySelector(".navlinks-container");

const toggleNav = () => {
  hamburgerToggler.classList.toggle("open")

  const ariaToggle = hamburgerToggler.getAttribute("aria-expanded") === "true" ?  "false" : "true";
  hamburgerToggler.setAttribute("aria-expanded", ariaToggle)

  navLinksContainer.classList.toggle("open")
}
hamburgerToggler.addEventListener("click", toggleNav)

new ResizeObserver(entries => {
  if(entries[0].contentRect.width <= 900){
    navLinksContainer.style.transition = "transform 0.3s ease-out"
  } else {
    navLinksContainer.style.transition = "none"
  }
}).observe(document.body)

//Record how many pixels are scrolled vertically
let scrollpos = window.scrollY

const header = document.querySelector("nav")

//How many pixels you need to scroll to add a class. You can change the value
const scrollChange = 1

//The function that will add the class
const add_class_on_scroll = () => header.classList.add("fixed")

//Tracking a "scroll" event
window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

//If we scrolled more than we specified in the scrollChange variable, the add class function is executed
  if (scrollpos >= scrollChange) { add_class_on_scroll() }
  else{
    header.classList.remove('fixed');
  }
})




// const nav = document.querySelector('nav');
// let navTop = nav.offsetTop;

// function fixedNav() {
//   if (window.scrollY > navTop) {    
//     nav.classList.add('fixed');
//   } else {
//     nav.classList.remove('fixed');    
//   }
// }