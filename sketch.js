let ball, floor;
let base;
let y=0; 
let basee; 
let turtle, balls;
let house,ground;

function setup() {
    let canvas= new Canvas(5000,5000,);
    world.gravity.y=5;
    noLoop();
    
   house = new Sprite(16, 100,8);
   house.bounciness=1;


   randomSequence();

    new Sprite(500,1000, [
        [100,40],
        [-100,40],
        [0,-80]
    ]);
    Sprite.bounciness=1; 

    new Sprite(1200,1200, [
        [100,40],
        [-100,40],
        [0,-80]
    ]);
    Sprite.bounciness=1;

    new Sprite(1200,1200, [
        [100,40],
        [-100,40],
        [0,-80]
    ]);
    Sprite.bounciness=1;

    new Sprite(1200,1200, [
        [100,40],
        [-100,40],
        [0,-80]
    ]);
    Sprite.bounciness=1;

    new Sprite(700,3000, [
        [100,40],
        [-100,40],
        [0,-80]
    ]);
    Sprite.bounciness=1;

    new Sprite(550,2000, [
        [100,40],
        [-100,40],
        [0,-80]
    ]);
    Sprite.bounciness=1;

     new Sprite(1000,100, [
        [300,80],
        [-300,80],
        [0,-160]
    ]);
    Sprite.bounciness=1;


    new Sprite([[8,8],[142,192],[300,90],[8,8]]);
    Sprite.bounciness=1;

    ball = new Sprite();
    ball.diameter = 300; 
    ball.y =1;
    ball.friction =10;
    ball.bounciness=1;
    ball.x= 800;

    ball = new Sprite();
    ball.diameter = 400; 
    ball.y =1;
    ball.x= 100
    ball.bounciness=1;

    ball = new Sprite();
    ball.diameter = 400; 
    ball.y =1;
    ball.x= 100
    ball.bounciness=1;

    ball = new Sprite();
    ball.diameter = 400; 
    ball.y =1;
    ball.x= 100
    ball.bounciness=1;

    ball = new Sprite();
    ball.diameter = 400; 
    ball.y =1;
    ball.x= 100
    ball.bounciness=1;

    ball = new Sprite();
    ball.diameter = 400; 
    ball.y =1;
    ball.x= 100
    ball.bounciness=5;

    ball = new Sprite();
    ball.diameter = 100; 
    ball.y =1;
    ball.x= 100
    ball.bounciness=1;

    ball = new Sprite();
    ball.diameter = 100; 
    ball.y =700;
    ball.x =600
    ball.bounciness=1; 

    base = new Sprite();
    base.width = 100;
    base.height = 100;
    base.y= 500;
    ball.bounciness=1; 

    base = new Sprite();
    base.width = 100;
    base.height = 100;
    base.x=300;
    base.y= 1;
    base.x= 200;
    ball.bounciness=1; 

    floor= new Sprite();
    floor.y=5000;
    floor.x=4900;
    floor.w=5000;
    floor.h=500;
    floor.collider= 'static';
    floor.drag = 0;
    floor.bounciness=0;

    roof= new Sprite();
    roof.y=0;
    roof.x=200;
    roof.w=220000;
    roof.h=50;
    roof.collider= 'static';


    door= new Sprite();
    door.y=600;
    door.x=200;
    door.w=300;
    door.h=500;

    door= new Sprite();
    door.y=600;
    door.x=200;
    door.w=300;
    door.h=500;

    door= new Sprite();
    door.y=600;
    door.x=200;
    door.w=300;
    door.h=500;

    door= new Sprite();
    door.y=700;
    door.x=20;
    door.w=300;
    door.h=500;


     Lwall= new Sprite();
     Lwall.y=5000;
     Lwall.x=0;
     Lwall.w=100;
     Lwall.h=50000;
     Lwall.collider= 'static';
     Lwall.drag = 0;

    bouncer= new Sprite();
    bouncer.y=5000;
    bouncer.x=1000;
    bouncer.w=2900;
    bouncer.h=500;
    bouncer.collider= 'static';
    bouncer.bounciness=10;

    floor= new Sprite();
    floor.y=5000;
    floor.x=2590;
    floor.w=500;
    floor.h=53000;
    floor.collider= 'static';

    basee = new Sprite(); 
    basee.width = 500;
    basee.height = 500;
    basee.y= 500;
    basee.x=400;
    basee.rotation=45;
   
}

async function randomSequence() {
    let b = random(0, width);
    let c = random(0, height);
    await turtle.rotateTo(b,c,5);
    await turtle.moveTo(b,c,30);
    randomSequence();
}

function draw() {
    clear();
     
}

function mouseReleased(){
    loop();
}
