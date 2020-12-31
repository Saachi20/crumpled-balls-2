var options={
	isStatic:false,
	restituiton:0.3,
	friction:0.5,
	density:1.2
}
var dustbin1,dustbin2,dustbin3;
var circle;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
dustbin1=createSprite(390,650,130,20);
dustbin2=createSprite(450,610,20,100);
dustbin3=createSprite(320,610,20,100);
circle=createSprite(375,210,35,35);

	engine = Engine.create();
	world = engine.world;

	Matter.Bodies.circle(40,150, 180/2, [Matter.body], [2]);



	Engine.run(engine);
  
}
function keyPressed()
{
if(keyCode === UP_ARROW)
{
  Matter.Body.applyForce(paperObject.body,paperObject.body,posistion,{x:85,y:-85});
}
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



