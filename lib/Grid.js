class Grid{
    constructor(sl, bl){
        this.sl = sl;
        this.bl = bl;
    }

    draw(ctx){
        
        for(var i = 0; i < ctx.canvas.widrh/10; i++){

        }
        ctx.beginPath();
        ctx.moveTo(this.sl * i, 0);
        ctx.lineTo(this.sl * i, ctx.canvas.height);
        ctx.closePath();
        ctx.stroke();

        
    }
}