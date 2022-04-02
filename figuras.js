//Codigo del cuadrado
console.group("cuadrado");
const ladoCuadrado = 5;
const calcPerimetroCuadrado = (lado)=>{
    return lado*4;
}   
const calcAreaCuadrado = (lado)=>{
    return lado*lado;
}


console.log("El perimetro del cuadrado es: "+ calcPerimetroCuadrado(ladoCuadrado));
console.log("El area del cuadrado es: "+ calcAreaCuadrado(ladoCuadrado));
console.groupEnd();

//Codigo del triangulo
console.group("triangulo");
const baseTriangulo = 4;
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const alturaTriangulo = 5.5;

const calcPerimetroTriangulo = (lado1,lado2,base)=>{
    return lado1+lado2+base;
}   
const calcAreaTriangulo = (base,altura)=>{
    return base*altura/2;
}


console.log("Los lados del triangulo miden: "
+ calcPerimetroTriangulo(baseTriangulo,ladoTriangulo1,ladoTriangulo2));
console.log("El area del triangulo es: "+ calcAreaTriangulo(baseTriangulo,alturaTriangulo));

console.groupEnd();

//Codigo del circulo
console.group("circulo");
const radioCirculo = 4;
const diametroCirculo = radioCirculo*2;

const pi = 3.1415;

pi = Math.PI;

console.groupEnd();