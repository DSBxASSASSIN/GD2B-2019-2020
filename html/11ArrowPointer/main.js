const ctx = document.querySelector('canvas').getContext('2d');

ctx.canvas.width = document.documentElement.clientWidth;
ctx.canvas.height = document.documentElement.clientHeight; 

let arrow = new Arrow(new Vector2(ctx.canvas.width/2, ctx.canvas.height/2), 0, 3, 255, 10, 10);
let mouse = new Vector2(10, 10);

function Update() {
    requestAnimationFrame(Update);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    arrow.angle = Math.atan2((mouse.dy - arrow.pos.dy), ( mouse.dx - arrow.pos.dx));
    arrow.draw(ctx); 

    ctx.beginPath()
    dottedLine(ctx, arrow.pos.dx, arrow.pos.dy, mouse.dx, arrow.pos.dy, 20, 20);
    dottedLine(ctx, arrow.pos.dx, arrow.pos.dy, arrow.pos.dx, mouse.dy, 20, 20);
    ctx.moveTo(mouse.dx, mouse.dy);
    ctx.lineTo(mouse.dx, arrow.pos.dy);
    ctx.moveTo(mouse.dx, mouse.dy);
    ctx.lineTo(arrow.pos.dx, mouse.dy);
    ctx.moveTo(mouse.dx, mouse.dy);
    ctx.lineTo(arrow.pos.dx, arrow.pos.dy);
    ctx.stroke();
    ctx.closePath()
}

Update()

window.addEventListener("mousemove", (e)=>{
    mouse.dx = e.clientX;
    mouse.dy = e.clientY;
});

function dottedLine(ctx, x_start, y_start, x_end, y_end, dash, spaces) {
    ctx.setLineDash([dash, spaces]);
    ctx.beginPath();
    ctx.moveTo(x_start, y_start);
    ctx.lineTo(x_end, y_end);
    ctx.stroke();
    ctx.closePath();
}