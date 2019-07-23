function Node(){
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(random(-1,1)+.5,random(-1,1)+.5);

  this.update = function(){
    this.pos.add(this.vel);
  }

  this.show = function(){
    stroke("white");
    ellipse(this.pos.x,this.pos.y,5,5);
  }

  this.bound = function(){
    if (this.pos.x > width || this.pos.x < 0){
      this.vel.x *= -1;
    }
    if (this.pos.y > height || this.pos.y < 0){
      this.vel.y *= -1;
    }
  }
}
