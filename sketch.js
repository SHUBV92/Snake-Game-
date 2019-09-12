var s;


function setup() {
createCanvas(600, 600);
s = new Snake ();

}

function draw() {
  background(51);
  s.update();
  s.show();
}

function keyPressed () {
if (keyCode === UP_ARROW){
  s.dir(0, -1);
} else if (keyCode === DOWN_ARROW){
  s.dir(0, 1);
} else if (keyCode === RIGHT_ARROW){
  s.dir(1,0);
}else if (keyCode === LEFT_ARROW){
  s.dir(-1, 0);
  }
}


function Snake() {
// (this) is a constructor function

  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;

this.update = function() {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }
this.show = function ()     {
fill(255);
rect(this.x, this.y, 10, 10)

}


}
