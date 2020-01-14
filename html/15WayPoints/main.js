const ctx = document.querySelector("canvas").getContext("2d");

ctx.canvas.width = document.documentElement.clientWidth;
ctx.canvas.height = document.documentElement.clientHeight;

let waypoints = [];

for (let i = 0; i < 5; i++) {
    waypoints.push(new Ball(new Vector2d(random(ctx.canvas.width), random(ctx.canvas.height)), 15));
}

function Update(){
    requestAnimationFrame(Update);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    

    // console.log(waypoints);
    // // drawing the balls and lines
    // waypoints.forEach(point => {
    //     console.log("hans");
    //     point.draw(ctx);
    // });
}

function random(max){
    return Math.floor(Math.random() * max);
}

Update();