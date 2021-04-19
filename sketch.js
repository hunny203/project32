const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var polygon;
var slingShot;
var polygon_img , backgroundImg;
var bg = "image/bg1.png";

function preload(){
  getBackgroundImage();
  polygon_img=loadImage("polygon.png");
}


function setup() {
  createCanvas(1200,700);
  
  engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    ground = new Ground(600,height,1200,20);
    base1  = new Ground(550,400,280,20);
    base2 = new Ground(950,550,250,20);

    
    
  block1 = new Box(450,380,30,40);
  block2 = new Box(480,380,30,40);
  block3 = new Box(510,380,30,40);
  block4 = new Box(540,380,30,40);
  block5 = new Box(570,380,30,40);
  block6 = new Box(600,380,30,40);
  block7 = new Box(630,380,30,40);

  block8 = new Box(480,340,30,40);
  block9= new Box(510,340,30,40);
  block10= new Box(540,340,30,40);
  block11= new Box(570,340,30,40);
  block12 = new Box(600,340,30,40);

  block13 = new Box(510,300,30,40);
  block14 = new Box(540,300,30,40);
  block15 = new Box(570,300,30,40);

  block16 = new Box(540,260,30,40);

  Block1 = new Box(910,530,30,40);
  Block2 = new Box(940,530,30,40 );
  Block3 = new Box(970,530,30,40);
  Block4 = new Box(1000,530,30,40);
  Block5 = new Box(880,530,30,40);

  
  Block6 = new Box(910,490,30,40 );
  Block7 = new Box(940,490,30,40);
  Block8 = new Box(970,490,30,40);

  Block9 = new Box(940,460,30,40);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  slingShot = new SlingShot(this.polygon,{x:200,y:200});


}

function draw() {
  //background("lightblue");  
 // Engine.update(engine);

 if(backgroundImg)
    background(backgroundImg);

  text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("lightyellow");
  text("Drag the polygon to destroy the blocks",300,30);
  textSize(20);
  text("Press Space to get a second Chance to Play!!",720 ,650);
  
 
  ground.display();
  base1.display();
  base2.display();
  fill("grey");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill("green")
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill("pink")
  block13.display();
  block14.display();
  block15.display();

  fill("orange")
  block16.display();
  Block1.display();
  Block2.display();
  Block3.display();
  Block4.display();
  Block5.display();
  
  fill("pink");
  Block6.display();
  Block7.display();
  Block8.display();

  fill("green");
Block9.display();

imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();
  

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon);
  }
}

async function getBackgroundImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11, 13);
 

  if (hour >= 06 && hour <= 18) {
    bg = "image/bg1.png";
  } else {
    bg = "image/bg2.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}