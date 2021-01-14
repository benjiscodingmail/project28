
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,stone;
var mango,tree;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	 ground= createSprite(400,600,800,10)
	 tree= createSprite(600,500,40,50)

	engine = Engine.create();
	world = engine.world;

	

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  
    boy.display();
    stone.display();
    tree.display();
    string.display();

}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    stone.fly();
}

function keyPressed(){
if(keyCode===32){
boy.attach(stone.body)
}

}
