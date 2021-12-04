let randomEnemy = [];

let imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = "/game/assets/moon.png";

imgArray[1] = new Image();
imgArray[1].src = "/game/assets/cheesePlanet.png";


imgArray[2] = new Image();
imgArray[2].src = "/game/assets/anotherOne.png"


imgArray[3] = new Image();
imgArray[3].src = "/game/assets/BuyerPlanet.png";


imgArray[4] = new Image();
imgArray[4].src = "/game/assets/coolPlanet.png";


imgArray[5] = new Image();
imgArray[5].src = "/game/assets/jupiter.png";

imgArray[6] = new Image();
imgArray[6].src = "/game/assets/weirdPlanet.png";







function randomNumber() {}

let randEnemy = Math.floor(Math.random() * 7);





// c.rotate(10 * Math.PI / 180);

let randEnemyTime = 400;

let widthAndHeight = 120;
let squareArea = widthAndHeight * widthAndHeight;
let diameter = Math.sqrt(squareArea * 2);

let radius = diameter / 2;

// let randoM = RandomWidth();

class easyEnemy {

    constructor() {
        this.vx = Mouse.x;
        this.vy = Mouse.y;
        this.size = radius;
        this.y = -100;
        this.x = Math.random() * windowWidth - this.size;
        // this.v = (this.y - this.vy * 2) / (this.x - this.vx * 2);

        this.dx = Math.random() * 4 - 2.5;
        this.dy = 3;
        // console.log(this.v)

    }


    drawEnemy() {
        c.beginPath();
        c.shadowBlur = 7;
        c.shadowColor = "rgba(255, 255, 255, 0.26)";

        c.drawImage(imgArray[randEnemy], this.x, this.y, widthAndHeight, widthAndHeight);
        // c.rotate(0);

    }

    updateEnemy() {
        this.y += this.dy;
        this.x += this.dx;
    };
}

setInterval(function() {
    randomEnemy.push(new easyEnemy());
}, randEnemyTime);

function handleEnemy() {

    for (let i = 0; i < randomEnemy.length; i++) {
        randomEnemy[i].drawEnemy();
        randomEnemy[i].updateEnemy();
    }
}