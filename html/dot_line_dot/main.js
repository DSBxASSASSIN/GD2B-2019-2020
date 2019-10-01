const ctx = document.querySelector("canvas").getContext('2d');

ctx.canvas.width = document.documentElement.clientWidth;
ctx.canvas.height = document.documentElement.clientHeight;

let a = new Ball(new Vector2d(300,200), 15, true);
let b = new Ball(new Vector2d(500,300), 15, true);

let l = new Liniar(1/3, 133);


for (let x = 0; x < ctx.canvas.width; x+= 10) {
    let a = new Ball(new Vector2d(x ,l.calcY(x)), 5);
    a.draw(ctx);
}

function Update() {
    requestAnimationFrame(Update);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    a.draw(ctx);
    b.draw(ctx);
    l.defineLineByTwoPoints(a, b);
}