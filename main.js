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
*/
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