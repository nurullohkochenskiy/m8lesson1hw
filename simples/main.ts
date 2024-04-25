
function calcSquareArea(sideLength: number): number {
    return sideLength * sideLength;
}


function calcRectangleArea(length: number, width: number): number {
    return length * width;
}


function calcCircleArea(radius: number): number {
    return Math.PI * radius * radius;
}


console.log("Area of square:", calcSquareArea(5));
console.log("Area of rectangle:", calcRectangleArea(4, 6));
console.log("Area of circle:", calcCircleArea(3));
