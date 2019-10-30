const ctx = document.querySelector('canvas').getContext('2d');

ctx.canvas.width = document.documentElement.clientWidth;
ctx.canvas.height = document.documentElement.clientHeight; 

let arrow = new Arrow(new Vector2d(ctx.canvas.width/2, ctx.canvas.height/2), 0, 5, 255, 10, 10);
let mouse = new Vector2d(10, 10);

function Update() {
    requestAnimationFrame(Update);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    arrow.angle = Math.atan2((arrow.pos.dx - mouse.dx), (arrow.pos.dy - mouse.dy));
    arrow.draw(ctx);
}

Update()

window.addEventListener("mousemove", (e)=>{
    mouse.dx = e.clientX;
    mouse.dy = e.clientY;
});