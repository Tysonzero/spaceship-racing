var spaceship = {
  //whether the spaceship is accelerating
  accelerate:false,
  
  //whether the spaceship is turning
  turn:{
    left:false,
    right:false,
  },
  
  //direction of the spaceship in radians
  direction:0,
  
  //speed of the spaceship in pixels per frame
  speed:{
    x:0,
    y:0,
  },
  
  //position of the spaceship in pixels
  pos:{
    x:0,
    y:0,
  },
  
  //variable manipulation
  update:function() {
    if(this.accelerate) {
      this.speed.x += Math.cos(this.direction);
      this.speed.y += Math.sin(this.direction);
    }
    
    this.pos.x += this.speed.x;
    this.pos.y += this.speed.y;
  },
  
  //drawing to screen
  draw:function() {
  
  },
}