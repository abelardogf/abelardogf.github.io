function setup() {
    var canvas = createCanvas(windowWidth,windowHeight);  
    canvas.parent("processing");
    background(255);  
  }
  
function draw() {
    stroke(50,50);
    line(mouseX, 0, mouseX, height);
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
 }