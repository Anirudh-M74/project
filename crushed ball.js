class Ellipse_123{
    constructor(x,y,w,h){
        var option={
            isStatic:false,
            restitution:2,
            friction:0.5,
            density:1.2,

        }
        this.body=Bodies.rectangle(x,y,w,h,option)
        this.w=w
        this.h=h
         this.image = loadImage("paper.png");
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        push();
        translate(pos.x,pos.y)
        imageMode(CENTER);
        image(this.image, 0, 0, this.w, this.h);
        pop();
    }
}