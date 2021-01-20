class Bob{
    constructor(x,y,radius){
        
        var options={
            isStatic:false,
            restitution: 1.0,
            friction: 0,
            density: 1.0

           
        }
        this.radius=radius;
        this.body=Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        stroke("black");
        fill("pink");
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
    
}
    

