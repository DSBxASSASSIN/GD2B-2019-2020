class Vector2{
    constructor(dx,dy){
        this.dx = dx;
        this.dy = dy;
    }

    sumVector(a, b){
	this.dx = a.dx + b.dx;
	this.dy = a.dx + b.dy;
    }

    get magnitude(){
      return Math.sqrt(this.dx * this.dx + this.dy * this.dy);
    }

    set magnitude(newMagnatude){
      let tempAngle = this.angle;
      this.dx = newMagnatude * Math.cos(tempAngle);
      this.dy = newMagnatude * Math.sin(tempAngle);
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
      this.dy += Vector.dy;
    }

    dot(Vector){
      return this.dx * Vector.dx + this.dy * Vector.dy;
    }

    draw(ctx, pos, scale){
      ctx.fillStyle = "yellow";

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
