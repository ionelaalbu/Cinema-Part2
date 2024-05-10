//hidden  text
const revealBtn =document.querySelector('.article1-btn');
const hiddenContent = document.querySelector('.hidden-content');
function revealContent(){
    if(hiddenContent.classList.contains('article1-btn') )
     {
        hiddenContent.classList.remove('article1-btn')
     }else{
        hiddenContent.classList.add('article1-btn')
     }

}
revealBtn.addEventListener('click', revealContent)





// movie slider
var swiper = new Swiper(".swiper-container", {
   // Parameters
   slidesPerView: 3,
   spaceBetween: 30,
   loop: true,
   autoplay: {
     delay: 3000,
     disableOnInteraction: false,
   },
   effect: "coverflow",
   speed: 1000,
   coverflowEffect: {
     rotate: 50,
     stretch: 0,
     depth: 100,
     modifier: 1,
     slideShadows: true,
   },
   pagination: {
       el: ".swiper-pagination",
       clickable: true,
     },
     navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
     },
   });