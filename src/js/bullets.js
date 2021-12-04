let dy = 10;
let speedTime = 400;
let interval_;

//class for firing 
class bullet {

    //a constructor that contains the position and radius followed with the
    //dy velocity
    constructor() {
        this.x = Mouse.x;
        this.y = Mouse.y;
        this.radius = 5;
        this.dy = dy;
    }


    //function for drawing the bullets
    draw() {
        c.beginPath();
        c.fillStyle = "white";
        c.shadowBlur = 14;
        c.shadowColor = "blue";
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        // c.arc(this.x + 10, this.y, this.radius, 0, Math.PI * 2, false);
        // c.arc(this.x - 10, this.y, this.radius, 0, Math.PI * 2, false);

        c.fill();



    }

    update() {
        this.y -= this.dy;
    }
}

//on click fire
window.addEventListener('click', function() {
    bulletsArray.push(new bullet());
})


//on hold fire
window.addEventListener('mousedown', function() {

    //setting the interval of the fucntion to run multiple times 
    //every specific milleseconds
    interval_ = setInterval(function() {
        bulletsArray.push(new bullet());
        const shootingSound = document.createElement('audio');
        shootingSound.src = "/game/assets/soundEffects/shoot.wav";
        shootingSound.volume = 0.25;
        shootingSound.play();
        shootingSound.remove();
        speedTime = speedTime;

        // shootingSound.addEventListener("ended", function() {
        //     document.removeChild(this);
        // }, false);
        // dy *= 1.0002;
        speedTime *= 0.994;
        if (speedTime < 100) {
            speedTime = 100;
        }
    }, speedTime);

})

window.addEventListener('click', function() {
    const shootingSound = document.createElement('audio');
    shootingSound.src = "/game/assets/soundEffects/shoot.wav";
    shootingSound.volume = 0.25;

    shootingSound.play();
    shootingSound.remove();

})

window.addEventListener('mouseup', function() {
    clearInterval(interval_)

})