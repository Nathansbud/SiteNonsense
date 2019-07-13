var ce = document.getElementById("canvas");
var ctx = ce.getContext("2d", false);

ce.width = window.innerWidth;
ce.height = window.innerHeight;

let circleX = 0;
let circleY = 0;

window.onload = function(){
    draw()
}

window.addEventListener('resize', function() {
    ce.width = window.innerWidth
    ce.height = window.innerHeight
    draw();
})

class Ball {
    constructor(x, y, r, fillColor=false) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.fillColor = fillColor;
        this.velX = 1;
        this.velY = 1;
    }

    move() {
        if(this.x + this.r >= ce.width) {
            this.velX *= -1;
            this.x = ce.width - this.r - 1;
        } else if(this.x - this.r <= 0) { 
            this.velX *= -1;
            this.x = this.r + 1;
        } else {
            this.x += this.velX;
        }

        if(this.y + this.r >= ce.height) {
            this.velY *= -1;
            this.y = ce.height - this.r - 1;
        } else if(this.y - this.r <= 0) { 
            this.velY *= -1;
            this.y = this.r + 1;
        } else {
            this.y += this.velY;
        }
    }

    draw() {
        drawCircle(this.x, this.y, this.r, this.fillColor)
    }

    setVel(vx, vy) {
        this.velX = vx;
        this.velY = vy;    
    }

    setColor(fillColor) {
        this.fillColor = fillColor;
    }
}

let balls = []

for(let i = 0; i < 10; i++) {
    let b = new Ball(Math.floor(Math.random()*ce.width), Math.floor(Math.random()*ce.height), Math.random()*ce.width/8);
    b.setVel(Math.random()*10 - 5, Math.random()*10 - 5);
    b.setColor(randomHex())
    balls.push(b)
}

function drawLine(x1, y1, x2, y2) {
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()
}

function drawCircle(cx, cy, r, fillColor=false) {
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, 2*Math.PI, false);

    if(fillColor) {
        ctx.fillStyle = fillColor;
        ctx.fill();
        ctx.closePath();
    } else {
        ctx.stroke();
    }
}

function randomHex() { //https://www.paulirish.com/2009/random-hex-color-code-snippets/
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

function background(color) { //Can pass in CSS colorval or hex
    ce.style.background = color;
}

function resetCanvas() {
    ctx.setTransform(1, 0, 0, 1, 0, 0); //Use identity matrix to ignore any transforms
    ctx.clearRect(0, 0, ce.width, ce.height);
}

function fill(color) {
    ctx.fillStyle = color;
    ctx.fill()
}

function settings() {
    background("grey")
}

function draw() {
    resetCanvas();
    for(b of balls) {
        b.draw();
    }
}

function update() {
    for(b of balls) {
        b.move();
    }
}

settings();
setInterval(function() {
    draw();
    update();
}, 10);
