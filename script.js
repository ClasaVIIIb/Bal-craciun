// Fade-in detalii
const btn = document.getElementById("detaliiBtn");
const detalii = document.getElementById("detalii");

btn.addEventListener("click", () => {
    detalii.classList.toggle("show");
});

// Zăpadă animată cu canvas
const canvas = document.getElementById("snowCanvas");
const ctx = canvas.getContext("2d");

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const numFlakes = 150;
const flakes = [];

for(let i = 0; i < numFlakes; i++){
    flakes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 4 + 1,
        speed: Math.random() * 1 + 0.5
    });
}

function drawFlakes() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "white";
    ctx.beginPath();
    for(let i = 0; i < flakes.length; i++){
        const f = flakes[i];
        ctx.moveTo(f.x, f.y);
        ctx.arc(f.x, f.y, f.radius, 0, Math.PI*2, true);
    }
    ctx.fill();
    moveFlakes();
}

function moveFlakes(){
    for(let i = 0; i < flakes.length; i++){
        const f = flakes[i];
        f.y += f.speed;
        f.x += Math.sin(f.y * 0.01); // puțin balans
        if(f.y > height){
            f.y = -f.radius;
            f.x = Math.random() * width;
        }
    }
}

function animate() {
    drawFlakes();
    requestAnimationFrame(animate);
}

animate();

// Ajustare canvas la resize
window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
});
