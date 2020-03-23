const ctx = document.querySelector("canvas").getContext("2d");

ctx.canvas.width = document.documentElement.clientWidth;
ctx.canvas.height = document.documentElement.clientHeight;

let A = new Ball(new Vector2(getRandom(ctx.canvas.width), getRandom(ctx.canvas.height)), 15, true, 255, 0, 0)
let B = new Ball(new Vector2(getRandom(ctx.canvas.width), getRandom(ctx.canvas.height)), 15, true, 0, 0, 255)
let C = new DPoint(new Vector2(getRandom(ctx.canvas.width), getRandom(ctx.canvas.height)), 20, new Vector2(7, 8), new Vector2(0, 0), 0, 255)
let D = new Ball(new Vector2(getRandom(ctx.canvas.width), getRandom(ctx.canvas.height)), 10, true, 255, 255, 255)

let L = new Liniar(1, 1);
let M = new Liniar(1, 1);

let dis = new Vector2(0, 0);

function Update(){
    requestAnimationFrame(Update);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    L.defineLineByTwoPoints(A, B);
    L.draw(ctx);
    
    D.pos.dx = (M.intercept - L.intercept) / (L.slope - M.slope);
    D.pos.dy = (M.slope * D.pos.dx + M.intercept);
    
    M.slope = -1/L.slope;
    M.intercept = C.pos.dy - M.slope * C.pos.dx;
    M.draw(ctx);
    
    dis.differenceVector(C.pos, D.pos);
    
    console.log(dis.magnitude);
    
    if(dis.magnitude < C.radius){
    
    }

    A.draw(ctx);
    B.draw(ctx);
    C.update();
    C.draw(ctx);
    D.draw(ctx);
}

function getRandom(max){
    return Math.floor(Math.random() * max);
}

Update();