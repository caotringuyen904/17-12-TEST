function loader() {
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
  setInterval(loader, 3000);
}

window.onload = fadeOut();

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active')
}

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if (window.scrollY > 60) {
    document.querySelector('#scroll-top').classList.add('active');
  } else {
    document.querySelector('#scroll-top').classList.remove('active');
  }

}



// add to cart +render cart
let carts = document.querySelectorAll('.add-cart');

let products = [
  {
    name: 'Burgers',
    tag: '/images/p-1.jpg',
    price: 9,
    inCart: 0
  },
  {
    name: 'Cakes',
    tag: '/images/p-2.jpg',
    price: 5,
    inCart: 0
  },
  {
    name: 'Sweets',
    tag: '/images/p-3.jpg',
    price: 4,
    inCart: 0
  },
  {
    name: 'Cupcakes',
    tag: '/images/p-4.jpg',
    price: 8,
    inCart: 0
  },
  {
    name: 'Drinks',
    tag: '/images/p-5.jpg',
    price: 5,
    inCart: 0
  },
  {
    name: 'Ice-Cream',
    tag: '/images/p-6.jpg',
    price: 10,
    inCart: 0
  },

]

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  })
}

function onLoadNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');

  if (productNumbers) {
    document.querySelector('.cart span').textContent = productNumbers;
  }
}

function cartNumbers(product) {
  let productNumbers = localStorage.getItem('cartNumbers');

  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.cart span').textContent = productNumbers + 1;

  }
  else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').textContent = 1;
  }
  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {

    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product
      }
    }
    cartItems[product.tag].inCart += 1;
  }
  else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product
    }
  }

  localStorage.setItem('productsInCart', JSON.stringify
    (cartItems));
}

function totalCost(product) {
  // console.log('The product price is', product.price);
  let cartCost = localStorage.getItem('totalCost');
  console.log('My cartCost is', cartCost);
  console.log(typeof cartCost);

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem('totalCost', cartCost +
      product.price);
  } else {
    localStorage.setItem('totalCost', product.price);
  }
}

function displayCart() {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector
    ('.products-container');
  let cartCost = localStorage.getItem('totalCost');


  console.log(cartItems);
  if (cartItems && productContainer) {
    productContainer.innerHTML = ``;
    Object.values(cartItems).map(item => {
      productContainer.innerHTML += `
          <div class="product">
            <i class="fa-regular fa-circle-xmark"></i>
            <img src= "${item.tag}">
            <h2>${item.name}</h2>
          </div>
          <div class="price">${item.price},00</div>

          <div class="quantity">
              <i class="fa-solid fa-minus"></i>
              <span>${item.inCart}</span>
              <i class="fa-solid fa-plus"></i>
          </div>

          <div class ="total">
              ${item.inCart * item.price},00
          </div>         

             `; 
    });

      productContainer.innerHTML += `
              <div class="basketTotalContainer>
                  <h2 class="basketTotalTitle">
                      Basket Total
                  </h2>
                  <h3 class="basketTotal">
                      $${cartCost},00
                  </h3>
                </div>
                `;
  }
}

onLoadNumbers();
displayCart();

