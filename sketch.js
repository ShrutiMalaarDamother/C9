var rose; 

function setup() {
  createCanvas(400,400);
  rose = createSprite(200,200,120,100);
  rose.shapeColor = "white";
console.log("Hello");
}

function draw() 
{
  background(30);
  drawSprites(); 
  text("hello test",100,100);
  console.log("hello draw")
}




