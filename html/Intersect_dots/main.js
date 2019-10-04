const ctx = document.querySelector("canvas").getContext('2d');

ctx.canvas.width = document.documentElement.clientWidth;
ctx.canvas.height = document.documentElement.clientHeight;

let a = new Ball(new Vector2d(getRandom(ctx.canvas.width), getRandom(ctx.canvas.height)), 20, true, 255,255);
let b = new Ball(new Vector2d(getRandom(ctx.canvas.width), getRandom(ctx.canvas.height)), 20, true);
let c = new Ball(new Vector2d(getRandom(ctx.canvas.width), getRandom(ctx.canvas.height)), 20, true, 1, 255);
let d = new Ball(new Vector2d(getRandom(ctx.canvas.width), getRandom(ctx.canvas.height)), 20, true, 1, 0, 255)

let s = new Ball(new Vector2d(10, 10), 10, false, 1, 0, 0)

let l = new Liniar(1, 1);
let m = new Liniar(1, 1);
let grid = new Grid(20, 50);



function Update() {
    requestAnimationFrame(Update);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    grid.draw(ctx);
    l.draw(ctx);
    m.draw(ctx);
    a.draw(ctx);
    b.draw(ctx);
    c.draw(ctx);
    d.draw(ctx);
    s.draw(ctx);
    l.defineLineByTwoPoints(a, b);
    m.defineLineByTwoPoints(c, d);

    s.pos.dx = (m.intercept - l.intercept)/(l.slope-m.slope);
    s.pos.dy = (m.slope * s.pos.dx + m.intercept);

}

function getRandom(max) {
    return Math.floor(Math.random() * max);
}

Update()