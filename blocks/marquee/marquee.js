const marquee = document.getElementById("marquee");
 
let position = window.innerWidth;
const speed = 2;
 
function scrollText() {
    position -= speed;
 
    if (position < -marquee.offsetWidth) {
        position = window.innerWidth;
    }
 
    marquee.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(scrollText);
}
 
scrollText();
