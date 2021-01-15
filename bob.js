class bob
{
	constructor(x,y,r)
	{
		var options={
			restitution:1,
			density:0.8
			
			}
		
		this.body=Bodies.circle(x, y, r/2, options)
		this.r=r;
		World.add(world, this.body);

	}
	display()
	{
		var pos=this.body.position;
		push()
		translate(pos.x, pos.y);
		fill(255,0,255)
		ellipse(0,0,this.r, this.r);
		pop()
			
	}

}

