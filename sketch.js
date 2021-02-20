
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(375,400)
	bob2 = new Bob(455,400)
	bob3 = new Bob(295,400)
	bob4 = new Bob(535,400)
	bob5 = new Bob(215,400)
	ground1 = new Ground(375,100,400,50)
	chain1 = new Chain(bob1.body,{x:370,y:130})
	chain2 = new Chain(bob2.body,{x:450,y:130})
	chain3 = new Chain(bob3.body,{x:290,y:130})
	chain4 = new Chain(bob4.body,{x:530,y:130})
	chain5 = new Chain(bob5.body,{x:210,y:130})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground1.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob4.body,bob4.body.position,{x:1390,y:-395})
	}
}

