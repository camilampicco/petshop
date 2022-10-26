//PET SHOP venta de productos
//Calcular valor final de un producto seleccionado en función de impuestos y descuentos.


//crear un algoritmo con un condicional, usando un ciclo utilizar funciones para realizar las operaciones

// const addition = (a, b) => a + b 
// const substraction = (a, b) => a - b 

// const addVat = x => x * 0.20;


//declaro las variables


// let priceSoftToyDog = 20;
// let priceSoftToyCat = 18.5;
// let priceCatCave = 42.5;
// let priceCatFood = 15.8;
// let priceDogFood = 21.2;
// let priceDiscount = 5;






//declaro la variable  totalPrice por fuera del scope de la funcion
let totalPrice = 0;


//declaro la funcion
function purchaseProducts () {
let quantity = 0;
let price = 0;
let productId = '';


    while (!productId || productId === 0 || productId > 5) { 
            productId = parseInt(prompt('Which product do you want to shop? \n 1)Soft Dog Toy (£20) \n 2)Soft Cat Toy (£18.5) \n 3)Cat Cave (£42.5) \n 4)Cat Food(£15.8) \n 5)Dog Food (£21.2) '));
            quantity = parseInt(prompt('How many do you want?'))
        }

    switch (productId){
        case 1:
            productId = 'Soft Dog Toy';
            price = 20;
            break;
        case 2:
            productId = 'Soft Cat Toy';
            price = 18.5;
            break;
        case 3:
            productId = 'Cat Cave';
            price = 42.5;
            break;
        case 4:
            productId = 'Cat Food';
            price = 15.8;
            break;
        case 5:
            productId = 'Dog Food';
            price = 21.2;
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

    alert ('Congratulations, your purchase is ' + productId + ' and you paid £' + totalPrice)
}

//invoco la funcion
purchaseProducts ();

//muestro por consola el precio total
console.log(totalPrice)