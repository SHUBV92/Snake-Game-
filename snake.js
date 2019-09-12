function Snake() {
// (this) is a constructor function

  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];



this.eat = function(pos) {
  var d = dist(this.x, this.y, pos.x, pos.y);
  if(d < 1) {
   total
    return true;
  } else {
    return false;
  }
}

this.dir = function (x, y) {
  this.xpseed = x;
  this.speed = y;
}

this.update = function() {
    this.x = this.x + this.xspeed*scl;
    this.y = this.y + this.yspeed*scl;

    this.x = constrain(this.x, 0, width-scl);
    this.y = constrain(this.y, 0, hieght-scl);

  }
this.show = function ()     {
fill(255);
rect(this.x, this.y, scl, scl)

}
}
