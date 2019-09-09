const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let woekoe = [];

Animate();

function Animate(){
    context.clearRect(0,0,width,height);
    requestAnimationFrame(Animate);
    let color = "rgb(" + getRandom(255) + "," + getRandom(255) + "," + getRandom(255) + ")";
    let borderColor = "rgb(" + getRandom(255) + "," + getRandom(255) + "," + getRandom(255) + ")";
    woekoe.push(new Point(new Vector2d(getRandom(width),getRandom(height)), getRandom(200), color, borderColor));
    
    for(let i = 0; i<woekoe.length; i++){
        woekoe[i].label = i;
        woekoe[i].radius++;
        woekoe[i].draw(context);
        if(woekoe[i].radius > 100){
          woekoe.splice(i,1);
        }
      }
    console.log("loko");
    console.log(woekoe.length);

}

function getRandom(max){
    let ans = Math.floor(Math.random()*max);
    return ans;
}