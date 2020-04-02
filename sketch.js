const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world

function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world;

  circle1 = new Circle ()

  box1 = new Box (100,390,150,50);
  box2 = new Box (100,350,150,50);
box3 = new Box (200,280,100,50)

 

  //arc(50, 50, 80, 80, 0, PI + QUARTER_PI, CHORD);

}

function draw() {
  background(255);  
  Engine.update(engine);

  circle1.display();

box1.display();
box2.display();
box3.display();


  drawSprites();
}