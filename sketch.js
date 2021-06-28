const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;
var box1;
var back;

var engine, world;
var ground, ball;
function preload(){

   back = loadImage("gamingbackground2.png");

}
function setup() {
    var canvas = createCanvas(1200, 800);
    engine = Engine.create();
    world = engine.world;
    monster1=new Monster(1100,500,500);
    ball1 = new Ball(200, 500,400,300);
    ground = new Ground(400, 700, 1500, 20)
    box1 = new Box(550, 200, 50, 50);
    box2 = new Box(550, 200, 50, 50);
    box3 = new Box(550, 200, 50, 50);
    box4 = new Box(550, 200, 50, 50);
    box5 = new Box(550, 200, 50, 50);
    box6 = new Box(550, 200, 50, 50);
    box7 = new Box(550, 200, 50, 50);
    box8 = new Box(550, 200, 50, 50);
    box9 = new Box(550, 200, 50, 50);
    box10 = new Box(550, 200, 50, 50);
    box11 = new Box(650, 200, 50, 50);
    box12 = new Box(650, 200, 50, 50);
    box13 = new Box(650, 200, 50, 50);
    box14 = new Box(650, 200, 50, 50);
    box15 = new Box(650, 200, 50, 50);
    box16 = new Box(650, 200, 50, 50);
    box17 = new Box(650, 200, 50, 50);
    box18 = new Box(650, 200, 50, 50);
    box19 = new Box(650, 200, 50, 50);
    box20 = new Box(650, 200, 50, 50);
    box24 = new Box(650, 200, 50, 50);
    box25 = new Box(550, 200, 50, 50);
    box26 = new Box(650, 200, 50, 50);
    box27 = new Box(550, 200, 50, 50);
    box28 = new Box(650, 200, 50, 50);
    box29 = new Box(550, 200, 50, 50);
    box30 = new Box(650, 200, 50, 50);
    box31 = new Box(450, 200, 50, 50);
    box32 = new Box(450, 200, 50, 50);
    box33 = new Box(450, 200, 50, 50);
    box34 = new Box(450, 200, 50, 50);
    box35 = new Box(450, 200, 50, 50);
    box36 = new Box(770, 200, 50, 50);
    box37 = new Box(770, 200, 50, 50);
    box38 = new Box(770, 200, 50, 50);
    box39 = new Box(770, 200, 50, 50);
    box40 = new Box(770, 200, 50, 50);
    box41 = new Box(550, 200, 50, 50);
    box42 = new Box(550, 200, 50, 50);
    box43 = new Box(550, 200, 50, 50);
    box44 = new Box(550, 200, 50, 50);
    box45 = new Box(550, 200, 50, 50);
    
    box50 = new Box(550, 200, 50, 50);
    box51 = new Box(650, 200, 50, 50);
    box52 = new Box(650, 200, 50, 50);
    box53 = new Box(650, 200, 50, 50);
    box54 = new Box(650, 200, 50, 50);
    box55 = new Box(650, 200, 50, 50);
    
    chain1=new Rope(ball1.body,{x:200,y:100})

}

function draw() {
    background(back);
    Engine.update(engine);

    box1.display();

    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    box33.display();
    box34.display();
    box35.display();
    box36.display();
    box37.display();
    box38.display();
    box39.display();
    box40.display();
    box41.display();
    box42.display();
    box43.display();
    box44.display();
    box45.display();
   
    box50.display();
    box51.display();
    box52.display();
    box53.display();
    box54.display();
    box55.display();
    
    box40.display();
    box40.display();
    box40.display();
    box40.display();
    box40.display();
    box40.display();
    
    ball1.display();
    ground.display();
    chain1.display();
    monster1.display();
}
function mouseDragged(){

Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})


}