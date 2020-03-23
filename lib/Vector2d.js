class Vector2d{
    constructor(dx,dy){
        this.dx = dx;
        this.dy = dy;
    }

    get magnitude(){
        return Math.sqrt(this.dx * this.dx + this.dy * this.dy);
    }

    set magnitude(newMagnitude){
        let tempAngle = this.angle;
        this.dx = newMagnitude*Math.cos(tempAngle);
        this.dy = newMagnitude*Math.sin(tempAngle);
    }

    draw(context,pos){
        let shaftHeight = 15;
        let shaftWidth = this.magnitude * 1;
        let arrowHeight = 40;
        let arrowWidth = 40;

        context.save();
        context.translate(pos.dx,pos.dy);
        context.rotate(this.angle);
        context.beginPath();

        context.moveTo(0,0);
        //heen
        context.lineTo(0,shaftHeight/2);
        context.lineTo(shaftWidth,shaftHeight/2);
        context.lineTo(shaftWidth, arrowHeight/2);
        context.lineTo(shaftWidth + arrowWidth, 0);

        //terug
        context.lineTo(shaftWidth, -arrowHeight/2);
        context.lineTo(shaftWidth,-shaftHeight/2);
        context.lineTo(0,-shaftHeight/2);

        context.fill();
      

        context.closePath();
        context.stroke();

        context.restore();
    }

    add(vector){
        this.dx += vector.dx;
        this.dy += vector.dy;
      }

    scalMul(scal){
        this.dx *= scal;
        this.dy *= scal;
    }


    differenceVector(a,b){
        this.dx = a.dx - b.dx;
        this.dy = a.dy - b.dy;
      }

      dot(vector){
          return this.dx*vector.dx + this.dy*vector.dy;
      }

      get angle(){
         return Math.atan2(this.dy,this.dx);
      }

}