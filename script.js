document.addEventListener('DOMContentLoaded', function () {

    document.body.style.overflow = 'hidden';
document.getElementById('splash-screen').classList.remove('hidden');

setTimeout(function () {
    document.getElementById('splash-screen').classList.add('hidden');
    document.body.style.overflow = '';
}, 2500);

    let title = document.getElementById('title');
    let text = title.textContent;

    let newText = Array.from(text).map(function (char, index) {
        return '<span class="custom-char"><a href="https://github.com/selimAP" target="_blank">' + char + '</a></span>';
    }).join('');

    title.innerHTML = newText;

    const swup = new Swup();



const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#fff"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.4;
    y += (nextCircle.y - y) * 0.4;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();
});






