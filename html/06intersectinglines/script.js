const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(200,200), 30, "blue", "black", true);
let B = new Point(new Vector2d(500,600), 30, "red", "black", true);

let C = new Point(new Vector2d(100,200), 30, "green", "black", true);
let D = new Point(new Vector2d(300,100), 30, "pink", "black", true);

let S = new Point(new Vector2d(500,300),20,"white", "black", false);

let L = new LinearFunction(1,1);
let M = new LinearFunction(1,1);

let grid =new Grid();

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0, 0, width, height);

  grid.draw(context);

  L.difineLineWithTwoPoints(A,B);
  L.Draw(context);

  M.difineLineWithTwoPoints(C,D);
  M.Draw(context);

  S.position.dx = L.intersection(M).dx;
  S.position.dy = L.intersection(M).dy;

  A.draw(context);
  B.draw(context);
  C.draw(context);
  D.draw(context);

  S.draw(context);

}
animate();
