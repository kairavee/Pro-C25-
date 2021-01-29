class Dustbin
{
    constructor(x,y,w,h)
{
    var options=
    {
    isStatic:true
    }
    
    this.body=Bodies.rectangle(x,y,w,h,options);
    this.width=w;
    this.height=h;
    this.image = loadImage("Sprites/dustbingreen.png");
    World.add(world,this.body)
    
}

display()
{
    push()
    var pos=this.body.position;
    translate (pos.x,pos.y)
    rectMode(CENTER);
    fill ("white");
    rect(0,0,this.width,this.height);
    pop()
    imageMode(CENTER);
    image(this.image,492,439,220,220);
}
}