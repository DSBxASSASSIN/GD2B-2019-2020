class DPoint{
    constructor(pos, radius, vel, acc, r, g, b, a){
        this.pos = pos;
        this.radius = radius;
        this.vel = vel;
        this.acc = acc;
        this.r = r || 0;
        this.g = g || 0;
        this.b = b || 0;
        this.a = a || 1;
    }

    get color(){
        return `rgba(${this.r} , ${this.g} , ${this.b} , ${this.a})`; 
    }

    colorChange(r, g, b){
        this.r = r;
        this.g = g;
        this.b = b;
    }
    
    update(){
        this.vel.add(this.acc);
    
        this.pos.add(this.vel);

        if(this.pos.dx > ctx.canvas.width - this.radius){
            this.vel.dx = -Math.abs(this.vel.dx);
        }

        if(this.pos.dy > ctx.canvas.height - this.radius){
            this.vel.dy = -Math.abs(this.vel.dy);
        }

        if(this.pos.dx < this.radius){
            this.vel.dx = Math.abs(this.vel.dx);
        }
        
        if(this.pos.dy < this.radius){
            this.vel.dy = Math.abs(this.vel.dy);
        }
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
}