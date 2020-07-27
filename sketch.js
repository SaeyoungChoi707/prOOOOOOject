var appState = 0;

function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(100, 200, 0);  
 // drawSprites();
 if(appState===0){
   anything();
 }
 if(appState===1){
   haha();
 }
}