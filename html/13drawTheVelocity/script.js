const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;


let points = [];

let totalPoints = 50;
for(i=0;i < totalPoints;i++){
  points.push(new dPoint(new Vector2d(randomNumber(canvas.width - 20),randomNumber(canvas.height - 20)),new Vector2d(randomNumber(2),randomNumber(2)),new Vector2d(0,1),20,"yellow","point"));
  points[i].draw(context);
}


function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
    for(i=0;i < totalPoints;i++){
    points[i].update();
    points[i].draw(context);
    points[i].vel.draw(context,points[i].pos,10)
  }
}

animate();

function randomNumber(max){
  return Math.random()*max;
}