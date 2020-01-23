class Vector2d{
    constructor(dx,dy){
        this.dx = dx;
        this.dy = dy;
    }

    get magnitude(){
      return Math.sqrt(this.dx * this.dx + this.dy * this.dy);
    }

    differenceVector(a,b){
      this.dx = a.dx - b.dx;
      this.dy = a.dy - b.dy;
    }

    scalarMul(num){
      this.dx *= num;
      this.dy *= num;
    }

    get angle(){
      return Math.atan2(this.dy, this.dx);
    }

    add(Vector){
      this.dx += Vector.dx;
      this.dy += Vector.dy
    }

    draw(ctx, pos, scale){

      let shaftHeigth = 12;
      let headHeigth = 24;
      let headLength = 15;
      let shaftLength = this.magnitude * scale - headLength;
      
      let angle = Math.atan2(this.dy, this.dx);
      
      ctx.save();
      ctx.translate(pos.dx, pos.dy);
      ctx.rotate(angle);

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -shaftHeigth/2);
      ctx.lineTo(shaftLength, -shaftHeigth/2);
      ctx.lineTo(shaftLength, -headHeigth/2);
      ctx.lineTo(shaftLength + headLength,0);
      ctx.lineTo(shaftLength, headHeigth/2);
      ctx.lineTo(shaftLength, shaftHeigth/2);
      ctx.lineTo(0, shaftHeigth/2);
      ctx.closePath();

      ctx.stroke();
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    }
}