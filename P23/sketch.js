var paper, ball
var box1,box2,box3



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
Dimage = loadImage("dustbingreen.png")
}

function setup() {
engine = Engine.create()
world = engine.world

	createCanvas(850, 700);
  






	paper = new Paper(100,300,57)	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("red")

 
	

	//Create the Bodies Here.



	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	 box1 = Bodies.rectangle(600,620,20,120, {isStatic:true});
	 World.add(world, box1);

	 box2 = Bodies.rectangle(700,680,200,20, {isStatic:true});
	 World.add(world, box2);

	 box3 = Bodies.rectangle(800,620,20,120, {isStatic:true});
	 World.add(world, box3);
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  paper.display() 
  fill("pink")
  rectMode(CENTER)
  rect(600,620,20,120)
  rect(700,680,200,20)
  rect(800,620,20,120)
 imageMode(CENTER)
 image(Dimage,700,650,230,213)
}


function keyPressed() {

if (keyCode === UP_ARROW) {

Matter.Body.applyForce(paper.body,paper.body.position,{x:125,y:-125})

}

}
