const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ball;
var blower;
var box;
var ground



function setup() {
  createCanvas(800,500);

  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  
  ball = new Ball(650,200,60,60)
  blower = new Blower(500,250,300,30)

  box = new Blower(650,200,150,150)

  ground = new Blower(400,500,800,10)
  ground2 = new Blower(650,210,150,150)
  ground3 = new Blower(1,250,10,500)

  ground4 = new Blower(70,400,100,10)
  ground5 = new Blower(20,350,10,100)
  ground6 = new Blower(120,350,10,100)

  
  button = createButton("Click to Blow Left");
  button.position(400,350)
  button.class("blowButton")
  button.mousePressed(blow)





}

function draw() {
  background("red");
  Engine.update(engine); 
  ball.show() 
  blower.show()
  box.show()
  ground.show()
  ground2.show()
  ground3.show()
  ground4.show()
  ground5.show()
  ground6.show()

}

function blow(){
  Matter.Body.applyForce(ball.body, {x:0,y:0}, {x:-0.02,y:0});
}
