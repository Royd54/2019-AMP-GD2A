class LinearFunction {

    constructor(slope, intercept){
        this.slope = slope;
        this.intercept = intercept;
    }

    y(x){
        return  x * this.slope + this.intercept;
    }

    difineLineWithTwoPoints(A,B){
      this.slope = (B.position.dy-A.position.dy)/(B.position.dx-A.position.dx);
      this.intercept = A.position.dy - A.position.dx * this.slope;
    }

    

    Draw(context){
        context.beginPath();
        context.moveTo(0,this.y(0));
        context.lineTo(width, this.y(width));
        context.closePath();
        context.stroke();
    }

    intersection(M){
        let ans = {};
        ans.dx = (M.intercept - this.intercept)/(this.slope - M.slope);
        ans.dy = this.y(ans.dx);
        return ans;
      }

}