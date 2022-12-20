//   // add to cart
//   let carts = document.querySelectorAll('.add-cart');

//   let products = [
//     {
//         name: 'Burgers',
//         tag: 'burgers',
//         price: 9,
//         inCart: 0
    
//     },
//     {
//         name: 'Cakes',
//         tag: 'cakes',
//         price: 5,
//         inCart: 0
//     },
//     {
//         name: 'Sweets',
//         tag: 'sweets',
//         price: 4,
//         inCart: 0
//     },
//     {
//         name: 'Cupcakes',
//         tag: 'cupcakes',
//         price: 8,
//         inCart: 0
//     },
//     {
//         name: 'Drinks',
//         tag: 'drinks',
//         price: 5,
//         inCart: 0
//     },
//     {
//         name: 'Ice-Cream',
//         tag: 'icecream',
//         price: 10,
//         inCart: 0
//     },

//   ]

//   for(let i = 0; i < carts.length; i++){
//     carts[i].addEventListener('click', ()=>{
//         cartNumbers(products[i]);
//         totalCost(products[i]);
//         })  
//   }

//   function onLoadNumbers(){
//     let productNumbers = localStorage.getItem('cartNumbers');

//     if(productNumbers){
//         document.querySelector('.cart span').textContent = productNumbers;
//     }
//   }
 
//   function cartNumbers(product){
//     let productNumbers = localStorage.getItem('cartNumbers');

//     productNumbers = parseInt(productNumbers);

//     if(productNumbers){
//         localStorage.setItem('cartNumbers', productNumbers + 1);
//         document.querySelector('.cart span').textContent=productNumbers + 1;

//     }
//     else{
//         localStorage.setItem('cartNumbers', 1);
//         document.querySelector('.cart span').textContent=1;
//     }
//     setItems(product);
//   }

//     function setItems(product){
//         let cartItems = localStorage.getItem('productsInCart');
//         cartItems = JSON.parse(cartItems);

//         if(cartItems != null){

//             if(cartItems[product.tag] == undefined){
//                 cartItems = {
//                     ...cartItems,
//                     [product.tag]: product
//                 }
//             }
//             cartItems[product.tag].inCart +=1;
//         }
//         else{
//             product.inCart = 1;
//             cartItems = {
//                 [product.tag]: product
//             }
//         }  

//         localStorage.setItem('productsInCart',JSON.stringify
//         (cartItems));
//     }

//     function totalCost(product){
//         // console.log('The product price is', product.price);
//         let cartCost = localStorage.getItem('totalCost');
//         console.log('My cartCost is', cartCost);
//         console.log(typeof cartCost);

//         if(cartCost !=null){
//             cartCost = parseInt(cartCost);
//             localStorage.setItem('totalCost', cartCost +
//             product.price );
//         } else{
//             localStorage.setItem('totalCost', product.price);
//         }

//     }

//   onLoadNumbers();