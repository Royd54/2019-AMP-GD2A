const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let balls = [];

function RandomNumber(max) {
  return Math.floor(Math.random() * max)
}

for (let i = 0; i < 4; i++) {
  let ball = new Point(new Vector2d(RandomNumber(width), RandomNumber(height)), 20);
  balls.push(ball);
  balls[i].label = i + 1;
  balls[i].draw(context);
}


function animate() {

  requestAnimationFrame(animate);
  context.beginPath();
  context.moveTo(balls[0].position.dx, balls[0].position.dy);

  for (let i = 1; i < balls.length; i++) {
    context.lineTo(balls[i].position.dx, balls[i].position.dy);
  }
  context.lineTo(balls[0].position.dx, balls[0].position.dy);
  context.fillstyle = "red";
  context.strokeStyle = "black";
  context.fill();
  context.stroke();
  context.closePath();
}
animate();