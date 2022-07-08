let particles = [];
let sap ;
let n = prompt("How many Particles?");
function setup(){
    frameRate(30)
    createCanvas(700,700)
    for(let i = 0; i < n; i++){
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