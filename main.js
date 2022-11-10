// //PET SHOP venta de productos

const arrayProducts = [];

const product1 = new Product(1, 'Soft Toy Dog', 20);
const product2 = new Product(2, 'Soft Cat Toy', 22);
const product3 = new Product(3, 'Cat Cave', 42.5);
const product4 = new Product(4, 'Cat Food', 18);
const product5 = new Product(5, 'Dog Food', 25);

arrayProducts.push(product1, product2, product3, product4, product5);


// carrito de compras

const basket = [];

//cantidad que compra  ----->>>>> estaria sumando los que yo pongo en la funcion no los que elige el user
const basketTotal = basket.reduce((acc, item) => acc + item.quantity, 0);
console.log(basketTotal)

//total que compra
const totalSpent = basket.reduce((acc, item) => acc + (item.price * item.quantity), 0)
console.log(totalSpent)



//funciones de orden superior 
//FIND

const result = arrayProducts.find(item => item.name === 'Cat Cave');
console.log (result)

const resultId = arrayProducts.find(item => item.Id === 1);
console.log (resultId)


//FILTERS

const filter1 = arrayProducts.filter(item => item.price < 25)
console.log (filter1)

const filter2 = arrayProducts.filter(item => item.name.includes('Cat'))
console.log(filter2);


//SORT BY NAME

const sortByName = arrayProducts.sort((a,b) => {
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


//SORT BY ASCENDENT PRICE 

const sortByPrice = arrayProducts.sort((a,b) => {
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


//SORT BY DESCENDENT PRICE 

const sortByDescendentPrice = arrayProducts.sort((a,b) => {
    if (a.price < b.price) {
        return 1;
    }
    if (a.price > b.price) {
        return -1;
    }
    else {
        return 0;
    }
})
console.log(sortByDescendentPrice)


//MAP para lanzar un descuento del 15% a todos los productos

const discount = arrayProducts.map (({price}) => ({[price] : price * 0.85}));
console.log (discount)



//funcion de compra

function purchaseProducts() {
    let productId = 0;
    let productQuantity = 0;
    let total = 0;
    let keepShopping = false;

    do {
        productId = parseInt(prompt('which product do you want to buy? 1, 2 ,3 , 4 , 5 '));
        const product = arrayProducts.find(product => product.Id === productId);

        productQuantity = parseInt(prompt('how many?'));
        quantityValidated = validateQuantity(productQuantity)


        if (product) {
            total =+ product.price * productQuantity;
        } else {
            alert ('we dont have that one')
        }

        basket.append({name: product[productId].name, price: product[price], quantity: product[price]}),

        keepShopping = confirm('do you want to keep shopping?')

    } while(keepShopping)

calculateVATAmount(total)
calculateDelivery (total)
}


//validacion para cantidad ingresada

function validateQuantity (productQuantity) { 
    while(Number.isNaN(productQuantity) || productQuantity === 0) {

        if (productQuantity === 0){
            alert ('The number should be different than zero')
        } 

        productQuantity = parseInt(prompt('How many do you want?'));
    }

    return productQuantity;
}


// creo funcion para calculo de IVA (VAT) pagaron del precio

function calculateVATAmount(total) {
    
    vatamount = total * 0.20;
    console.log('The VAT for this purchase is: ' + vatamount)

}


// creo funcion para el calculo de Envio

function calculateDelivery (total) {
    let priceOfShipping = 5;

    prompt('Delivery! Which is your address?', 'My Post Code is')

    if (total >= 60){
        alert ('You are qualified for free shipping! You now need to pay: £' + total)
    } else if (total < 60 && total !== 0) { 
        total += priceOfShipping
        alert ('The shipping will cost you £5. You now need to pay: £' + total) 
    }

    return total;
}

const total = purchaseProducts();




//creacion de nombres de usuarios

const listOfNames = ['Ana'];
newUser = prompt('Please insert your username')

do {
    if (newUser == '') {
        alert('The user name cannot be empty')
    } else if (newUser =! '') {
        alert('The user name is taken, please choose another one')
    }

    newUser = prompt('Please insert your username')
} while (listOfNames.indexOf(newUser) != -1)

listOfNames.push(newUser);

alert('Your username has been successfully created!')

console.log(listOfNames)









