class Paper
{
    constructor(x,y,radius)
{

    var options=
    {
        isStatic:false,
        density:1.2,
        restitution:0.3,
        friction:0.5
    }

    this.radius=radius
    this.image = loadImage("Sprites/paper.png");
    this.body=Bodies.circle(x,y,this.radius,options);
    World.add(world,this.body)
}

display()
{   
  push() 
  translate(this.body.position.x,this.body.position.y)
  rotate(this.body.angle)
  imageMode(CENTER);
  image(this.image,0,0,50,50)
  pop()
}
}