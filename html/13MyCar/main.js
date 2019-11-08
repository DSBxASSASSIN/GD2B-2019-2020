let ctx = document.querySelector("canvas").getContext('2d');



let car = new Image();
car.src = "images/car.png";

car.pos = new Vector2d(0, 0);
car.vel = new Vector2d(7, 0);

let wheelFront = new Image();
wheelFront.src = "images/wheel.png";
wheelFront.pos = new Vector2d(0, 0);


car.addEventListener('load', ()=>{
    
    car.pos.dy = ctx.canvas.height - car.height;
    
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

    ctx.drawImage(wheelFront, wheelFront.pos.dx, wheelFront.pos.dy);
    clamp()
}

function clamp(){
    if(car.pos.dx > ctx.canvas.width){
        car.pos.dx = -car.width;
    }
}