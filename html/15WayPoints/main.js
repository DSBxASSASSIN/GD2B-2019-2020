const ctx = document.querySelector("canvas").getContext("2d");

ctx.canvas.width = document.documentElement.clientWidth;
ctx.canvas.height = document.documentElement.clientHeight;

let waypoints = [];
let ammountOfWaypoints = 5;
for (let i = 0; i < ammountOfWaypoints; i++) {
    waypoints.push(new Ball(new Vector2d(random(ctx.canvas.width), random(ctx.canvas.height)), 20, false, 255, 0, 0));
}

let ball = new DPoint(new Vector2d(waypoints[0].pos.dx, waypoints[0].pos.dy), 15, new Vector2d(0,0), new Vector2d(0,0), 255, 255, 0);
let currentWayPoint = 1;

function Update(){
    requestAnimationFrame(Update);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    // drawing the balls and lines
    ctx.beginPath();
    ctx.moveTo(waypoints[0].pos.dx, waypoints[0].pos.dy);
    for(let i = 1; i < waypoints.length; i++){
        ctx.lineTo(waypoints[i].pos.dx, waypoints[i].pos.dy);
    }
    ctx.closePath();
    ctx.stroke();
    
    for(let i = 0; i < waypoints.length; i++){
        waypoints[i].draw(ctx);
    }
    
    // balls controller
    ball.vel.differenceVector(waypoints[currentWayPoint].pos, ball.pos);
    ball.vel.scalarMul(0.01);
    console.log(ball.vel.magnitude);
    if(ball.vel.magnitude < 0.1){
        currentWayPoint++;
        if(currentWayPoint > waypoints.length -1){
            currentWayPoint = 0;
        }
    }
    ball.draw(ctx);
    ball.update();
    ball.vel.draw(ctx, ball.pos, 10);
}

function random(max){
    return Math.floor(Math.random() * max);
}

Update();