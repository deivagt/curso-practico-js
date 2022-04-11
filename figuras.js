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



const pi = Math.PI;

const perimetroCirculo = (diametro)=>{
    return diametro*pi;
}

const areaCirculo = (radio)=>{
    return (radio*radio)*pi;
}


console.log('Perimetro del circulo es: ' + perimetroCirculo(diametroCirculo));
console.log('Area del ciculo es: ' + areaCirculo(radioCirculo))

console.groupEnd();


//funciones de interaccion

const calcularPerimetroCuadrado=()=>{
    const input = document.getElementById("userLadoCuadrado");
    const value = input.value;
    const perimetro=calcPerimetroCuadrado(value);
    alert("El perimetro del cuadrado es "  +perimetro);
}

const calcularAreaCuadrado=()=>{
    const input = document.getElementById("userLadoCuadrado");
    const value = input.value;
    const area=calcAreaCuadrado(value);
    alert("El area del cuadrado es "  +area);
}

const calcularAltura=()=>{
 calcularAlturaIsoceles(document.getElementById("ladotriangulo1").value,document.getElementById("ladotriangulo2").value,document.getElementById("basetriangulo").value)
}
const calcularAlturaIsoceles=(lado1,lado2,base)=>{
    if(lado1!==lado2){
        alert('No es un triangulo isoceles')
    }else{
        
        let altura= Math.sqrt((lado1**2)-(base**2)/4);
        
        alert('La altura del triangulo es: '+ altura);
    }
}