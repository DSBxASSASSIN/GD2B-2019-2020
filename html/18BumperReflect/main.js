const ctx = document.querySelector("canvas").getContext("2d");

ctx.canvas.width = document.documentElement.clientWidth;
ctx.canvas.height = document.documentElement.clientHeight;

let ball, bumper, distance;

bumper = new Ball(new Vector2(ctx.canvas.width / 2, ctx.canvas.height / 2), 200);
ball = new DPoint(new Vector2(300, 200), 15, new Vector2(5, 4), new Vector2(0, 0));

ball.rad = new Vector2(0, 0);
ball.tan = new Vector2(0, 0);


function Update(){
    requestAnimationFrame(Update);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // update 
    ball.update();

    ball.rad.dx = bumper.pos.dx - ball.pos.dx;
    ball.rad.dy = bumper.pos.dy - ball.pos.dy;
    
    distance = ball.rad.magnitude;

    if(distance < ball.radius + bumper.radius){
        ball.rad.magnitude = -ball.rad.magnitude;
	    ball.vel.sumVector(ball.rad, ball.tan);
    }

    ball.rad.magnitude = 1;
    ball.tan.dx = -ball.rad.dy;
    ball.tan.dy = ball.rad.dx;
    ball.rad.magnitude = ball.rad.dot(ball.vel);

    //draw
    bumper.draw(ctx);
    ball.draw(ctx);
    ball.vel.draw(ctx, ball.pos, 10);
    ball.rad.draw(ctx, ball.pos, 10);
    ball.tan.draw(ctx, ball.pos, 10);
}

Update();
