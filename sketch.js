let ball, floor;
let base;
let y=0; 
let basee; 
let j;
let m;
let r;
let house,ground;

function setup() {
    let canvas= new Canvas(5000,5000,);
    world.gravity.y=5;
    noLoop();


   randomSequence();
    
    ball = new Sprite();
    ball.diameter = 400; 
    ball.y =1;
    ball.x= 1000
    ball.bounciness=1;

    ball = new Sprite();
    ball.diameter = 400; 
    ball.y =1;
    ball.x= 900
    ball.bounciness=1;

    ball = new Sprite();
    ball.diameter = 600; 
    ball.y =3000;
    ball.x= 2000;
  
    roof= new Sprite();
    roof.y=0;
    roof.x=200;
    roof.w=220000;
    roof.h=50;
    roof.collider= 'static'; 

    base = new Sprite();
    base.width = 500;
    base.height = 1000;
    base.y= 4000;
    base.x=3600;
    
    basee = new Sprite(); 
    basee.width = 500;
    basee.height = 1000;
    basee.y= 4000;
    basee.x=3100;
    basee.rotation=0; 

    j=new GlueJoint(base, basee);
   
     
    door= new Sprite();
    door.y=4250;
    door.x=3350;
    door.w=300;
    door.h=500;
 
m=new GlueJoint(base, door, basee); 

 doorr= new Sprite();
    doorr.y=3150;
    doorr.x=3580;
    doorr.w=300;
    doorr.h=710;

 triang= new Sprite(3350,3240,[
        [800,700],
        [-800,700],
        [0,-1400]
    ]);
    triang.rotation=-90;

    r=new GlueJoint(triang, doorr);

    j=new GlueJoint(base, basee, triang, door); 

    floor= new Sprite();
    floor.y=4600;
    floor.x=3350;
    floor.w=1000;
    floor.h=300;
    floor.collider= 'static';
    floor.drag = 0;


     Lwall= new Sprite();
     Lwall.y=5000;
     Lwall.x=0;
     Lwall.w=100;
     Lwall.h=50000;
     Lwall.collider= 'static';
     Lwall.drag = 0;

    bouncer= new Sprite();
    bouncer.y=6000;
    bouncer.x=1000;
    bouncer.w=2900;
    bouncer.h=500;
    bouncer.collider= 'static';
    bouncer.bounciness=10;

    floor= new Sprite();
    floor.y=5000;
    floor.x=5000;
    floor.w=500;
    floor.h=53000;
    floor.collider= 'static';

    
   
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

if(ball>=5000) {
    loop(1);
} 
     
}

function mouseReleased(){
    loop();
}
