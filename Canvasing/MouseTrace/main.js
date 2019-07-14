let points = [];
let pulse = true;
let pointCount = 500;
let mouseDown = false;

window.onload = function(){
    ce.width = window.innerWidth
    ce.height = window.innerHeight

    setup();
    setInterval(function() {
        draw();
    }, 10);
}



function setup() {
    background("grey")
}

function draw() {
    resetCanvas();
    for(point of points) {
        if(pulse) point.setColor("#"+Math.floor((Math.random()*16777215)).toString(16));
        point.draw()
    }
}

window.addEventListener('resize', function() {
    ce.width = window.innerWidth
    ce.height = window.innerHeight
    draw();
})

window.addEventListener('mousemove', function(event) {
    if(mouseDown) {
        points.unshift(new Point(event.clientX, event.clientY, 3, "#"+Math.floor((Math.random()*16777215)).toString(16)))
        if(points.length > pointCount) {
            let pointFirst = points.pop();
        }   
    } 
})

window.addEventListener('keydown', function(key) {
    if(key.keyCode == 8) points = []
})

ce.addEventListener('click', function() {
    mouseDown = !mouseDown;
}) 
