const ctx = document.querySelector('canvas').getContext('2d');

ctx.canvas.width = document.documentElement.clientWidth;
ctx.canvas.height = document.documentElement.clientHeight;

let a = new Ball(new Vector2d(getRandom(ctx.canvas.width), getRandom(ctx.canvas.height)), 20, true, 255);
let b = new Ball(new Vector2d(getRandom(ctx.canvas.width), getRandom(ctx.canvas.height)), 20, true, 0, 255);
let c = new Ball(new Vector2d(getRandom(ctx.canvas.width), getRandom(ctx.canvas.height)), 20, true, 0, 0, 255);
let d = new Ball(new Vector2d(getRandom(ctx.canvas.width), getRandom(ctx.canvas.height)), 15, false);

let l = new Liniar(1, 1, 2);
let m = new Liniar(1, 1, 2);
let n = new Liniar(1, 1, 2);

let o = new Liniar(1, 1, 4);
let p = new Liniar(1, 1, 4);
let q = new Liniar(1, 1, 4);


function Update(){
    requestAnimationFrame(Update);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    l.defineLineByTwoPoints(a, b);
    l.draw(ctx);

    m.defineLineByTwoPoints(b, c);
    m.draw(ctx);

    n.defineLineByTwoPoints(c, a);
    n.draw(ctx);

    o.slope = -1/m.slope;
    o.intercept = a.pos.dy - o.slope * a.pos.dx;
    o.draw(ctx);

    p.slope = -1/n.slope;
    p.intercept = b.pos.dy - p.slope * b.pos.dx;
    p.draw(ctx);

    q.slope = -1/l.slope;
    q.intercept = c.pos.dy - q.slope * c.pos.dx;
    q.draw(ctx);

    a.draw(ctx);
    b.draw(ctx);
    c.draw(ctx);

    d.pos.dx = (o.intercept - p.intercept)/(p.slope-o.slope);
    d.pos.dy = (o.slope * d.pos.dx + o.intercept);
    d.draw(ctx);

}

Update()

function getRandom(max){
    return Math.floor(Math.random() * max);
}