class Liniar{
    constructor(slope, intercept, LW){
        this.slope = slope;
        this.intercept = intercept;
        this.LW = LW || 1;
    }

    calcY(x){
        return this.slope * x + this.intercept;
    }

    defineLineByTwoPoints(a, b){
        this.slope = (b.pos.dy - a.pos.dy)/(b.pos.dx - a.pos.dx);
        this.intercept = a.pos.dy - this.slope * a.pos.dx;
    }

    draw(ctx){
        ctx.lineWidth = this.LW;
        ctx.beginPath();
        ctx.moveTo(0, this.calcY(0));
        ctx.lineTo(ctx.canvas.width, this.calcY(ctx.canvas.width));
        ctx.closePath();
        ctx.stroke();
    }
}