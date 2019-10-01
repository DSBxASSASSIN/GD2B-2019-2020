class Liniar{
    constructor(slope, intercept){
        this.slope = slope;
        this.intercept = intercept;
    }

    calcY(x){
        return this.slope * x + this.intercept;
    }

    defineLineByTwoPoints(a, b){
        this.slope = (b.pos.dy - a.pos.dy)/(b.pos.dx - a.pos.dx);
        this.intercept = a.pos.dy - this.slope * a.pos.dx;
    }
}