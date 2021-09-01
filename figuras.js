// Codigo del Cuadrado
console.group("Cuadrados")
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
} 
//console.log("El perimetro del cuadro es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
} 
//console.log("El area del cuadro es: " + areaCuadrado + "cm^2");
console.groupEnd()

// Codigo del Triangulo
console.group("Triangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm.");

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
//console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
} 
//console.log("El area del triangulo es: " + areaTriangulo + "cm^2");
console.groupEnd();

// Codigo del Circulo

function diametroCirculo(radio) {
    return radio * 2;
}

const PI = Math.PI;
console.log("PI es: " + PI);

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}
