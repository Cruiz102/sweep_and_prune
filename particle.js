class Particle{
    constructor(x, y, radius, color){
        this.position = createVector(x, y)
        this.velocity = createVector(random(-1, 1), random(-1, 1))
        this.radius = radius
        this.color = color
        this.ax =  this.position.x - this.radius
        this.bx = this.position.x + this.radius
        this.delta = 50;
        this.stage = 0;

    }

    update(){
        this.Walls()
        this.position.add(this.velocity)
        this.ax = this.position.x - this.radius
        this.bx = this.position.x + this.radius
    }
    show(){
        fill(this.color)
        ellipse(this.position.x, this.position.y, this.radius*2, this.radius*2);
    }
    // create a function that reversed velocity of the particle when touching a boundary
    Walls(){
        if(this.position.x < 0 || this.position.x > width){
            this.velocity.x *= -1
        }
        if(this.position.y < 0 || this.position.y > height){
            this.velocity.y *= -1
        }
    }

    



    

    // create a intersection method for the particle
    intersects(particle){
        let distance = p5.Vector.dist(this.position, particle.position)
        if(distance <= this.radius + particle.radius ){
            return  true}
        else{
        return false
        }
    }
    
    // Create a function that change the direction of the particle
    changeColor(particle, color){
        this.color = color
        particle.color = color

    }

}