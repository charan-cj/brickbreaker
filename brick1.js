class Brick1 {
    constructor(x, y, width, height) {
        var options = {
            // friction:1,
            restitution: 0,
            isStatic: false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visiblity = 255;
        World.add(world, this.body);
        // console.log(this.body,speed)
    }
    display() {
        fill("lightblue");
            push();
            translate(this.body.position.x, this.body.position.y);
            rectMode(CENTER);
            
            rect(0, 0, this.width, this.height);
            pop();
        if (this.body.speed > 3) {
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255, this.Visiblity);
            
            pop();
        }
        if (this.body.speed > 3&&this.body.y>400&&this.body.y<500) {
        score = score+1;
        }
        // else {
        //     World.remove(world, this.body);
        //     push();
        // //     // fill("lightblue");
        //     this.Visiblity = this.Visiblity - 5;
        //     tint(255, this.Visiblity);
        //     rect( this.body.position.x, this.body.position.y, 50, 50);
        //     pop();
        // }
       
    }
}