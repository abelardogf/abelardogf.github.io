function setup() {
    createCanvas(windowWidth, windowHeight);    
  }
  
  function draw() {
    stroke(50,50);
    line(mouseX, 0, mouseX, height);
  }


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
 }