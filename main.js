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
        let validatedProductId = validateProductId (productId)
        if (productId === 1) {
            alert('This item is on sale! 20% OFF')
        }

        quantity = parseInt(prompt('How many do you want?'))
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

    if (productId === 1) {
        price = price * 0.8;
    }

    totalPrice += validatedQuantity * price;
    totalQuantity += quantity;

    keepShopping = confirm('Do you want to keep shopping?')

} while(keepShopping)

return totalPrice;
}


//validacion de producto ingresado

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


// creo funcion para calculo de IVA pagaron del precio

function calculateVATAmount(totalPrice) {
    
    vatamount = totalPrice * 0.20;
    console.log('The VAT for this purchase is: ' + vatamount)

    return vatamount;
}


// creo funcion para el calculo de Envio

function calculateDelivery (totalPrice) {
    let priceOfShipping = 5;

    prompt('Delivery! Which is your address?', 'My Post Code is')

    if (totalPrice >= 60){
        alert ('You are qualified for free shipping! You now need to pay: £' + totalPrice)
    } else if (totalPrice < 60 && totalPrice !== 0) { 
        totalPrice += priceOfShipping
        alert ('The shipping will cost you £5. You now need to pay: £' + totalPrice) 
    }

    return totalPrice;
}




const totalPrice = purchaseProducts();
calculateDelivery(totalPrice);
calculateVATAmount(totalPrice);


// base de datos de usuarios






//funciones de orden superior 

const products = [
    {
        name: 'Soft Toy Dog',
        price: 20
    },
    {
        name: 'Soft Cat Toy',
        price: 22
    },    {
        name: 'Cat Cave',
        price: 42.5
    },    {
        name: 'Cat Food',
        price: 18
    },    {
        name: 'Dog Food',
        price: 25
    },
]


//find

const result = products.find(item => item.name === 'Cat Cave');
console.log (result)


//filters

const filter1 = products.filter(item => item.price < 25)
console.log (filter1)

const filter2 = products.filter(item => item.name.includes('Cat'))
console.log(filter2);


//sorting by name

const sortByName = products.sort((a,b) => {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    else {
        return 0
    }
})
console.log(sortByName)


//sorting by ascendent price 

const sortByPrice = products.sort((a,b) => {
    if (a.price > b.price) {
        return 1;
    }
    if (a.price < b.price) {
        return -1;
    }
    else {
        return 0;
    }
})
console.log(sortByPrice)


// carrito de compras

const basket = [
    {name: 'Dog Food', price: 25, quantity: 1},
    {name: 'Soft Toy Dog', price: 20, quantity: 3},
]

//cantidad que compra  ----->>>>> estaria sumando los que yo pongo en la funcion no los que elige el user
const basketTotal = basket.reduce((acc, item) => acc + item.quantity, 0);
console.log(basketTotal)

//total que compra
const totalSpent = basket.reduce((acc, item) => acc + (item.price * item.quantity), 0)
console.log(totalSpent)



//creacion de usuarios

const names = [];

let newUser = '';

do {
    if (newUser != ''){
        alert ('That username is taken, please choose other');
    }
    newUser = prompt('Please write your username')

} while (names.includes(newUser))

names.push(newUser) //ver bien como hacer para que se sume al array

alert ('The user name has been successfully created!')

console.log(names)

