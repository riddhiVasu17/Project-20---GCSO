
//background and its image
var bg, garage;

//objects and their images
var car1;
var carImage, carred, caryellow, cargreen;
var wall1, wallImage;

//to store speed and weight
var speed, weight;


function preload() {
  //To Load Images

  carImage = loadImage("car_blue.png");
  wallImage = loadImage("wall.png");
  carred = loadImage("car_red.png");
  caryellow = loadImage("car_yellow.png");
  cargreen = loadImage("car_green.png");
  bg = loadImage("garage.jpg");
}


function setup() {
  //create canvas
  createCanvas(1520, 800);
  
  //assign value to speed and weight
  speed = random(-55, -130);
  weight = random(400, 1500);

  //Create Objects

  //background
  garage = createSprite(800, 350, 50, 50);
  garage.addImage(bg);
  garage.scale = (2.8);

  //car
  car1 = createSprite(1450, 600, 50, 50);
  car1.addImage(carImage);
  car1.scale = (1);
  car1.velocityX = speed;
  car1.setCollider("rectangle", 0, 0, 200, 100);

  //wall
  wall1 = createSprite(80, 550, 20, 150);
  wall1.addImage(wallImage);
  wall1.scale = (0.8);
  wall1.setCollider("rectangle", 0, 0, 100, 300);
  
}


function draw() {
  //make the background white
  background("white");

  //make the depth of wall less than car
  wall1.depth = car1.depth;
  car1.depth = car1.depth + 1;

  //to calculate the deformation of car
  detectDeformation(car1, wall1);

  //to display created sprites
  drawSprites();
  
}


function detectDeformation(object1, object2) {
  
  //declare the deformation
  var deformation = 0.5 * weight * speed * speed/22509;

//perform in spefic speed
if (speed > 70) {
 
  //when the car and wall collide, change the colour according to deformation
  if (object1.x-object2.x < (object2.width+object1.width)/4 + 120) {
    
    //stop the moving and collided object
    object1.velocityX = 0;

   if (deformation > 180) {
    object1.addImage(carred);
    object1.x = 250;
   }

   if (deformation < 180 && deformation > 100) {
    object1.addImage(caryellow);
    object1.x = 220;
  }

  if (deformation < 100) {
    object1.addImage(cargreen);
    object1.x = 250;

  }

 }
  
}

//perform in spefic speed
if (speed < 70) {

  //when the car and wall collide, change the colour according to deformation
  if (object1.x-object2.x < (object2.width+object1.width)/4 + 70) {

  //stop the moving and collided object
  object1.velocityX = 0;

   if (deformation > 180) {
    object1.addImage(carred);
    object1.x = 250;
   }

   if (deformation < 180 && deformation > 100) {
    object1.addImage(caryellow);
    object1.x = 220;
  }

  if (deformation < 100) {
    object1.addImage(cargreen);
    object1.x = 250;

  }

 }
  
}

}