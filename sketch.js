const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var particles = [];
var plinkos = [];
var divisions = [];
var engine, world;
var divisionHeight = 300;


function setup() {
  var canvas = createCanvas(480,800)
  createCanvas(800,800);
  engine = Engine.create()
  world = engine.world
  ground = new Ground(400,790,800,20)
  for( var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for(var j = 40; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j,75,10));
  }
  for(var j = 15; j <=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,175,10)); 
  }
  console.log(plinkos)
  for(var j = 25; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j,275,10));
  }
}

function draw() {
  Engine.update(engine)
  background(0);  
  if(frameCount %60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10,10))
  }
  for(var j = 0; j < particles.length; j++) {

   particles[j].display();
  }

  for(var k = 0; k < divisions.length; k++) {

    divisions[k].display();

  }
  for(var j = 0; j < plinkos.length; j++) {

    plinkos[j].display();
    ground.display();
  }
}

