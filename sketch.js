let particles = [];
let sap ;

function setup(){
    frameRate(30)
    createCanvas(500,500)
    for(let i = 0; i < 100; i++){
        particles.push(new Particle(random(width),random(height),10, color(random(255), random(255), random(255))))
    }
    console.log()
    sap = new SAP(particles);


}


function draw(){
    background(55)
    sap.update(particles)
    sap.sweep()
    for(let i = 0; i < particles.length; i++){
        particles[i].update()
        particles[i].show()
    }
    
}