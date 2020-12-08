var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var dustbin;
var box1;
var ball1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function preload(){
	
}
function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;
	box1=new Box(400,565,200,200)
	

	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
ball1=new Ellipse_123(100,630,70,70)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  box1.display()
  ball1.display()
  drawSprites();
 
}
function keyPressed() {
 if (keyCode === UP_ARROW) { 
 
Matter.Body.applyForce(ball1.body,ball1.body.position,{x:25,y:-25}); 
 }
}
