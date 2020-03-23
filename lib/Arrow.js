class Arrow{
    constructor(){
        this.angle = Math.PI;
        this.image = new Image();
    }

    draw(context){
        let shaftHeight = 20;
        let shaftWidth = 100;
        let arrowHeight = 40;
        let arrowWidth = 40;



        context.save();
        context.translate(canvas.width/2,canvas.height/2);
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
}