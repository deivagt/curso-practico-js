const calcularDescuento = (precio,descuento)=>{
    return(precio-(precio*((descuento/100))))
}

console.log(calcularDescuento(300,30))

const calcularButton=()=>{
    let precio = document.getElementById("price").value;
    let descuento = document.getElementById("discount").value;
    let precioTotal= calcularDescuento(precio,descuento);
    document.getElementById("precioTotal").innerText="El precio con descuento es $"+precioTotal;
}

