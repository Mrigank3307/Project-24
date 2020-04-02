class Circle {
    constructor() {
     
//x, y, width, height

        var options = {
            isStatic:true
        }
        this.body = Bodies.circle(100, 340, 20 ,options);
        World.add(world, this.body);
      }
      display(){

     //  circleMode(CENTER);
        circle(100, 310, 150, 20, 0, PI + QUARTER_PI, CHORD);

        fill ("white");

        stroke ("black")
      }
    }