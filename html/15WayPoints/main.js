const ctx = document.querySelector("canvas").getContext("2d");

ctx.canvas.width = document.documentElement.clientWidth;
ctx.canvas.height = document.documentElement.clientHeight;

let waypoints = [];
let ammountOfWaypoints = 5;
for (let i = 0; i < ammountOfWaypoints; i++) {
    waypoints.push(new Ball(new Vector2d(random(ctx.canvas.width), random(ctx.canvas.height)), 20, false, 255, 0, 0));
}

let currentWayPoint = 1;
let target = waypoints[currentWayPoint];
let targetdis = new Vector2d(0,0);
let ball = new DPoint(new Vector2d(waypoints[0].pos.dx, waypoints[0].pos.dy), 15, new Vector2d(0,0), new Vector2d(0,0), 255, 255, 0);

function Update(){
    requestAnimationFrame(Update);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    ctx.beginPath();
    ctx.moveTo(waypoints[0].pos.dx, waypoints[0].pos.dy);
    for(let i = 1; i < waypoints.length; i++){
        ctx.lineTo(waypoints[i].pos.dx, waypoints[i].pos.dy);
    }
    ctx.closePath();
    ctx.stroke();
    
    // drawing the balls and lines
    for(let i = 0; i < waypoints.length; i++){
        waypoints[i].draw(ctx);
    }
    
    // balls controller
    targetdis.differenceVector(target.pos, ball.pos);
    if(targetdis.dx <= 0 || targetdis.dy <= 0 && currentWayPoint < waypoints.length){
        target = waypoints[currentWayPoint + 1];
    }else{
        currentWayPoint = 0;
        target = waypoints[currentWayPoint];
    }
    ball.vel.differenceVector(target.pos, ball.pos);
    
    ball.vel.scalarMul(0.04);
    ball.draw(ctx);
    ball.update();
    ball.vel.draw(ctx, ball.pos);
}

function random(max){
    return Math.floor(Math.random() * max);
}

Update();