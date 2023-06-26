const carouselslide = document.querySelector('.carousel-slide1');
const carouselImages = document.querySelectorAll('.carousel-slide1 img');
let viewportHeight = window.innerHeight;
let viewportWidth = window.innerWidth;

//Buttons
const prevBtn = document.querySelector('#PrevBtn');
const nextBtn = document.querySelector('#NextBtn');

//Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselslide.style.transform = 'translateX(' + (((-size * counter) / viewportWidth) * 100) + 'vw)';

//Button Listeners

nextBtn.addEventListener('click', ()=>{
    if (counter >= carouselImages.length - 1) return;
    carouselslide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselslide.style.transform = 'translateX(' + (((-size * counter) / viewportWidth) * 100) + 'vw)';
});

PrevBtn.addEventListener('click', ()=>{
    if (counter <= 0) return;
    carouselslide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carouselslide.style.transform = 'translateX(' + (((-size * counter) / viewportWidth) * 100) + 'vw)';
});

carouselslide.addEventListener('transitionend', ()=>{
    if (carouselImages[counter].id==='lastClone'){
        carouselslide.style.transition = 'none';
        counter = carouselImages.length - 2;
        carouselslide.style.transform = 'translateX(' + (((-size * counter) / viewportWidth) * 100) + 'vw)';
    }
    if (carouselImages[counter].id==='firstClone'){
        carouselslide.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselslide.style.transform = 'translateX(' + (((-size * counter) / viewportWidth) * 100) + 'vw)';
    }
});