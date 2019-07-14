class Point {
    constructor(x, y, r, color=false) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
    }
    
    draw() {
        drawCircle(this.x, this.y, this.r, this.color)
    }

    getX() {
        return this.x;s
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

    setColor(color) {
        this.color = color;
    }
}