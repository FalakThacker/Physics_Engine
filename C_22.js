const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var rect1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    var rect1_options ={
        restitution: 1
    }

   ground= Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);

   rect1= Bodies.rectangle(200,200,50,50,rect1_options);
   World.add(world,rect1)


    console.log(ground);
    console.log(rect);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    rect(rect1.position.x,rect1.position.y,50,50);
}
