const ctx = document.querySelector('canvas').getContext('2d');

ctx.canvas.width = document.documentElement.clientWidth;
ctx.canvas.height = document.documentElement.clientHeight;

let balls = [];

for(let j = 0; j < 100; j++){
    let ball = new DPoint(new Vector2d(Random(ctx.canvas.width), Random(ctx.canvas.height)), 15, new Vector2d(7, 8), new Vector2d(0,1), Random(255), Random(255), Random(255),);
    balls.push(ball);
}

function Update(){
    requestAnimationFrame(Update);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    for(let i = 0; i < balls.length; i++){
        balls[i].draw(ctx);
        balls[i].update();
        balls[i].vel.draw(ctx, balls[i].pos);
        if(balls[i].pos.dy >= ctx.canvas.height + 20){
            balls[i].pos.dy = 100;
            balls[i].pos.dx = Random(ctx.canvas.width);
            balls[i].vel = new Vector2d(7,8);
        }
        
    }
}

function Random(max){
    return Math.floor(Math.random() * max);
}

Update()