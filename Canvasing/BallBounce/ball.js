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
