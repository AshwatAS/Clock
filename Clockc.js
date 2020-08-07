class Clockc{
    constructor(x,y,r){
        var options={
            restitution:0,
            isStatic:true,
            density:1
        }
        this.body=Bodies.circle(x,y,r,options);
        this.r=r;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        ellipseMode(RADIUS);
        fill("white");
        ellipse(pos.x,pos.y,this.r,this.r);
    }
}