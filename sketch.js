const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var world,engine,canvas,h,m,s,scAngle,clock;
function setup() {
  canvas=createCanvas(1200,800);
  engine=Engine.create();
  world=engine.world;
  clock=new Clock(600,400,165,5);
  clock2=new Clockm(600,400,130,5);
  clock3=new Clockh(600,400,50,5);
  clockc=new Clockc(600,400,175);
}

function draw() {
  background(0); 
  clockc.display();
  clock.display();
  clock2.display();
  clock3.display();
  textSize(35);
  fill("yellow");
  text("12",580,220);
  text("3",780,400);
  text("6",590,605);
  text("9",400,395);
  h=hour();
  m=minute();
  s=second();
  console.log(h,m,s);
  fill("white");
  text(h+":"+m+":"+s,540,100);
  drawSprites();
}