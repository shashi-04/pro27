class Bob {
    constructor(x,y,r){
        var options = {
           isStatic : true,
           'restitution' : 0.5,
           'friction' : 0.5,
           'density' : 1.2
        }

        this.body = Bodies.circle(x,y,r,options)
        this.x = x
        this.y = y
        this.r = r

        World.add(world,this.body);
    }

    display(){
			var bobPos=this.body.position;

			push()
			translate(bobPos.x, bobPos.y);
			strokeWeight(2);
			fill("#FF00FF");
            circle(bobPos.x, bobPos.y, this.r);
            pop()   
    }
}