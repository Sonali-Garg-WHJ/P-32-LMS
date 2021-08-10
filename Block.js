class Block{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.4,
            friction :0.0,
            // set the isStatic property 
            isStatic : false
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

        // new code for score:

        this.Visiblity = 255;
      }
     /* display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }*/

      display(){
        if(this.body.speed < 3){
          var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
         }
         else{
           World.remove(world, this.body);
           push();
           this.Visiblity = this.Visiblity - 5;
           tint(255,this.Visiblity);
           rect(0, 0, 50, 50);
           pop();
         }
      }

      score(){
        console.log(this.Visiblity); 
        console.log("score"+ score);
        
        if(this.Visiblity < 0 && this.Visiblity > -1005){
          score ++;
          console.log("score"+ score);
        }
      }
}
