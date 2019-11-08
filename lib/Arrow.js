class Arrow {
    constructor(pos, angle, scale, r, g, b) {
      this.pos = pos;
      this.angle = angle || 0;
      this.scale = scale || 1;
      this.r = r || 0;
      this.g = g || 0;
      this.b = b || 0;
    }

    get Color(){
        return `rgba(${this.r}, ${this.g}, ${this.b})`;
    }
  
    draw(ctx){
      let shaftHeigth = this.scale * 12;
      let shaftLength = this.scale * 70;
      let headHeigth = this.scale * 24;
      let headLength = this.scale * 15;
  
  
      ctx.fillStyle = this.Color;
      ctx.strokeStyle = "black";
      
      ctx.save();
      ctx.translate(this.pos.dx, this.pos.dy);
      ctx.rotate(this.angle);
  
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