const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(200,200),20,"lime","black",true);
let B = new Point(new Vector2d(500,500),20,"gold", "black", true);
let S = new Point(new Vector2d(500,500),20,"pink", "black", true);

let l = new LinearFunction(0,0);
let m = new LinearFunction(0,0);
let point = new dPoint(new Vector2d(0,0),new Vector2d(2,2),new Vector2d(0,0),20,"yellow","nigga231");

let vector = new Vector2d(1,1);
let tan = new Vector2d(1,1);
let rad = new Vector2d(1,1);

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
  l.difineLineWithTwoPoints(A,B);
  l.Draw(context);

  m.slope = - 1/l.slope;
  m.intercept = point.pos.dy - m.slope*point.pos.dx;
  m.Draw(context);

  vector.dx = B.position.dx - point.pos.dx;
  vector.dy = B.position.dy - point.pos.dy;

  rad.dx = S.position.dx - A.position.dx;
  rad.dy = S.position.dy - A.position.dy;

  tan.dx = -rad.dy;
  tan.dy = rad.dx;

  rad.magnitude = vector.dot(rad);
  tan.magnitude = vector.dot(tan);

  rad.magnitude = 50;
  tan.magnitude = 50;

  rad.magnitude = point.vel.dot(rad);
  tan.magnitude = point.vel.dot(tan);

  rad.draw(context,point.pos,1);
  tan.draw(context,point.pos,1)

  S.position.dx = m.intersection(l).x;
  S.position.dy = m.intersection(l).y;

  point.update();
  point.draw(context);
  point.vel.draw(context,point.pos,25);

  A.draw(context);
  B.draw(context);
  S.draw(context);
}

animate();

function randomNumber(max){
  return Math.random()*max;
}

