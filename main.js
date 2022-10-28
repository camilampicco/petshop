//PET SHOP venta de productos

function purchaseProducts () {
let quantity = 0;
let price = 0;
let productId = '';
let totalPrice = 0;
let keepShopping = false;
let totalQuantity =0;


    do { 
        productId = parseInt(prompt('Which product do you want to shop? \n 1)Soft Dog Toy (£20) \n 2)Soft Cat Toy (£22) \n 3)Cat Cave (£42.5) \n 4)Cat Food(£18) \n 5)Dog Food (£25) '));
        quantity = parseInt(prompt('How many do you want?'))

        // validateProduct (productId)
        let validatedProductId = validateProductId (productId)
        let validatedQuantity = validateQuantity (quantity)

    switch (validatedProductId){
        case 1:
            validatedProductId = 'Soft Dog Toy';
            price = 20;
            break;
        case 2:
            validatedProductId = 'Soft Cat Toy';
            price = 22;
            break;
        case 3:
            validatedProductId = 'Cat Cave';
            price = 42.5;
            break;
        case 4:
            validatedProductId = 'Cat Food';
            price = 18;
            break;
        case 5:
            validatedProductId = 'Dog Food';
            price = 25;
            break;
        default:
            alert ('Please pick a product to continue');
            price = 0;
            quantity = 0;
            break;
    }


    totalPrice += validatedQuantity * price;
    totalQuantity += quantity;

    keepShopping = confirm('Do you want to keep shopping?')

} while(keepShopping)

return totalPrice;
}




// creo funcion para descuentos

function addDiscount (totalPrice){
    if (totalPrice > 50){
        alert ('Good news! That product is on discount')
        return totalPrice * 0.80;
    } else {
        return totalPrice
    }
}



//validacion de producto

function validateProductId (productId) { 
    while(productId === 0 || productId > 5) {
            alert ('Please pick a product to continue')
            productId = parseInt(prompt('Which product do you want to shop? \n 1)Soft Dog Toy (£20) \n 2)Soft Cat Toy (£22) \n 3)Cat Cave (£42.5) \n 4)Cat Food(£18) \n 5)Dog Food (£25) '));
}

    return productId;
}


//validacion para cantidad ingresada

function validateQuantity (quantity) { 
    while(Number.isNaN(quantity) || quantity === 0) {
        if (quantity != 0){
            alert ('Please insert a number')
        } else {
            alert ('The number should be different than zero')
        }
        quantity = parseInt(prompt('How many do you want?'));
    }

    return quantity;
}


// creo funcion para calculo de IVA

function addVAT (totalPrice) {
    const addVAT = totalPrice * 0.20;   
    console.log('The VAT for this purchase is: ' + addVAT)

    return addVAT;
}


// creo funcion para el calculo de Envio

function deliveryToAddress (totalPrice) {
    let priceOfShipping = 5;
    
    prompt('DELIVERY! Which is your address?', 'Please insert Post Code')

    if (totalPrice > 60){
        alert ('You are qualified for free shipping! You now need to pay: $' + totalPrice)
    } else if (totalPrice < 60 && totalPrice !== 0) { 
        totalPrice += priceOfShipping
        alert ('The shipping will cost you $5')
    }

    return totalPrice;
}


deliveryToAddress((addDiscount(purchaseProducts(addVAT))));