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
    //increases speed in direction of spaceship if accelerate is true
    if(this.accelerate) {
      this.speed.x += Math.cos(this.direction);
      this.speed.y += Math.sin(this.direction);
    }
    
    //increases position by speed
    this.pos.x += this.speed.x;
    this.pos.y += this.speed.y;
    
    //rotates left when turn.left is true
    if(this.turn.left) {
      this.direction -= Math.PI / 120;
    }
    
    //rotates right when turn.right is true
    if(this.turn.right) {
      this.direction += Math.PI / 120;
    }
  },
  
  //drawing to screen
  draw:function() {
		game.ctx.beginPath();
		game.ctx.fillStyle="#0000FF"; //fill color
		game.ctx.strokeStyle="#0000FF"; //edge color
		game.ctx.arc(this.pos.x, this.pos.y, 20, 0, 2*Math.PI) //circle position
		game.ctx.fill();
		game.ctx.stroke();
		game.ctx.closePath();
  },
}