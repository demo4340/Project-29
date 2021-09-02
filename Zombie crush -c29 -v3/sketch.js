const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground, leftWall, rightWall;
var bridge, jointPoint, jointLink;
var stoneArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new Base(width/2, height-10, width, 10);
  leftWall = new Base(10, height/2, 200, 200);
  rightWall = new Base(width-30, height/2, 200, 200);
  jointPoint = new Base(110, height/2, 10, 50);
  bridge = new Bridge(30, {x : width, y : height/2});

  Matter.Composite.add(bridge.body, jointPoint);
  jointLink = new Link(bridge, jointPoint);
  
  for(var i = 0; i <= 8; i++){

    var x = random (width/2 - 200, width/2 + 300);
    var y = random (-10, 140);
    var stoneObject = new Stones(x, y);
    stoneArray.push(stoneObject);

  }

}

function draw() {
  background(0);
  Engine.update(engine);
  fill ("yellow");
  ground.display();
  fill ("pink");
  leftWall.display();
  rightWall.display();
  fill ("green");
  jointPoint.display();
  bridge.show();
  
  for(var i = 0; i <= 8; i++){
    
    fill ("#00F7F7");
    stoneArray[i].display();
  
  }

}
