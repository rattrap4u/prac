// Reactangle area perimeter using object.

function Rectangle(a,b) {
    return {
        length: a,
        width: b,
        area: (a*b),
        perimeter: (2*(a*b))
    };
}

let rect = Rectangle(5,6);
console.log(rect);

console.log(Rectangle(5,6));