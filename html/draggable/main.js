const ctx = document.documentElement.querySelector('canvas').getContext('2d');

ctx.canvas.width = document.documentElement.clientWidth;
ctx.canvas.height = document.documentElement.clientWidth;


let a = new Ball(new Vector2d(200, 200), 50, true, 255);

function Update(){
    requestAnimationFrame(Update);
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
    a.draw(ctx);   
}

Update()