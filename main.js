// //PET SHOP venta de productos

const arrayProducts = [];

const product1 = new Product(1, 'Soft Toy Dog', 20);
const product2 = new Product(2, 'Soft Cat Toy', 22);
const product3 = new Product(3, 'Cat Cave', 42.5);
const product4 = new Product(4, 'Cat Food', 18);
const product5 = new Product(5, 'Dog Food', 25);

arrayProducts.push(product1, product2, product3, product4, product5);


//funciones de orden superior 
//find

const result = arrayProducts.find(item => item.name === 'Cat Cave');
console.log (result)


//filters

const filter1 = arrayProducts.filter(item => item.price < 25)
console.log (filter1)

const filter2 = arrayProducts.filter(item => item.name.includes('Cat'))
console.log(filter2);


//sorting by name

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


//sorting by ascendent price 

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


//sorting by descendent price 

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


//uso metodo MAP para lanzar un descuento del 15% a todos los productos

const discount = arrayProducts.map (({price}) => ({[price] : price * 0.85}));
console.log (discount)




function purchaseProducts () {
let productId ='';
let productQuantity = 0;
let totalPrice = 0;
let keepShopping = false; 


    do { 
        productId = parseInt(prompt('Which product do you want to shop? \n 1)Soft Dog Toy (£20) \n 2)Soft Cat Toy (£22) \n 3)Cat Cave (£42.5) \n 4)Cat Food(£18) \n 5)Dog Food (£25) '));
        let validatedProductId = validateProductId (productId)
        if (productId === 1) {
            price = productId.price * 0.8;
            alert('This item is on sale! 20% OFF')
        }

        const product = arrayProducts.find(product => product.id === productId);

        if (product) {
            totalPrice += productId * productQuantity;
        } else {
            alert ('Sorry, we dont have that product')
        }

    keepShopping = confirm('Do you want to keep shopping?')

} while(keepShopping)

return totalPrice;
}


// //validacion de producto ingresado

function validateProductId (productId) { 
    while(productId === 0 || productId > 5) {
            alert ('Please pick a product to continue')
            productId = parseInt(prompt('Which product do you want to shop? \n 1)Soft Dog Toy (£20) \n 2)Soft Cat Toy (£22) \n 3)Cat Cave (£42.5) \n 4)Cat Food(£18) \n 5)Dog Food (£25) '));
}

    return productId;
}


// //validacion para cantidad ingresada

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


// // creo funcion para calculo de IVA pagaron del precio

function calculateVATAmount(totalPrice) {
    
    vatamount = totalPrice * 0.20;
    console.log('The VAT for this purchase is: ' + vatamount)

    return vatamount;
}


// // creo funcion para el calculo de Envio

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









