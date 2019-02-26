const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let x = 0;
let y = 0;
let i = 0;
let j = 0;
let a = 1;
let b = 1;
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height) //BG rect
ctx.fillStyle = "red";

function draw() {
    ctx.fillRect(30*i, 30*j, 30, 30);
    // alert(ctx.fillStyle)
    if(ctx.fillStyle == "#ff0000") {
        ctx.fillStyle = "blue";
    } else {
        ctx.fillStyle = "red";
    }
    i+=b;
    j+=a;
    if(i*30 > canvas.width || i*30 < 0) {
        b*=-1;
    }

    if(j*30 > canvas.height || j*30 < 0) {
        a*=-1;
    }
}

setInterval(function() {
    draw();
}, 1);