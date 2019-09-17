class Ball{
    constructor(posision, radius, r, g, b, a){
        this.posision = posision;
        this.radius = radius;
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    get color(){
        return "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")"; 
    }

    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.posision.dx, this.posision.dy, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }
}