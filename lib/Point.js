class Point {

    constructor(position,radius,color,borderColor){
        this.radius = radius;
        this.color = color;
        this.borderColor = borderColor;
        this.position = position;
    }

    draw(context){
        context.beginPath();
        context.strokeStyle = this.borderColor;
        context.fillStyle = this.color;
        context.arc(this.position.dx,this.position.dy,this.radius,0,2*Math.PI);
        context.stroke();
        context.fill();
        context.closePath();
    }
    
}