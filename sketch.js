var bullet;
var wall;

var speed;
var weight;

var thickness;

function setup() {
  createCanvas(800,400);
  speed = random(50,90);
  weight = random(400,1500);
  thickness = random(22,83)

  bullet = createSprite(0,200,40,40);
  bullet.velocityX = speed;
  wall = createSprite(700,200,thickness,height/2);
  
}

function draw() {
  background(255,255,255);  

if(hasCollided(bullet, wall))
{
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)

    if(damage>10)
    {
        wall.shapeColor = "red";
    }
    if(damage<10)
    {
        wall.shapeColor = "green";
    }

}
drawSprites();

}