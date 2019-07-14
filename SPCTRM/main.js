const ce = document.querySelector("canvas")
const ctx = ce.getContext("2d", false)

let colors = {
    background:"#191006",
    text:"#EFD09E"
};

let width;
let height;

window.onload = function(){
    updateBounds();

    setup();
    setInterval(function() {
        draw();
    }, 10);
}

window.addEventListener("resize", updateBounds())

class TextObj {
    constructor(text, x, y, fontArgs) {
        this.text = text;
        this.x = x;
        this.y = y;
        this.fill = colors.text;
        this.filled = true;
        this.centered = true;
        
        this.markup = (fontArgs.markup) ? (fontArgs.markup) : (""); //Bold, italic
        this.size = (fontArgs.size) ? (fontArgs.size) : ("80px");
        this.font = (fontArgs.font) ? (fontArgs.font) : ("Arial");
        
        this.gradient = false;
    }

    draw() {
        if(this.centered) ctx.textAlign = "center";
        ctx.font = this.markup + " " + this.size + " " + this.font;
        if(this.filled) {
            ctx.fillStyle = createRainbowGradient(this.x - 0.5*ctx.measureText(this.text).width, 0, this.x + 0.5*ctx.measureText(this.text).width, 0)
            ctx.fillText(this.text, this.x, this.y) 
        } else ctx.strokeText(this.text, this.x, this.y)
    }

    getX() {
        return this.x;
    }

    setX(x) {
        this.x = x;
    }

    getY() {
        return this.y;
    }
    setY(y) {
        this.y = y;
    }
    getCoords() {
        return {x: this.x, y: this.y}
    }
    setCoords(x, y) {
        this.x = x;
        this.y = y;
    }

    isFilled() {
        return filled;
    }

    setFilled(filled) {
        this.filled = filled;
    }

    setFontArgs(f) {
        if(f.markup) this.markup = f.markup;
        if(f.size) this.size = f.size;
        if(f.font) this.font = f.font;
    }
}

let header = new TextObj("S P C T R M", width/2, height/4, {markup: "", size: "80px", font: "Arial"})
let subheader = new TextObj("୧[•-•]୨", width/2, height/4+height/10, {markup: "", size: "40px", font: "Arial"})

function updateBounds() {
    ce.width = window.innerWidth
    ce.height = window.innerHeight
    width = ce.width;
    height = ce.height;
}

function background(color, nonCanvas=true) { //Can pass in CSS colorval or hex
    ce.style.background = color;
    if(nonCanvas) {
        document.querySelector("body").style.background = color;
    }
}

function resetCanvas() {
    ctx.setTransform(1, 0, 0, 1, 0, 0); //Use identity matrix to ignore any transforms
    ctx.clearRect(0, 0, ce.width, ce.height);
}

function createRainbowGradient(xs, ys, xe, ye, sameEnds=false, offset=-1) {
    let gradient = ctx.createLinearGradient(xs, ys, xe, ye);
    let rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let sp;
    sp = (offset > 0) ? (offset) : (0)
    if(!sameEnds) { //LG with ends on dif sides of spectrum
        for(let i = 0; i < rainbowColors.length; i++) {
            gradient.addColorStop(i/(rainbowColors.length-1), rainbowColors[(i+sp)%(rainbowColors.length)]);
        }
    } else { //LG with same color ends
        for(let i = 0; i < (rainbowColors.length+1); i++) {
            gradient.addColorStop(i/rainbowColors.length, rainbowColors[(i+sp)%rainbowColors.length])
            console.log(rainbowColors[(i+sp)%rainbowColors.length])
        }
    }

    return gradient;
}

function setup() {
    background(colors.background)
}

function update() {

}

function draw() {
    resetCanvas();
    header.draw();
    subheader.draw();
}
