const ctx = document.querySelector('canvas').getContext("2d");

ctx.canvas.width = document.documentElement.clientWidth;
ctx.canvas.height = document.documentElement.clientHeight;

let A = new Ball(new Vector2(getRandom(ctx.canvas.width), getRandom(ctx.canvas.height)), 15, true, 255, 0, 0);
let B = new Ball(new Vector2(getRandom(ctx.canvas.width), getRandom(ctx.canvas.height)), 15, true, 255, 255, 0);
let C = new Ball(new Vector2(getRandom(ctx.canvas.width), getRandom(ctx.canvas.height)), 15, true, 0, 255, 0);

let D = new Liniar(1, 1);
let E = new Liniar(1, 1);

let F = new Vector2(0, 0);
let G = new Vector2(0, 0);

function Update(){
    requestAnimationFrame(Update);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    A.draw(ctx);
    B.draw(ctx);
    C.draw(ctx);
    
    F.differenceVector(A.pos, B.pos);
    G.differenceVector(C.pos, B.pos);

    F.draw(ctx, B.pos, 1);
    G.draw(ctx, B.pos, 1);

    D.defineLineByTwoPoints(A, B);
    E.defineLineByTwoPoints(B, C);

    D.draw(ctx);
    E.draw(ctx);
}

function getRandom(max) {
    return Math.floor(Math.random() * max);
}

Update();