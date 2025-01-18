const headingSwiper = new Swiper('.heading-swiper',{
  direction: "vertical",
  loop: "true",
  effect: "fade",
  speed: 1000,
  navigation:{
    prevEl:".header-swiper-button-prev",
    nextEl:".header-swiper-button-next"
  }
});

let nav = document.querySelector('nav');
let headingA = document.querySelector('nav .container a');
window.addEventListener("scroll", function() {
  if (scrollY > 0) {
    nav.style.backgroundColor = 'rgba(10,10,10,.8)';
    nav.style.height = '10vh';
    headingA.style.fontSize = '1rem';
    nav.style.transition = '0.5s';
    } else {
      nav.style.backgroundColor = 'rgba(10, 10, 10, 0)';
      nav.style.height = '15vh';
      headingA.style.fontSize = '1.75rem';
    }
  });
let section4ScrollRight = document.querySelector(".section4-swiper-button-next");
let section4ScrollLeft = document.querySelector(".section4-swiper-button-prev");
let section4Scroll = document.querySelector(".section4 .slide-content");
section4ScrollRight.addEventListener('click', () => {
  section4Scroll.scrollBy({
    left: 380,
    behavior: "smooth"
  });
})
section4ScrollLeft.addEventListener('click', () => {
  section4Scroll.scrollBy({
    left:-380,
    behavior: "smooth"
  });
})