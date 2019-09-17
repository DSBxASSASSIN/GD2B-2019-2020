class Ball{
    constructor(posision, radius, r, g, b, a){
        this.posision = posision;
        this.radius = radius;
        this.r = r || 255;
        this.g = g || 0;
        this.b = b || 0;
        this.a = a || 1;
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