var swiper = new Swiper(".news-swiper", {
  loop:true,
  autoplay:true,
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function navbar() {
  const nav = document.querySelector(".header-bottom");
  let scrolling = window.pageYOffset > 0;

  nav.classList.toggle("active", scrolling);
}

window.addEventListener("scroll", () => {
  navbar();
});

const application = document.querySelector('.application-btn');
const modal = document.querySelector('.application-modal');




const removes = () => {
  modal.classList.remove('active')
}

application.addEventListener('click', ()=>{
  modal.classList.toggle('active')
})

const dropdown1 = document.querySelector('.dropdown1');
const dropList1 = document.querySelector('#about-dropdown');

dropdown1.addEventListener('click', ()=>{
  dropdown1.classList.toggle('active')
})


const dropdown2 = document.querySelector('.dropdown2');
const dropList2 = document.querySelector('#school-dropdown');

dropdown2.addEventListener('click', ()=>{
  dropdown2.classList.toggle('active')
})
