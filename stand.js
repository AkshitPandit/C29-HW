class Stand {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,10,200,options);
      this.width = 10;
      this.height = 200;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(189,65,66);
      rect(pos.x, pos.y, this.width, this.height);
    }
  }
