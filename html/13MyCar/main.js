let ctx = document.querySelector("canvas").getContext('2d');

let angle = 0;

let car = new Image();
car.src = "images/car.png";

car.pos = new Vector2d(0, 0);
car.vel = new Vector2d(7, 0);

let wheelFront = new Image();
wheelFront.src = "images/wheel.png";
wheelFront.pos = new Vector2d(0, 0);

let wheelBack = new Image();
wheelBack.src = "images/wheel.png";
wheelBack.pos = new Vector2d(0, 0);


car.addEventListener('load', ()=>{
    
    car.pos.dy = document.documentElement.clientHeight - car.height;
    
    Update();
})

function Update(){
    requestAnimationFrame(Update);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    ctx.canvas.width = document.documentElement.clientWidth;
    ctx.canvas.height = document.documentElement.clientHeight;

    car.pos.add(car.vel);
    ctx.drawImage(car, car.pos.dx, car.pos.dy);

    wheelFront.pos.dx = car.pos.dx;
    wheelFront.pos.dy = car.pos.dy;
    wheelFront.pos.add(new Vector2d(673, 123));

    wheelBack.pos.dx = car.pos.dx;
    wheelBack.pos.dy = car.pos.dy;
    wheelBack.pos.add(new Vector2d(135, 123));
    
    ctx.save();
    ctx.translate();
    ctx.rotate(angle);
    ctx.drawImage(wheelFront, wheelFront.pos.dx, wheelFront.pos.dy);
    ctx.drawImage(wheelBack, wheelBack.pos.dx, wheelBack.pos.dy);
    ctx.restore();

    angle += 0.1;
    clamp()
}

function clamp(){
    if(car.pos.dx > ctx.canvas.width){
        car.pos.dx = -car.width;
    }
}