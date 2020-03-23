const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(200,200),20,"lime","black",true);
let B = new Point(new Vector2d(500,500),20,"gold", "black", true);

let l = new LinearFunction(0,0);
let P = new LinearFunction(0,0);
let point = new dPoint(new Vector2d(0,0),new Vector2d(10,10),new Vector2d(0,0),20,"yellow","nigga231");


function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
  l.difineLineWithTwoPoints(A,B);
  l.Draw(context);

  point.update();
  point.draw(context);
  point.vel.draw(context,point.pos,10)

  A.draw(context);
  B.draw(context);
}

animate();

function randomNumber(max){
  return Math.random()*max;
}