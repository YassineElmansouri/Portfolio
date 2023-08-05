//mobile menu
const burgericon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgericon.addEventListener('click', ()=>{
    navbarMenu.classList.toggle('is-active')
    navbarMenu.classList.toggle('has-text-centered')
})


// Smooth scrolling function
function smoothScroll(target, duration) {
    var targetElement = document.querySelector(target);
    var targetPosition = targetElement.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Easing function
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Add event listeners to smooth scroll on click
var links = document.querySelectorAll('nav a');
links.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        var target = link.getAttribute('href');
        var duration = 1000; // Set the duration (in milliseconds) for smooth scrolling
        smoothScroll(target, duration);
    });
});

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
        else{
            entry.target.classList.remove('show')
        }
    })
})


const hiddenElement = document.querySelectorAll('.hidden')
hiddenElement.forEach((el)=>observer.observe(el))