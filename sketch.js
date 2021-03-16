
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var ground1;

function setup() {
	createCanvas(1600, 600);
	rectMode(CENTER);

   engine = Engine.create();
	world = engine.world;

	paper1=new Paper(200,450,40);
	ground1=new Ground(width/2,670,width,20)

   //Create the Bodies Here.
    Engine.run(engine);
  
}
function draw() {
  rectMode(CENTER);
  background(0);
  
paper1.display();
ground1.display();

 
}



