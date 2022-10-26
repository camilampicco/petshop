//PET SHOP venta de productos
//Calcular valor final de un producto seleccionado en función de impuestos y descuentos.


//crear un algoritmo con un condicional, usando un ciclo utilizar funciones para realizar las operaciones


//declaro la funcion

function purchaseProducts () {
let quantity = 0;
let price = 0;
let productId = '';
let totalPrice = 0;


    while (!productId || productId === 0 || productId > 5) { 
            productId = parseInt(prompt('Which product do you want to shop? \n 1)Soft Dog Toy (£20) \n 2)Soft Cat Toy (£22) \n 3)Cat Cave (£42.5) \n 4)Cat Food(£18) \n 5)Dog Food (£25) '));
            quantity = parseInt(prompt('How many do you want?'))
        }

    switch (productId){
        case 1:
            productId = 'Soft Dog Toy';
            price = 20;
            break;
        case 2:
            productId = 'Soft Cat Toy';
            price = 22;
            break;
        case 3:
            productId = 'Cat Cave';
            price = 42.5;
            break;
        case 4:
            productId = 'Cat Food';
            price = 18;
            break;
        case 5:
            productId = 'Dog Food';
            price = 25;
            break;
        default:
            alert ('Please pick a product to continue');
            price = 0;
            quantity = 0;
            break;
    }
    while (!quantity || quantity === 0) {
        quantity = parseInt(prompt('How many would you like?'));
    }

    totalPrice += quantity * price;
    quantity += quantity;

    //Le aviso al usuario cuanto gasto y en que producto
    alert ('Congratulations, you purchased ' + productId + ' and you paid £' + totalPrice)

    //calculo el VAT (iva)
    const addVAT = price * 0.20;

    //muestro el VAT (iva) separado en consola
    let vatOfProduct = addVAT;   
    console.log('The VAT for this purchase is: ' + vatOfProduct)
}




//invoco la funcion
purchaseProducts ();

