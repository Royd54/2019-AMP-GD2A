const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(200,200), 15, "red", "black",true);
let B = new Point(new Vector2d(300,250), 15, "blue", "black",true);
let C = new Point(new Vector2d(600,600), 15, "yellow", "black",true);

let D = new Point(new Vector2d(0,400), 10, "white", "black", false);
let E = new Point(new Vector2d(400,100), 10, "white", "black", false);
let F = new Point(new Vector2d(50,50), 10, "white", "black", false);
let S = new Point(new Vector2d(10,100), 10, "green", "black", false);

let l = new LinearFunction(1,1);
let m = new LinearFunction(1,1);
let O = new LinearFunction(1,1);

let P = new LinearFunction(1,1);
let Q = new LinearFunction(1,1);
let R = new LinearFunction(1,1);

let grid = new Grid();
animate();
function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
  grid.draw(context);

  l.difineLineWithTwoPoints(A,B);
  l.Draw(context);

  m.difineLineWithTwoPoints(C,B);
  m.Draw(context);

  O.difineLineWithTwoPoints(C,A);
  O.Draw(context);

  P.difineLineWithTwoPoints(D,C);
  P.Draw(context);

  Q.difineLineWithTwoPoints(B,F);
  Q.Draw(context);

  R.difineLineWithTwoPoints(E,A);
  R.Draw(context);

  D.position.dx = (A.position.dx + B.position.dx)/2;
  D.position.dy = (A.position.dy + B.position.dy)/2;

  E.position.dx = (B.position.dx + C.position.dx)/2;
  E.position.dy = (B.position.dy + C.position.dy)/2;

  F.position.dx = (C.position.dx + A.position.dx)/2;
  F.position.dy = (C.position.dy + A.position.dy)/2;

  S.position.dx = Q.intersection(P).dx;
  S.position.dy = Q.intersection(P).dy;

  A.draw(context);
  B.draw(context);
  C.draw(context);
  D.draw(context);
  E.draw(context);
  F.draw(context);

  S.draw(context);
}