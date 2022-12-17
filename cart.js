  // add to cart
  let carts = document.querySelectorAll('.add-cart');

  let products = [
    {
        name: 'Burgers',
        price: 9,
        inCart: 0,
    },
    {
        name: 'Cakes',
        price: 5,
        inCart: 0,
    },
    {
        name: 'Sweets',
        price: 4,
        inCart: 0,
    },
    {
        name: 'Cupcakes',
        price: 8,
        inCart: 0,
    },
    {
        name: 'Drinks',
        price: 5,
        inCart: 0,
    },
    {
        name: 'Ice-Cream',
        price: 10,
        inCart: 0,
    },

  ]

  for(let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click', ()=>{
        cartNumbers(products[i]);
        })  
  }

  function onLoadNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
  }
 
  function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent=productNumbers + 1;

    }
    else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent=1;
    }

  }

  onLoadNumbers();