/*let offset = 0;
const slides = document.querySelector('.slider-wrapper');

let prev = document.querySelector('.btn-prev');
if (prev) {
    prev.addEventListener('click', function () {
        offset = offset - 100;
        if (offset <= -100) {
            offset = 0;
        }
        slides.style.left = -offset + '%'
    });
}

let next = document.querySelector('.bnt-next');
if (next) {
    next.addEventListener('click', function plustimes() {
        offset = offset + 100;
        if (offset > 100) {
            offset = 0;
        }
        slides.style.left = -offset + '%'
        
    });
}
 
let offset = 0;
const slides = document.querySelector('.slider-wrapper');
let next = document.querySelector('.bnt-next');
function timeslide(){
    offset = offset + 100;
        if (offset > 100) {
            offset = 0;
        }
        slides.style.left = -offset + '%'
}

next.onclick = timeslide;
setInterval(timeslide, 5500);

let prev = document.querySelector('.btn-prev');
function slideout(){
    offset = offset + 100;
        if (offset > 100) {
            offset = 0;
        }
        slides.style.left = -offset + '%'
}
prev.onclick = slideout;

let offset = 0;
const slides = document.querySelector('.slider-wrapper');
function timeslide(){
    offset = offset + 100;
        if (offset > 100) {
            offset = 0;
        }
        slides.style.left = -offset + '%'
}
setInterval(timeslide, 5500); 
document.querySelectorAll('.traks').onmouseenter = () => {
    document.querySelectorAll('.traks').style.transform = 'scale(1.1)';
}



const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animONscroll);
    function animONscroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if(animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('_active');
            } else {
                animItem.classList.remove('_active');
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    animONscroll();

} */

$(function () {

    $('.slider-wrapper').slick({
        arrows: false,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 4500,
        pauseOnHover: true,
    })

})

new WOW().init();

document.addEventListener('DOMContentLoaded', () => {
    const scrollItems = document.querySelectorAll('.scroll-item')
    const scrollAnimation = () => {
        let windowCenter = (window.innerHeight / 2) + window.scrollY;
        scrollItems.forEach(el => {
            let scrollOffset = el.offsetTop + el.offsetHeight / 2;
            if (windowCenter >= scrollOffset) {
                el.classList.add('animation-class');
                
            } else {
                el.classList.remove('animation-class');
                
            }
        });

    };
    scrollAnimation();
    window.addEventListener('scroll', () => {
        scrollAnimation();
    });
});
    
    
