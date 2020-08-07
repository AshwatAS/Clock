class Clockh{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution:0,
            density:1
        }
       
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        //var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        angleMode(DEGREES);
        var scAngle=map(h,0,24,0,360); 
        rotate(scAngle);
        //rectMode(CENTER);
        fill("green");
        rect(0,0,this.width,this.height); 
       // this.body.position.x = mouseX;
       // this.body.position.y = mouseY;
        pop();
    }
}