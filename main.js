// //PET SHOP venta de productos

const arrayProducts = [];

const product1 = new Product(1, 'Soft Toy Dog', 20);
const product2 = new Product(2, 'Soft Cat Toy', 22);
const product3 = new Product(3, 'Cat Cave', 42.5);
const product4 = new Product(4, 'Cat Food', 18);
const product5 = new Product(5, 'Dog Food', 25);

arrayProducts.push(product1, product2, product3, product4, product5);


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


// SORT BY DESCENDENT
const sortByPrice = arrayProducts.sort((a,b) => {
    if (a.price < b.price) {  
        return 1;
    }
    if (a.price > b.price) {
        return -1
    }
    return 0
})
console.log(sortByPrice)




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
        productId = parseInt(prompt('Which product do you want to buy? \n 1) Soft Toy Dog £20 \n 2) Soft Cat Toy £22 \n 3) Cat Cave £42.5 \n 4) Cat Food £18 \n 5) Dog Food £25 \n'));

        const product = arrayProducts.find(product => product.Id === productId);

        productQuantity = parseInt(prompt('How many do you want?'));
        quantityValidated = validateQuantity(productQuantity)

        if (product) {
            total =+ product.price * productQuantity;
        } else {
            alert ('Sorry! We do not have that one')
        }

        keepShopping = confirm('Do you want to keep shopping?')

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

do {
    newUser = prompt('Please insert your username')

    if (newUser == '') {
        alert('The user name cannot be empty')

    } else if (listOfNames.includes(newUser)) {
        alert('The user name is taken, please choose another one')
    } 

    else {
        alert('Your username has been successfully created');
        listOfNames.push(newUser);
        break;
    }

} while (listOfNames.indexOf(newUser) != -1 || newUser === '')


console.log(listOfNames)









