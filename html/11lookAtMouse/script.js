const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let arrow = new Arrow();

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height)

  arrow.draw(context);
}

animate();

    window.addEventListener('mousemove',(evt)=>{
      var xdir = evt.clientX - canvas.width/2;
      var ydir = evt.clientY - canvas.height/2;

      var theta = Math.atan2( ydir, xdir); 
      arrow.angle = theta;
     });



