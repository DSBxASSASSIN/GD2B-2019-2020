const ctx = document.querySelector("canvas").getContext("2d");

ctx.canvas.width = document.documentElement.clientWidth;
ctx.canvas.height = document.documentElement.clientHeight;

let waypoints = [];
let ammountOfWaypoints = 5;
for (let i = 0; i < ammountOfWaypoints; i++) {
    waypoints.push(new Ball(new Vector2d(random(ctx.canvas.width), random(ctx.canvas.height)), 20, false, 255, 0, 0));
}

let ball = new DPoint(new Vector2d(waypoints[0].pos.dx, waypoints[0].pos.dy), 15, new Vector2d(0,0), new Vector2d(0,0), 255, 255, 0, 1, 1);
let ball2 = new DPoint(new Vector2d(waypoints[1].pos.dx, waypoints[1].pos.dy), 15, new Vector2d(0,0), new Vector2d(0,0), 255, 255, 0, 1, 2);
let ball3 = new DPoint(new Vector2d(waypoints[2].pos.dx, waypoints[2].pos.dy), 15, new Vector2d(0,0), new Vector2d(0,0), 255, 255, 0, 1, 3);
let ball4 = new DPoint(new Vector2d(waypoints[3].pos.dx, waypoints[3].pos.dy), 15, new Vector2d(0,0), new Vector2d(0,0), 255, 255, 0, 1, 4);

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
    
    
    ball.followWaypoints(waypoints);
    ball2.followWaypoints(waypoints);
    ball3.followWaypoints(waypoints);
    ball4.followWaypoints(waypoints);
    ball.draw(ctx);
    ball2.draw(ctx);
    ball3.draw(ctx);
    ball4.draw(ctx);
    ball.update();
    ball2.update();
    ball3.update();
    ball4.update();
    ball.vel.draw(ctx, ball.pos, 10);
    ball2.vel.draw(ctx, ball2.pos, 10);
    ball3.vel.draw(ctx, ball3.pos, 10);
    ball4.vel.draw(ctx, ball4.pos, 10);
}

function random(max){
    return Math.floor(Math.random() * max);
}

Update();