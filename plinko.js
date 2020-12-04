class Plinko{
    constructor(x,y){
          var options = {
              isStatic: true,
              density:1,
              friction:1,
              restitution : 1
          }
          this.body = Bodies.circle(x,y,10,options);
          this.radius = 10;
          World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        ellipseMode(RADIUS);
        fill("white");
        ellipse(0,0,this.radius);
        pop();
    }
}