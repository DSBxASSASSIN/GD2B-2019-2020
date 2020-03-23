const ctx = document.querySelector('canvas').getContext('2d');

ctx.canvas.width = document.documentElement.clientWidth;
ctx.canvas.height = document.documentElement.clientHeight;

let a = new Ball(new Vector2(200, 200), 20, true, 1, 255);
let b = new Ball(new Vector2(800, 300), 20, true);
let c = new Ball(new Vector2(400, 500), 20, true, 1, 0, 255);
let d = new Ball(new Vector2(600, 700), 10, false, 1)

let l = new Liniar(1, 1);
let m = new Liniar(1, 1);


function Update(){
    requestAnimationFrame(Update);
    ctx.canvas.width = document.documentElement.clientWidth;
    ctx.canvas.height = document.documentElement.clientHeight;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    l.defineLineByTwoPoints(a, b);
    l.draw(ctx);
    
    d.pos.dx = (m.intercept - l.intercept)/(l.slope-m.slope);
    d.pos.dy = (m.slope * d.pos.dx + m.intercept);
    d.draw(ctx);
    
    m.slope = -1/l.slope;
    m.intercept = c.pos.dy - m.slope * c.pos.dx;
    m.draw(ctx);
    
    a.draw(ctx);
    b.draw(ctx);
    c.draw(ctx);
    
    
}

Update();