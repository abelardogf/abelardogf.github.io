function setup() {
    var canvas = createCanvas(windowWidth, 300);
    canvas.parent("uno");
}

function draw() {
    background(200, 0, 0);
    stroke(255);
    strokeWeight(10);
    line(width/2, height/2, mouseX, mouseY);
}