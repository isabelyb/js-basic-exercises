//Triangule

function trianglePerimeter(side1, side2, base) {
    return side1 + side2 + base;
}   

function triangleArea(base, height) {
    return base * height / 2;
}


//Rectangle

function rectanglePerimeter(width, height) {
    return 2 * width + 2 * height;
}   

function rectangleArea(width, height) {
    return width * height;
}   

//Square

function squarePerimeter(side) {
    return side * 4;
}

function squareArea(side) {
    return side * side;
}   

//Circle

function circlePerimeter(radius) {
    return 2 * Math.PI * radius;
}

function circleArea(radius) {
    return Math.PI * radius * radius;
}


console.log('1.1 Perímetro de Triángulo: ' +  trianglePerimeter(3, 4, 5));
console.log('1.2 Área de Triángulo: ' +  triangleArea(3, 4));
console.log('1.3 Perímetro de Rectángulo: ' +  rectanglePerimeter(3, 4));
console.log('1.4 Área de Rectángulo: ' +  rectangleArea(3, 4));
console.log('1.5 Perímetro de Cuadrado: ' +  squarePerimeter(3));
console.log('1.6 Área de Cuadrado: ' +  squareArea(3));
console.log('1.7 Perímetro de Círculo: ' +  circlePerimeter(3));
console.log('1.8 Área de Círculo: ' +  circleArea(3));

