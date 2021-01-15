const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5, roof1
var rope1,rope2,rope3, rope4,rope5;
var engine, world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

    engine = Engine.create();
	world = engine.world;

	bobDiameter=40;
    BobPositionX=width/2;
	BobPositionY=height/4+500;


	roof1=new roof(width/2,height/4,width/7,20);

	bob1=new bob(BobPositionX-bobDiameter*2,BobPositionY,bobDiameter);
	bob2=new bob(BobPositionX-bobDiameter,BobPositionY,bobDiameter);
	bob3=new bob(BobPositionX,BobPositionY,bobDiameter);
	bob4=new bob(BobPositionX+bobDiameter,BobPositionY,bobDiameter);
	bob5=new bob(BobPositionX+bobDiameter*2,BobPositionY,bobDiameter);
	
	
    rope1=new rope(bob1.body,roof1.body,-bobDiameter*2, 0)
	rope2=new rope(bob2.body,roof1.body,-bobDiameter*1, 0)
	rope3=new rope(bob3.body,roof1.body,0, 0)
	rope4=new rope(bob4.body,roof1.body,bobDiameter*1, 0)
	rope5=new rope(bob5.body,roof1.body,bobDiameter*2, 0)

	Engine.run(engine);

}


function draw() {
 
  background("lightblue");
  roof1.display();

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

  	}
}








