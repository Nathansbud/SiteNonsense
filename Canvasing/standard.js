const ce = document.querySelector("canvas")
const ctx = ce.getContext("2d", false)

function drawLine(x1, y1, x2, y2) {
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()
}

function drawCircle(cx, cy, r, fillColor=false) {
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, 2*Math.PI, false);

    if(fillColor) {
        fill(fillColor)
        ctx.closePath();
    } else {
        ctx.stroke();
    }
}

function resetCanvas() {
    ctx.setTransform(1, 0, 0, 1, 0, 0); //Use identity matrix to ignore any transforms
    ctx.clearRect(0, 0, ce.width, ce.height);
}

function background(color) { //Can pass in CSS colorval or hex
    ce.style.background = color;
}

function fill(color) {
    ctx.fillStyle = color;
    ctx.fill()
}