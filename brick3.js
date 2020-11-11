class Brick3{
    constructor(x,y,width,height){
        var options = {
            // friction:1,
            restitution:0,
            isStatic:false
        }
        this.body = Bodies.rectangle(x, y, width,height ,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        fill("orange");
        push();
        translate(this.body.position.x,this.body.position.y);
        rectMode(CENTER);
        rect(0, 0,this.width,this.height);
        pop();

    }
}