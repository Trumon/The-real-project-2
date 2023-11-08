let ball, floor;
let base;
let x=0; 
let basee; 
let player, wall;

function setup(){
    new Canvas(500,100);
    wall= new Sprite(250,50,30,400, 's');
    wall.color= 'purple';
    player= new Sprite(50,50); 
}

function setup() {
    let canvas= new Canvas(5000,5000,"fullsrceen");
    world.gravity.y=30;
    noLoop();
    

    ball = new Sprite();
    ball.diameter = 300; 
    ball.y =1;

    base = new Sprite();
    base.width = 100;
    base.height = 100;
    base.y= 5000 ;

    base = new Sprite();
    base.width = 1000;
    base.height = 100;
    base.y= 1;

    floor= new Sprite();
    floor.y=5000;
    floor.w=5000;
    floor.h=500;
    floor.collider= 'static';
    floor.drag = 0;
    floor.bounciness=0;

    basee = new Sprite(); 
    basee.width = 500;
    basee.height = 500;
    basee.y= 1;
    basee.rotation=45;
   
}

function draw() {
    clear();
    x=x+0.1;
    if(x>500){
        x=0;
    }
     
}

function mousePressed(){
    noLoop();
}

function mouseReleased(){
    loop();
}
