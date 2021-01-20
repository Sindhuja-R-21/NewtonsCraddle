
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function preload()

{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;
roof=new Roof(200,200,350,20);
	bob1=new Bob(150,500,20)
	bob2=new Bob(190,500,20);
	bob3=new Bob(230,500,20);
	bob4=new Bob(270,500,20);
	bob5=new Bob(310,500,20);
chain1=new Chain(bob1.body,roof.body,-80,0);
chain2=new Chain(bob2.body,roof.body,-40,0)
chain3=new Chain(bob3.body,roof.body,0,0);	
chain4=new Chain(bob4.body,roof.body,40,0);	
chain5=new Chain(bob5.body,roof.body,80,0);

  
}


function draw() {
  rectMode(CENTER);
  background("blue");

  Engine.update(engine);
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();

roof.display();

chain1.display();
chain2.display();
chain3.display();
chain4.display();
chain5.display();



  drawSprites();
 text("X"+mouseX+","+"Y"+mouseY,mouseX,mouseY);

}
function keyPressed() { 

	if (keyCode === UP_ARROW) {
		 Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
		} 
 }



