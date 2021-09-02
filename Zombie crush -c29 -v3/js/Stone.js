class Stones {

    constructor(x, y){

        
        this.body = Bodies.circle(x, y, 40);
        this.r = 40;
        World.add(world, this.body);

    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push ();
        translate (pos.x, pos.y);
        rotate (angle);
        ellipseMode(RADIUS);
        ellipse (0, 0, this.r, this.r);;
        pop ();

    }

}