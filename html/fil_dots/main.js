const ctx = document.querySelector('canvas').getContext('2d');

ctx.canvas.width = document.documentElement.clientWidth;
ctx.canvas.height = document.documentElement.clientHeight;


let dots = [];

for (var i = 0; i <4; i++) {
  addPoint();
}

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  
  if(Math.random() < 0.01){
     dots.splice(0,1)
     addPoint();

  }

  ctx.fillStyle = "rgba(255,255,0,0.2)"
  ctx.beginPath();
  ctx.moveTo(dots[0].pos.dx,dots[0].pos.dy);
  
  for (var i = 0; i < dots.length; i++) {
    ctx.lineWidth = 2;
    ctx.lineTo(dots[i].pos.dx,dots[i].pos.dy);
  }

  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  
  for (var i = 0; i < dots.length; i++) {
    dots[i].draw(ctx);

  }
}

animate();

function randomNumber(max){
  return Math.random()*max;
}

function addPoint(){
  let dot = new Ball(new Vector2d(randomNumber(ctx.canvas.width), randomNumber(ctx.canvas.height)), 30, "yellow");
  dots.push(dot);
}
