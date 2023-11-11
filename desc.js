

// Valor Producto
let precioItaliana = 23000;
let precioArquero = 20000;
let precioPrematch = 15000;
let precioEstadio = 25000;

//  Descuentos

let descNino = 0.20;
let descJubilado = 0.30;
let descAdulto = 0.10;



const formulario = document.getElementById('formulario');
const categoria = document.getElementById('categoria');
const producto =document.getElementById('producto')
const cantidad = document.getElementById('cantidad');
const totalPagar = document.getElementById('totalAPagar');
const btnResumen = document.getElementById('resumen');

function calcularPago(){
    let prod =0;
    
    switch (producto.value) {
        case "arquero":
            prod =  (cantidad.value * precioArquero)
            break;
        case "estadio":
            prod = (cantidad.value * precioEstadio)
            break;
        case "italiana":
            prod =(cantidad.value * precioItaliana)
            break;
            case "prematch":
                prod =(cantidad.value * precioPrematch)
        default:    
                break;

    }

    switch (categoria.value) {
        case "nino":
            total = prod - (prod * descNino);
            break;
        case "adulto":
            total = prod - (prod * descAdulto);
            break;
        case "jubilado":
            total = prod - (prod * descJubilado);
            break;    
        
        default:
            break;
    }

    totalPagar.textContent = `Total a Pagar: $ ${total}`;

}

btnResumen.addEventListener('click',(e)=>{
    e.preventDefault()
    calcularPago()
});
