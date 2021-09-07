const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;




function preload() {
  //backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  tower = new Tower(150, 350, 160, 320 );
ground = new Ground(0, height-20, width*2, 20);

}

function draw() {
  background(189);
 

  Engine.update(engine);

  tower.display();
  ground.display()
 
}


