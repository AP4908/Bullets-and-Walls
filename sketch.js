var bullet, wall;
var speed, weight;
var thickness;



function setup() {
  createCanvas(1600,400);

  speed=random(233, 321);
  weight=random(30, 52);
  thickness = random(22, 83);

  bullet = createSprite(50, 200, 30, 10);
  wall = createSprite(1200, 200, thickness, 200);
  wall.shapeColor = (80, 80, 80);
  bullet.velocityX = 150;
}

function draw() {
  background(255,255,255);  
  drawSprites();


  if(hasCollided(bullet, wall)) {
    
    bullet.velocityX = 0;
     
    var damage = 0.5 *weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){

      wall.shapeColor = color(255, 0, 0);
    }

    if(damage<=10){

      wall.shapeColor = color(0, 255, 0);
    }

    
  }
}


function hasCollided(lbullet, lwall) {

  bulletRightEdge = lbullet.x +lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge) {
    

    return true;
  
  } else{

    return false;
  }
}

