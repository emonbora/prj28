class stone
{
    constructor(x,y,r){

        var options={
            isStatic:false,
            restituition:0,
            friction:1,
            density:1.2
        }
        this.x=x; 
        this.y=y; 
        this.r=r
        this.image=loadImage("images/stone.png")
        this.body=Bodies.circle(this.x, this.y, this.r/2, options)
    }
    display()
    {
        var stonepos=this.body.position;

        push()
        translate(stonepos.x,stonepos.y)
        rectMode(CENTER)
        strokeWeight(3);
        fill(255,0,255)
        imageMode(CENTER)
        image(this.image, 0,0,this.r*2, this.r*2)
        //ellipse(0,0,this.r,this.r);
        pop() 
    }

}