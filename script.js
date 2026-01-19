// 1. Generate floating lights
for(let i=0; i<25; i++){
    let light = document.createElement('div');
    light.classList.add('light');
    light.style.left = Math.random()*100+'vw';
    light.style.animationDuration = (8+Math.random()*5)+'s';
    light.style.width = light.style.height = (5+Math.random()*8)+'px';
    document.body.appendChild(light);
}

// 2. Menu toggle for mobile
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active');
});

// 3. Landing page functionality
document.getElementById('enter-btn').addEventListener('click', function() {
    document.getElementById('landing-page').classList.add('hidden');
});

// Auto hide after 20 seconds
setTimeout(() => {
    document.getElementById('landing-page').classList.add('hidden');
}, 20000);

// 4. Back to Top functionality
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});