const ctx = document.querySelector('canvas').getContext('2d');

ctx.canvas.width = document.documentElement.clientWidth;
ctx.canvas.height = document.documentElement.clientHeight;

let a = new Ball(new Vector2d(getRandom(ctx.canvas.width), getRandom(ctx.canvas.height)), 20, true);
let b = new Ball(new Vector2d(getRandom(ctx.canvas.width), getRandom(ctx.canvas.height)), 20, true);
let c = new Ball(new Vector2d(getRandom(ctx.canvas.width), getRandom(ctx.canvas.height)), 20, true);
let d = new Ball(new Vector2d(getRandom(ctx.canvas.width), getRandom(ctx.canvas.height)), 10, false);

let l = new Liniar(1, 1, 4);
let m = new Liniar(1, 1, 4);
let n = new Liniar(1, 1, 4);

let o = new Liniar(1, 1);
let p = new Liniar(1, 1);
let q = new Liniar(1, 1);

function Update(){
    requestAnimationFrame(Update);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    l.defineLineByTwoPoints(a, b);
    l.draw(ctx);

    m.defineLineByTwoPoints(b, c);
    m.draw(ctx);

    n.defineLineByTwoPoints(c, a);
    n.draw(ctx);

    o.defineLineByTwoPoints(a, d);
    o.draw(ctx);

    p.defineLineByTwoPoints(b, d);
    p.draw(ctx);

    q.defineLineByTwoPoints(c, d);
    q.draw(ctx);

    d.pos.dx = 1/3 * (a.pos.dx + b.pos.dx + c.pos.dx);
    d.pos.dy = 1/3 * (a.pos.dy + b.pos.dy + c.pos.dy);

    a.draw(ctx);
    b.draw(ctx);
    c.draw(ctx);
    d.draw(ctx);

    
}

Update();

function getRandom(max){
    return Math.floor(Math.random() * max)
}