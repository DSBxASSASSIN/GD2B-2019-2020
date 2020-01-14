const ctx = document.querySelector("canvas").getContext("2d");

ctx.canvas.width = document.documentElement.clientWidth;
ctx.canvas.height = document.documentElement.clientHeight;

let waypoints = [];
let ammountOfWaypoints = 5;
for (let i = 0; i < ammountOfWaypoints; i++) {
    waypoints.push(new Ball(new Vector2d(random(ctx.canvas.width), random(ctx.canvas.height)), 20, 255, 0, 0));
}

let player = new DPoint(new Vector2d(waypoints[0].pos.dx, waypoints[0].pos.dy), 15, new Vector2d(0,0), new Vector2d(0,0), 255, 255, 0);

function Update(){
    requestAnimationFrame(Update);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // drawing the balls and lines
    for(let i = 0; i < waypoints.length; i++){
        waypoints[i].draw(ctx);
        if(waypoints[i + 1] == !null){
            ctx.beginPath();
            ctx.moveTo(waypoints[i].pos.dx, waypoints[i].pos.dy);
            ctx.lineTo(waypoints[i+1].pos.dx, waypoints[i+1].pos.dy);
            ctx.closePath();
            ctx.stroke();
        }else{
            ctx.beginPath();
            ctx.moveTo(waypoints[i].pos.dx, waypoints[i].pos.dy);
            ctx.lineTo(waypoints[0].pos.dx, waypoints[0].pos.dy);
            ctx.closePath();
            ctx.stroke();
        }
    }
    
    player.draw(ctx);
}

function random(max){
    return Math.floor(Math.random() * max);
}

Update();