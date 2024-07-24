//  Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7. 

function calculateArea(type, dimensions) {
    switch(type) {
        case 'equilateral':
            return equilateralTriangleArea(dimensions.side);
        case 'isosceles':
            return isoscelesTriangleArea(dimensions.base, dimensions.height);
        case 'scalene':
            if (isRightTriangle(dimensions.a, dimensions.b, dimensions.c)) {
                return rightTriangleArea(dimensions.a, dimensions.b, dimensions.c);
            } else {
                return scaleneTriangleArea(dimensions.a, dimensions.b, dimensions.c);
            }
        case 'right':
            return rightTriangleArea(dimensions.base, dimensions.height);
        case 'oblique':
            return obliqueTriangleArea(dimensions.base, dimensions.height);
        case 'sides':
            if (isRightTriangle(dimensions.a, dimensions.b, dimensions.c)) {
                return rightTriangleArea(dimensions.a, dimensions.b, dimensions.c);
            } else {
                return scaleneTriangleArea(dimensions.a, dimensions.b, dimensions.c);
            }
        default:
            throw new Error("Invalid triangle type");
    }
}

function equilateralTriangleArea(side) {
    return (Math.sqrt(3) / 4) * Math.pow(side, 2);
}

function isoscelesTriangleArea(base, height) {
    return (base * height) / 2;
}

function scaleneTriangleArea(a, b, c) {
    let s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

function rightTriangleArea(a, b, c) {
    // Identify the hypotenuse
    let sides = [a, b, c].sort((x, y) => x - y);
    let base = sides[0];
    let height = sides[1];
    return (base * height) / 2;
}

function obliqueTriangleArea(base, height) {
    return (base * height) / 2;
}

function isRightTriangle(a, b, c) {
    let sides = [a, b, c].sort((x, y) => x - y);
    return Math.pow(sides[0], 2) + Math.pow(sides[1], 2) === Math.pow(sides[2], 2);
}

function triangleAreaWithSides(a, b, c) {
    return scaleneTriangleArea(a, b, c); // Reusing the scalene triangle function
}

// Example Usage:
console.log("Equilateral Triangle Area: "+calculateArea('equilateral', {side: 5})); // Example for equilateral triangle
console.log("Isosceles Triangle Area: "+calculateArea('isosceles', {base: 4, height: 6})); // Example for isosceles triangle
console.log("Scalene Triangle Area: "+calculateArea('scalene', {a: 3, b: 4, c: 5})); // Example for scalene triangle
console.log("Right Angled Triangle Area: "+calculateArea('right', {base: 3, height: 4})); // Example for right triangle
console.log("Oblique Triangle Area: "+calculateArea('oblique', {base: 5, height: 7})); // Example for oblique triangle
console.log("Triangle Area with sides a,b,c: "+calculateArea('sides', {a: 3, b: 4, c: 5})); // Example for triangle with sides a, b, c

