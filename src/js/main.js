//declaring canvas
let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");


//assignig canvas width and height to the window's
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//variables holding the width and the height of the window 
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;


//an array that holds the bullets

let sc = document.querySelector(".score");
let score = 0;
let health = document.querySelector(".HealthBar");

let healthBar = 100;

const playerAsset = document.createElement('img');
playerAsset.src = "/game/assets/player.png";

const backgroundMusic = document.createElement('audio');
backgroundMusic.src = "/game/assets/soundEffects/background_music.mp3";




window.addEventListener('mousemove', function() {
    backgroundMusic.volume = 0.1;
    backgroundMusic.play();

})



let bulletsArray = [];



let Mouse = {
    x: undefined,
    y: undefined
};

//event listner that listens for the mouse movement and assign it to
//Mouse x and Mouse y 
window.addEventListener('mousemove', function(e) {
    Mouse.x = e.x;
    Mouse.y = e.y;

})


//playing the music when the page is loaded


function fireBullets() {
    for (let i = 0; i < bulletsArray.length; i++) {
        bulletsArray[i].draw();
        bulletsArray[i].update();
    }
}


let count = 0;

function detectCollision() {
    for (let i = 0; i < bulletsArray.length; i++) {


        for (let j = 0; j < randomEnemy.length; j++) {
            const dis = Math.hypot(bulletsArray[i].x - randomEnemy[j].x - (widthAndHeight / 2),
                bulletsArray[i].y - randomEnemy[j].y);
            let count = 0;
            if (dis - bulletsArray[i].radius - randomEnemy[j].size < 1) {
                score += 10;
                sc.textContent = "score: " + score;

                bulletsArray.splice(i, 1);
                --i;

                randomEnemy.splice(j, 1);

            }



        }
    }
}



let playerHealth = 200;
// alert(playerHealth)




function playerEnemeyCollision() {
    for (let i = 0; i < playerStoC.length; i++) {


        for (let j = 0; j < randomEnemy.length; j++) {
            const dis = Math.hypot(Mouse.x - randomEnemy[j].x - (widthAndHeight / 2),
                (Mouse.y + 40) - randomEnemy[j].y);

            if (dis - (playerStoC[i].radius / 2) - randomEnemy[j].size / 2.5 - (widthAndHeight / 2) < 1) {
                randomEnemy.splice(j, 1);
                playerHealth -= 50;
                healthBar -= 25;
                const playerLost = document.createElement('audio');
                playerLost.src = "/game/assets/soundEffects/lost.wav";
                health.textContent = healthBar;
                playerLost.play();

                playerLost.volume = 0.3;
                if (healthBar < 10) {
                    alert("You lost :(")
                    location.reload();







                }

            }

        }
    }
}


function animate() {
    c.clearRect(0, 0, windowWidth, windowHeight);
    requestAnimationFrame(animate);
    Plane.draw();
    fireBullets();
    detectCollision()
    handleEnemy()

    // console.log(Mouse.x, Mouse.y);
    playerEnemeyCollision()
}
animate();