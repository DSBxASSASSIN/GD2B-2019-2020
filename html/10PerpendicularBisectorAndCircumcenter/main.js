const ctx = document.querySelector('canvas').getContext('2d');



//main balls of the triangle
let a = new Ball(new Vector2(getRandom(ctx.canvas.width), getRandom(ctx.canvas.height)), 20, true, 255);
let b = new Ball(new Vector2(getRandom(ctx.canvas.width), getRandom(ctx.canvas.height)), 20, true, 0, 255);
let c = new Ball(new Vector2(getRandom(ctx.canvas.width), getRandom(ctx.canvas.height)), 20, true, 0, 0, 255);

//median balls of the triangle
let d = new Ball(new Vector2(getRandom(ctx.canvas.width), getRandom(ctx.canvas.height)), 10, false); 
let e = new Ball(new Vector2(getRandom(ctx.canvas.width), getRandom(ctx.canvas.height)), 10, false);
let f = new Ball(new Vector2(getRandom(ctx.canvas.width), getRandom(ctx.canvas.height)), 10, false);

//middle ball of circle
let g = new Ball(new Vector2(getRandom(ctx.canvas.width), getRandom(ctx.canvas.height)), 10, true, 255, 255, 255);

//main lines of the triangle
let l = new Liniar(1, 1);
let m = new Liniar(1, 1);
let n = new Liniar(1, 1);

//median lines of the triangle
let o = new Liniar(1, 1);
let p = new Liniar(1, 1);
let q = new Liniar(1, 1);

let R;


function Update(){
    requestAnimationFrame(Update);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.canvas.width = document.documentElement.clientWidth;
    ctx.canvas.height = document.documentElement.clientHeight;
         
    //draw main lines of triangle 
    l.defineLineByTwoPoints(a, b);
    l.draw(ctx);

    m.defineLineByTwoPoints(b, c);
    m.draw(ctx);

    n.defineLineByTwoPoints(c, a);
    n.draw(ctx);

    //draw median lines of the triangle
    o.slope = -1/l.slope;
    o.intercept = d.pos.dy - o.slope * d.pos.dx;
    o.draw(ctx);

    p.slope = -1/m.slope;
    p.intercept = e.pos.dy - p.slope * e.pos.dx;
    p.draw(ctx);

    q.slope = -1/n.slope;
    q.intercept = f.pos.dy - q.slope * f.pos.dx;
    q.draw(ctx);

    //draw main balls of triangle 
    a.draw(ctx);
    b.draw(ctx);
    c.draw(ctx);

    //draw median balls of triangle 
    d.pos.dx = 1/2 * (a.pos.dx + b.pos.dx);
    d.pos.dy = 1/2 * (a.pos.dy + b.pos.dy);
    d.draw(ctx);
    
    e.pos.dx = 1/2 * (b.pos.dx + c.pos.dx);
    e.pos.dy = 1/2 * (b.pos.dy + c.pos.dy);
    e.draw(ctx);

    f.pos.dx = 1/2 * (c.pos.dx + a.pos.dx);
    f.pos.dy = 1/2 * (c.pos.dy + a.pos.dy);
    f.draw(ctx);

    //draw middle ball of triangle
    g.pos.dx = (o.intercept - p.intercept)/(p.slope-o.slope);
    g.pos.dy = (o.slope * g.pos.dx + o.intercept);
    g.draw(ctx);

    //draw circle
    R = (getLength(a, b) * getLength(b, c) * getLength(c, a)) / (Math.sqrt((getLength(a, b) + getLength(b, c) + getLength(a, c)) * 
                                                                           (-getLength(a, b) + getLength(b, c) + getLength(a, c)) *
                                                                           (getLength(a, b) - getLength(b, c) + getLength(a, c)) *
                                                                           (getLength(a, b) + getLength(b, c) - getLength(a, c)) 
                                                                            ));

    ctx.beginPath()
    ctx.strokeStyle = "black";
    ctx.arc(g.pos.dx, g.pos.dy, getLength(a, g), 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath()
    
    
}

Update();

function getRandom(max){
    return Math.floor(Math.random() * max);
}

function getLength(a, b){
    return Math.sqrt(Math.pow(b.pos.dy - a.pos.dy, 2) +
                     Math.pow(b.pos.dx - a.pos.dx, 2));
}