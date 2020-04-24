var wall;
var car1,car2,car3;

var car1speed=60
var car1weight=2260

var car2speed=50;
var car2weight=1522

var car3speed=45
var car3weight=3000




function setup(){
  createCanvas(400,400);
  wall=createSprite(380,200,50,300);
  car1=createSprite(300,200,40,40);
  car2=createSprite(200,150,40,40);
  car3=createSprite(100,100,40,40);
  
  
}
function draw(){
  background(0);
  car1.velocityX=2;
  car2.velocityX=3;
  car3.velocityX=2;
  

  
  
  car1.collide(wall,calculateDeformation)
  car2.collide(wall,calculateDeformation2)
  car3.collide(wall,calculateDeformation3)
  
  
  drawSprites();
}

function calculateDeformation() {
  var deformation=0.5 * car1weight * car1speed* car1speed/22509; if(deformation>180) {
    car1.shapeColor="green";
  }
  if(deformation<180 && deformation>100) {
    car1.shapeColor="red"; 
                                         }                                        
  if(deformation<100) {
    car1.shapeColor="pink";
  }
}
  


function calculateDeformation2(){
 var deformation2=0.5 * car2weight * car2speed* car2speed/22509; if(deformation2>180) {
    car2.shapeColor="green";
  }
  if(deformation2<180 && deformation2>100) {
    car2.shapeColor="red"; 
                                         }                                        
  if(deformation2<100) {
    car2.shapeColor="blue";
  }
}


  

function calculateDeformation3(){
var deformation3=0.5 * car3weight * car3speed* car3speed/22509; if(deformation3>180) {
    car3.shapeColor="green";
  }
  if(deformation3<180 && deformation3>100) {
    car3.shapeColor="red"; 
                                         }                                        
  if(deformation3<100) {
    car3.shapeColor="pink";
  }
}


  
  







