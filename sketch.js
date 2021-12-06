var caixa; 
function setup() {
  createCanvas(900,900);
  caixa=createSprite(200,200,100,100)

}

function draw() 
{
  background("green");
drawSprites()
if (keyDown("W")) {
  caixa.y=caixa.y-5

}

if (keyDown("D")) {
  caixa.x=caixa.x+5

}
if (keyDown("S")) {
  caixa.y=caixa.y+5

}

if (keyDown("A")) {
  caixa.x=caixa.x-5

}













}





