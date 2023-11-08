let ball, floor;
let base;
let y=0; 
let basee; 

function setup() {
    let canvas= new Canvas(5000,5000,"fullsrceen");
    world.gravity.y=10;
    noLoop();
    

    new Sprite(250,100, [
        [100,40],
        [-100,40],
        [0,-80]
    ]);

    new Sprite([[8,8],[140,192],[200,90],[8,8]]);

    ball = new Sprite();
    ball.diameter = 300; 
    ball.y =1;
    ball.friction =10;

    ball = new Sprite();
    ball.diameter = 100; 
    ball.y =1;
    ball.x= 100

    ball = new Sprite();
    ball.diameter = 100; 
    ball.y =-1000;
    ball.x =100

    base = new Sprite();
    base.width = 100;
    base.height = 100;
    base.y= 5000 ;

    base = new Sprite();
    base.width = 100;
    base.height = 100;
    base.x=300;
    base.y= 1;

    floor= new Sprite();
    floor.y=5000;
    floor.x=3000;
    floor.w=5000;
    floor.h=500;
    floor.collider= 'static';
    floor.drag = 0;
    floor.bounciness=0;

    floor= new Sprite();
    floor.y=5000;
    floor.x=700;
    floor.w=500;
    floor.h=5000;
    floor.collider= 'static';

    basee = new Sprite(); 
    basee.width = 500;
    basee.height = 500;
    basee.y= -10000;
    basee.rotation=45;
   
}

function draw() {
    clear();
    y=y+0.1;
    if(y>-5000){
        y=100;
    }
     
}

function mouseReleased(){
    loop();
}
