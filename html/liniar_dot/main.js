const ctx = document.querySelector('canvas').getContext('2d');

ctx.canvas.width = document.documentElement.clientWidth;
ctx.canvas.height = document.documentElement.clientHeight;

let f = new Liniar(1,10);

for(let i = 0; i < ctx.canvas.width; i+=10){
    let point = new Ball(new Vector2(i,f.calcY(i)), 10);
    point.draw(ctx);
}
