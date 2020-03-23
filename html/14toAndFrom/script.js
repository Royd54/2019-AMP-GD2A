const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let point = new dPoint(new Vector2d(100,100), new Vector2d(0,0),new Vector2d(0,0),10,"purple");
let points = [];
let target;
let index = 0;
let waypoints = [];
let indexA = [];
let followers = [];


for (let i = 0; i < 5; i++) {
  let waypoint = new Point(new Vector2d(rng(canvas.width), rng(canvas.height)), 15, "rgba(" + rng(255) + "," + rng(255) + "," + rng(255) + "," + 1 +")", "", true);
  waypoints.push(waypoint);
}

for (i = 0; i < 5; i++) {
  let follower = new dPoint(new Vector2d(100,100), new Vector2d(0,0),new Vector2d(0,0),10,"purple");
  followers.push(follower);
}

for (i = 0; i < followers.length; i++) {
  let followerIndex = i;
  indexA.push(followerIndex);
}


for (i = 0; i < followers.length; i++) {
  let FINdex = i;
  indexA.push(FINdex);
}

function animate() {
requestAnimationFrame(animate);
context.clearRect(0, 0, canvas.width, canvas.height);


for (let i = 0; i < waypoints.length; i++) {
  waypoints[i].draw(context);
  waypoints[i].label = i + 1;
}

for (let i = 0; i < 5; i++){
      followers[i].draw(context);
      followers[i].label = i + 1;

  }
  for(i = 0; i < followers.length; i++){
      followers[i].vel.differenceVector(waypoints[indexA[i]].position, followers[i].pos);


  if(followers[i].vel.magnitude < 2){
    indexA[i] += 1;
  }
  if (indexA[i] >= waypoints.length) {
      indexA[i] = 0;
  }

      followers[i].vel.scalMul(0.01);
      followers[i].update();
      followers[i].vel.draw(context,followers[i].pos,10,"red");

  }
}

animate();

function rng(max) {
  return Math.floor(Math.random() * max)
}