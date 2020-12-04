const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var division = [];
var particle = [];
var plinko = [];

var score = 0;

var turn = 0;

var divisionHeight = 300;

function preload()
{
    
}

function setup() {
    createCanvas(480, 800);

    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    ground1 = new Ground(240,height,1000,10);
    ground2 = new Ground(480,470,10,10000);

    division1 = new Division(1,715);
    division2 = new Division(1+59,715);
    division3 = new Division(1+59+59,715);
    division4 = new Division(1+59+59+59,715);
    division5 = new Division(1+59+59+59+59,715);
    division6 = new Division(1+59+59+59+59+59,715);
    division7 = new Division(1+59+59+59+59+59+59,715);
    division8 = new Division(1+59+59+59+59+59+59+59,715);
    division9 = new Division(1+59+59+59+59+59+59+59+590,715);

    // for(var k = 0 ; k <= width ; k = k+80){
    //   division.push(new Division(k,height - divisionHeight/2,divisionHeight));
    // }

    // for(var j = 40; j <= width ; j = j+50){
    //   plinko.push(new Plinko(j , 75));
    // }

    // for(var j = 15; j <= width - 10 ; j = j+50){
    //   plinko.push(new Plinko(j , 175));
    // }

    // for(var j = 40; j <= width - 20; j = j+50){
    //   plinko.push(new Plinko(j , 75));
    // }

    // for(var j = 15; j <= width - 30; j = j+50){
    //   plinko.push(new Plinko(j , 175));
    // }

    
    if(frameCount % 60 === 0){
      particle.push(new Particle(random(width/2-10,width/2+10),10,10));
    }


    if(frameCount % 60 === 0){
      particle.push(new Particle(random(width/2-10,width/2+10),10,10));
    }

    if(frameCount % 60 === 0){
      particle.push(new Particle(random(width/2-10,width/2+10),10,10));
    }

    if(frameCount % 60 === 0){
      particle.push(new Particle(random(width/2-10,width/2+10),10,10));
    }

    if(frameCount % 60 === 0){
      particle.push(new Particle(random(width/2-10,width/2+10),10,10));
    }

    plinko1 = new Plinko(75,75);
    plinko2 = new Plinko(75+75,75);
    plinko3 = new Plinko(75+75+75,75);
    plinko4 = new Plinko(75+75+75+75,75);
    plinko5 = new Plinko(75+75+75+75+75,75);
    plinko6 = new Plinko(75+75+75+75+75+75,75);
    plinko7 = new Plinko(0,75);

    plinko8 = new Plinko(37.5,75+75);
    plinko9 = new Plinko(37.5+75,75+75);
    plinko10 = new Plinko(37.5+75+75,75+75);
    plinko11 = new Plinko(37.5+75+75+75,75+75);
    plinko12 = new Plinko(37.5+75+75+75+75,75+75);
    plinko13 = new Plinko(37.5+75+75+75+75+75,75+75);

    plinko14 = new Plinko(0,75+75+75);
    plinko15 = new Plinko(0+75,75+75+75);
    plinko16 = new Plinko(0+75+75,75+75+75);
    plinko17 = new Plinko(0+75+75+75,75+75+75);
    plinko18 = new Plinko(0+75+75+75+75,75+75+75);
    plinko19 = new Plinko(0+75+75+75+75+75,75+75+75);
    plinko20 = new Plinko(0+75+75+75+75+75+75,75+75+75);

    plinko21 = new Plinko(37.5,75+75+75+75);
    plinko22 = new Plinko(37.5+75,75+75+75+75);
    plinko23 = new Plinko(37.5+75+75,75+75+75+75);
    plinko24 = new Plinko(37.5+75+75+75,75+75+75+75);
    plinko25 = new Plinko(37.5+75+75+75+75,75+75+75+75);
    plinko26 = new Plinko(37.5+75+75+75+75+75,75+75+75+75);

    Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

  // for(var j = 0;j < particle.length ; j++){
  //   particle[j].display();
  // }

  // for(var k = 0; k < division.length;k++){
  //   division[k].display();
  // }

  for(var i = 0;i < particle.length;i++){
    particle[i].display();
  }

  for(var i = 0;i < particle.length;i++){
    particle[i].display();
  }

  for(var i = 0;i < particle.length;i++){
    particle[i].display();
  }

  for(var i = 0;i < particle.length;i++){
    particle[i].display();
  }

  for(var i = 0;i < particle.length;i++){
    particle[i].display();
  }

  fill("green"); 
  textSize(12)
  text("Score :" + score,200,200);
  
  ground1.display();
  ground2.display();
  
  division1.display();
  // division10.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  division8.display();
  division9.display();

  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();

  plinko8.display();
  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();

  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();
  plinko18.display();
  plinko19.display();
  plinko20.display();

  plinko21.display();
  plinko22.display();
  plinko23.display();
  plinko24.display();
  plinko25.display();
  plinko26.display();

  if(particle.x > 1 && particle.x < 60 && particle.y > 715){
    score = score + 200;
  }

  // particle.display();

  drawSprites();
 
}