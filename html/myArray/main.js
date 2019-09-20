const ctx = document.querySelector("canvas").getContext('2d');

ctx.canvas.width = document.documentElement.clientWidth;
ctx.canvas.height = document.documentElement.clientHeight;

let ball = new Ball(new Vector2d(200, 300), 100);
let mouseVector = new Vector2d(0, 0);
let difference = new Vector2d(0, 0);

ball.draw(ctx);

window.addEventListener('click', (e)=>{
    mouseVector.dx = e.clientX;
    mouseVector.dy = e.clientY;
    difference.differenceVector(ball.position, mouseVector);
    
    if(difference.magnitude <= ball.radius){
        ball.position.dx += 50;
        ball.position.dy += 50;
        ball.draw(ctx);
    }
})