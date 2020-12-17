function setup() {
    createCanvas(640,480);
}

function draw() {
    background(150,150,150);
    ellipseMode(CENTER);
    rectMode(CENTER);
    
    //body
    fill(250,0,0);
    rect(240,145,20,100);
    
    // head
    fill(0,0,255);
    ellipse(240,115,60,60);

    //Eyes
    fill(0,255,0);
    ellipse(221,115,16,32);
    ellipse(259,115,16,32);
    
    // legs
    line(230,195,220,205);
    line(250,195,260,205);
    
}