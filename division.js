class Division{
    constructor(x,y){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,10,150,options);
        this.width=  10;
        this.height = 150;
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rectMode(CENTER);
        fill("white");
        rect(0,0,this.width,this.height);
        pop();
    }
}