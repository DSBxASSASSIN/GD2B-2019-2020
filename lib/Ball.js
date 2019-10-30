class Ball{
    constructor(pos, radius, draggable, r, g, b, a){

        this.pos = pos;
        this.radius = radius;
        this.r = r || 0;
        this.g = g || 0;
        this.b = b || 0;
        this.a = a || 1;
        this.draggable = false || draggable;

        if(this.draggable){
            this.drag();
        }
    }

    get color(){
        return `rgba(${this.r} , ${this.g} , ${this.b})`; 
    }

    colorChange(r, g, b){
        this.r = r;
        this.g = g;
        this.b = b;
    }

    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.strokeStyle = "black";
        ctx.arc(this.pos.dx, this.pos.dy, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    drag(){
        var dragging = false;
       
        window.addEventListener('mousedown', (e)=>{
            let differance = new Vector2d(0,0);
            let mouse = new Vector2d(e.clientX, e.clientY);
            differance.differenceVector(this.pos, mouse);
          
            if(differance.magnitude < this.radius){
                dragging = true;
            }
        })

        window.addEventListener('mousemove', (e)=>{
            if(dragging){
                this.pos.dx = e.clientX;
                this.pos.dy = e.clientY;
            }

        
        })

        window.addEventListener('mouseup', (e)=>{
            dragging = false;
        })
    }


}