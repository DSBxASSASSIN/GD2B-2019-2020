const ctx = document.querySelector("canvas").getContext('2d');

ctx.canvas.width = document.documentElement.clientWidth;
ctx.canvas.height = document.documentElement.clientHeight;

let ball = new Ball(new Vector2(200, 300), 100);
let mouseVector = new Vector2(0, 0);
let difference = new Vector2(0, 0);

ball.draw(ctx);

window.addEventListener('click', (e)=>{
    mouseVector.dx = e.clientX;
    mouseVector.dy = e.clientY;
    difference.differenceVector(ball.pos, mouseVector);
    
    if(difference.magnitude <= ball.radius){
        ball.colorChange(getRandom(255), getRandom(255), getRandom(255));
        ball.draw(ctx);
    }
})

function getRandom(max){
    return Math.floor(Math.random() * max);
}