const html =document.querySelector('html')
const  checkbox = document.querySelector('.switch')

checkbox.addEventListener('change',function(){
    html.classList.toggle('lightmode')
})


var slideLeft = {
    distance : '0%',
    origin : 'left',
    opacity: 0,
    duration: 1300,
    Delay:400
};

ScrollReveal().reveal('.container',slideLeft);


var slidebottom = {
    distance : '0%',
    origin : 'bottom',
    opacity: 0,
    duration: 1300,
    Delay:400
};

ScrollReveal().reveal('.projects',slidebottom);

var slideRight = {
    distance : '0%',
    origin : 'right',
    opacity: 0,
    duration: 1300,
    Delay:400
};

ScrollReveal().reveal('.skills',slideRight);



const menuItems = document.querySelectorAll('.nav-links a[href^="#"]');

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
});

function scrollToIdOnClick(event) {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const targetElement = document.querySelector(id);
    const to = targetElement.offsetTop;
    const duration = 1000; 

    smoothScrollTo(targetElement, to, duration);
}

function smoothScrollTo(element, to, duration) {
    const start = window.pageYOffset;
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

    function scrollStep(time) {
        const currentTime = 'now' in window.performance ? performance.now() : new Date().getTime();
        const elapsed = currentTime - startTime;
        const easeInOutCubic = easeInOutCubicProgress(elapsed / duration);
        window.scroll(0, start + (to - start) * easeInOutCubic);

        if (elapsed < duration) {
            requestAnimationFrame(scrollStep);
        }
    }

    function easeInOutCubicProgress(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }

    requestAnimationFrame(scrollStep);
}
