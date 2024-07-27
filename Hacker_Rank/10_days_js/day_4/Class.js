

class Polygon {
    constructor (sides) {
        this.sides = sides;
    }
    perimeter() {
        let total = 0;
        for(let side of this.sides) {
            total += side
        }
        return total
    }
    peri() {
        return this.sides.reduce((a,b) => a+b)
    }
}