const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

  let ball = new Point(new Vector2d(300, 300), 20, "yellow", "black", true);

  function animate() {
    requestAnimationFrame(animate);
    ball.draw(context);
  }
  let difference = new Vector2d(0,0); 


  animate();