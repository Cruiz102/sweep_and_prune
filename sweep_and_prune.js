class SAP{
    constructor(particles){
        this.particles = particles
        this.x_axis =  particles.map((p) => p.position.x)
        console.log(this.x_axis)
        console.log(this.particles)
        this.ordenar = sortParticles(this.x_axis, this.particles)
        this.x_axis = this.ordenar[0]
        this.particles = this.ordenar[1]
        console.log(this.x_axis)
        console.log(this.particles)
        this.active = []
    }

    collision(){

        for(let i = 0; i < this.active.length; i++){
            for(let j = i + 1; j < this.active.length; j++){
                if(this.active[i].intersects(this.active[j])){
                    this.active[i].changeColor(this.active[j])
                }
            }
        }
    }
    updateActiveList(i){
        for(let j =0; j < this.active.length; j++){
            if(this.active[j].bx < this.particles[i].ax){
                this.active.shift();
            }
        }
    }

    sweep(){

        for(let i = 0; i < (this.particles.length -1); i++){
           
            if(this.particles[i].bx > this.particles[i + 1].ax ){
                this.active.push(this.particles[i])}
            this.collision()
            this.updateActiveList(i)
        }
    }
    update(particles){
        console.log(this.active.length)
        this.particles = particles
        this.x_axis =  particles.map((p) => p.position.x)
        this.ordenar = sortParticles(this.x_axis, this.particles)
        this.x_axis = this.ordenar[0]
        this.particles = this.ordenar[1]
    }
    }

    


