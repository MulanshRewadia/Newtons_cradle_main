class Bob 
{
    constructor(x,y,r)
    {
        var options = {
            restitution : 1,
            friction : 0,
            isStatic : false
        }
        this.body = Bodies.circle(x,y,25,options);
        this.r = 25;
        
        World.add(world,this.body);
    }
    display()
    {
      var pos = this.body.position;
      var angle = this.body.angle;
     push();
     translate(pos.x,pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("pink");
      ellipse(0,0,this.r);
      pop();
      
      
    }
}