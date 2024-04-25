function calcSquareArea(sideLength) {
    return sideLength * sideLength;
}
function calcRectangleArea(length, width) {
    return length * width;
}
function calcCircleArea(radius) {
    return Math.PI * radius * radius;
}
console.log("Area of square:", calcSquareArea(5));
console.log("Area of rectangle:", calcRectangleArea(4, 6));
console.log("Area of circle:", calcCircleArea(3));
