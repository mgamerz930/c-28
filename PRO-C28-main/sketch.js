
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var tree_img;

function preload() {
	
	tree_img = loadImage('tree.png');
	boy_img = loadImage('boy.png');

}

function setup() {

	createCanvas(1500, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(750, 600, 1500, 20);
	boy = new Boy(350, 500, 300, 300);
	stone = new Stone(200, 350, 50, 50);
	line1= new Line1(stone.body,{x:300,y:500});
	mango= new Mango (1000,200,60)

	Engine.run(engine);
  
}

function draw() {
	
  rectMode(CENTER);
  background("lightBlue");
  image(tree_img, 800, 50,600, 600 );
  image(boy_img, 200, 300, 300, 400);
  ground.display();

  boy.display();
  stone.display();
  mango.display();
  line1.display();
  detectollision(stone,mango)
  drawSprites();
 
}
function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	line1.fly();
    // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:235, y:420}) 
	  line1.attach(stone.body);
	}
  }

  function detectollision(stone,mango){
	/*var collision = Matter.SAT.collides(stone,mango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition=mango.body.position
  stoneBodyPosition=stone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
	if(distance<=mango.r+stone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(mango.body,false);
    }

  }