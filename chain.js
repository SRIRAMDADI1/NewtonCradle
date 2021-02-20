class Chain{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.05,
            length:200,
        }
        this.pointB = pointB
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var pA = this.chain.bodyA.position
        var pB = this.pointB
        push();
        strokeWeight(4)
        stroke("white")
        line (pA.x,pA.y,pB.x,pB.y)
        pop();
    }
}