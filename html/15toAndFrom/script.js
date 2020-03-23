const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let point = new dPoint(new Vector2d(100,100), new Vector2d(0,0),new Vector2d(0,0),10,"purple");
let points = [];
let target;
let index = 0;
let totalPoints = 100;

for(i=0;i < totalPoints;i++){
  points.push(new Point(new Vector2d(randomNumber(canvas.width - 40),randomNumber(canvas.height - 40)), 20, "red", "black", true));
}

let difference = new Vector2d(0,0);
function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0, 0, width, height);

  for(i=0;i < totalPoints;i++){
    target = points[index];
    points[i].draw(context);
    if(index == totalPoints){
      index = 0;
    }
    
    difference.differenceVector(target.position,point.pos);
    if(difference.magnitude <= target.radius)
    {
      target = points[index++];
    }
  }
  //drawLineAB();
  point.draw(context);

  point.vel.differenceVector(target.position,point.pos);

  point.vel.scalMul(0.01);

  point.update();
  point.vel.draw(context,point.pos,10,"red");

  //console.log(target);
}
animate();

function drawLineAB(){
  context.beginPath();
  context.moveTo(A.position.dx,A.position.dy);
  context.lineTo(B.position.dx,B.position.dy);
  context.closePath();
  context.stroke();
}

function randomNumber(max){
  return Math.random()*max;
}