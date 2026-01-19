// 1. Generate floating lights
for(let i=0; i<25; i++){
    let light = document.createElement('div');
    light.classList.add('light');
    light.style.left = Math.random()*100+'vw';
    light.style.animationDuration = (8+Math.random()*5)+'s';
    light.style.width = light.style.height = (5+Math.random()*8)+'px';
    document.body.appendChild(light);
}

// 2. Logic for Lunging (Landing) Page
window.addEventListener('load', function() {
    const landingPage = document.getElementById('landing-page');
    
    // Wait for 20 seconds (20000 milliseconds)
    setTimeout(function() {
        landingPage.classList.add('hidden');
    }, 20000); 
});