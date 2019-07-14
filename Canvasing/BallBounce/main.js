//Not sure the typical convention on this, sharing classes -> main file via the HTML file which seems a little silly but so be it
let balls = [];

function randomHex() { //https://www.paulirish.com/2009/random-hex-color-code-snippets/
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

function setup() {
    ce.width = window.innerWidth;
    ce.height = window.innerHeight;
    background("grey")
    

    for(let i = 0; i < 10; i++) {
        let b = new Ball(Math.floor(Math.random()*ce.width), Math.floor(Math.random()*ce.height), Math.random()*ce.width/8);
        b.setVel(Math.random()*10 - 5, Math.random()*10 - 5);
        b.setColor(randomHex())
        balls.push(b)
    }
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

window.onload = function(){
    setup();
    setInterval(function() {
        draw();
        update();
    }, 10);
}

window.addEventListener('resize', function() {
    ce.width = window.innerWidth
    ce.height = window.innerHeight
    draw();
})
