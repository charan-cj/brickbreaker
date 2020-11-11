class Ground{
    constructor(x,y){
        var options = {
            restitution:0,
            isStatic:true,
        }
        this.body = Bodies.rectangle(x, y, 200,10, options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rectMode(CENTER);
        rect(0, 0, 200,10);
        pop();

    }
}