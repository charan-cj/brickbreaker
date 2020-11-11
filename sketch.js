const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var score = 0;


function setup() {
  createCanvas(800,400);
  // createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  ground2 = new Ground(400,250);
  ground3 = new Ground(650,150);
  brick2 = new Brick1(460,230,30,50);
  brick3 = new Brick1(430,230,30,50);
  brick4 = new Brick1(400,230,30,50);
  brick5 = new Brick1(370,230,30,50);
  brick6 = new Brick1(340,230,30,50);
  brick7 = new Brick2(360,170,30,50);
  brick8 = new Brick2(390,170,30,50);
  brick9 = new Brick2(420,170,30,50);
  brick10 = new Brick2(450,170,30,50);
  brick11 = new Brick3(435 ,110,30,50);
  brick12 = new Brick3(405 ,110,30,50);
  brick13 = new Brick3(375 ,110,30,50);
  brick14 = new Brick3(675 ,110,30,50);
  brick15 = new Brick3(645 ,110,30,50);
  brick16 = new Brick3(615 ,110,30,50);
  brick17 = new Brick1(660 ,50,30,50);
  brick18 = new Brick1(630 ,50,30,50);
  ball1 = new Ball(200,200,50,50)
  rope1 = new Rope(ball1.body,{x:200,y:200})

  
} 

function draw() {
  background("lightgreen "); 
  Engine.update(engine); 
  ground2.display();
  ground3.display();
  brick2.display();
  brick3.display();
  brick4.display();
  brick5.display();
  brick6.display();
  brick7.display();
  brick8.display();
  brick9.display();
  brick10.display();
  brick11.display();
  brick12.display();
  brick13.display();
  brick14.display();
  brick15.display();
  brick16.display();
  brick17.display();
  brick18.display();
  ball1.display();
  rope1.display();
  drawSprites();
  fill("black")
  text("score = "+score,width-300,50);
//   if (brick1.y>400&&brick1.y<500){
//     score = score+1;
// }
if (brick2.y>400&&brick2.y<500){
  score = score+1;
}
if (brick3.y>400&&brick3.y<500){
  score = score+1;
}
if (brick4.y>400&&brick4.y<500){
  score = score+1;
}

if (brick5.y>400&&brick5.y<500){
  score = score+1;
}
if (brick6.y>400&&brick6.y<500){
  score = score+1;
}
if (brick7.y>400&&brick7.y<500){
  score = score+1;
}


}
function mouseDragged(){
	Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})

}
function mouseReleased(){
	rope1.fly();
}
function keyPressed(){
  if(keyCode === 32){
     rope1.attach(ball1.body);
     Matter.Body.setPosition(ball1.body,{x:200,y:200})
  }
}