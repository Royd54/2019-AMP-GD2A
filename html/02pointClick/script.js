const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let points = [];

let score = 0;

makeCircles();

function makeCircles(){
    let color = "rgb(" + getRandom(255) + "," + getRandom(255) + "," + getRandom(255) + ")";
    let borderColor = "rgb(" + getRandom(255) + "," + getRandom(255) + "," + getRandom(255) + ")";
   
    for(let i = 0; i < 10; i++){
      points.push(new Point(new Vector2d(getRandom(width),getRandom(height)), 50, color, borderColor));
      points[i].draw(context);
    }
}

addEventListener('mousedown',mouseHandler);

let difference = new Vector2d(0,0);

function mouseHandler(evt){
  let click = new Vector2d(evt.clientX, evt.clientY);
  console.log(points.length);
  for(let i = 0; i<points.length;i++){
    difference.differenceVector(points[i].position,click);
    if(difference.magnitude <= points[i].radius){
      score++;
      points[i].color = "yellow";  
      points[i].draw(context);
    }
    if(score == 10){
      score = 0;
      console.log(score);
      location.reload();
    }
  }
}

function getRandom(max){
    let ans = Math.floor(Math.random()*max);
    return ans;
}