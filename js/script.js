let products = document.querySelector('.product')
let ayhaga = document.querySelector('.items-container')
let addToCartBtn = document.querySelector('#addToCart')
let cartCount = document.querySelector('.header-count')
let header_cart_items = document.querySelector('.header-cart-items')
let header_fav_items = document.querySelector('.header-fav-items')
let cartItems = localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")):[]
let favItems = localStorage.getItem("favItems")? JSON.parse(localStorage.getItem("favItems")):[]
let searchItem = document.querySelector('#search-box')
let searchBtn = document.querySelector('#search-icon')
let priceFilter = document.querySelector('#price-filter')
let displayBtn = document.querySelector('#show-case')


let items = [{
        id:1,
        imageUrl : "../images/jacket.jpg",
        brand : "Hollister",
        type : "jacket army",
        price : 40,
        count : 0,
    },
    {
        id:2,
        imageUrl : "../images/c.webp",
        brand : "Zara",
        type : "Jeans",
        price : 20,
        count : 0,
    },
    {
        id:3,
        imageUrl : "../images/b.webp",
        brand : "Hala Hala",
        type : "Hoodie",
        price : 80,
        count : 0,
    },
    {
        id:4,
        imageUrl : "../images/d.webp",
        brand : "Zara",
        type : "Hoodie",
        price : 30,
        count : 0,
    },
    {
      id:5,
      imageUrl : "../images/e.webp",
      brand : "Predator",
      type : "Pull over",
      price : 50,
      count : 0,
  },
  {
    id:6,
    imageUrl : "../images/f.webp",
    brand : "Fufu",
    type : "Pants",
    price : 15,
    count : 0,
},
{
  id:7,
  imageUrl : "../images/a.webp",
  brand : "North Face",
  type : "jacket",
  price : 90,
  count : 0,
},
{
  id:8,
  imageUrl : "../images/jacket2.jpg",
  brand : "Kano",
  type : "jacket",
  price : 65,
  count : 0,
},
]

function drawItems(items){
    var x = items.map((item) =>{
        return` <div class="product">
        <img src="${item.imageUrl}" alt="">
        <div class="item-desc">
          <p id="brand">${item.brand}</p>
          <p id="type">${item.type}</p>
          <p id="price">${item.price}&dollar;</p>
        </div>
        <div class="item-pay">
          <select name="item-size" id="item-size">
            <option value=""  disabled Selected>Select Size</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
          <button id="addToCart" onClick="add_to_cart(${item.id})">Add To Cart</button>
          <button id="addToFav" onClick="add_to_fav(${item.id})"><i class="fas fa-heart"></i></button>
        </div>
      </div><!-- product -->`
    })
    ayhaga.innerHTML =    x
}




drawItems(items)

if(cartItems){
  cartItems.map(item=>{
    header_cart_items.innerHTML +=`<img src="${item.imageUrl}" alt="logo" width="100px" height="60px">
    <p>${item.brand}</p>`
  })
  cartCount.innerHTML = JSON.parse(localStorage.getItem("cartItems")).length
}

if(favItems){
  favItems.map(item=>{
    header_fav_items.innerHTML +=`<img src="${item.imageUrl}" alt="logo" width="100px" height="60px">
    <p>${item.brand}</p>`
  })
}

// function add_to_cart(id){
//   if(localStorage.getItem("userName")){
//   let addedItem = items.find((item)=>item.id===id)
//   let existingCartItem = cartItems.find((item) => item.id === id);
//   if (existingCartItem) {
//     existingCartItem.count += 1;
//   } else {
//     // If item is not in the cart, add it as a new entry
//     cartItems.push({ ...addedItem, count: 1 });
//     header_cart_items.innerHTML += `<img src="${addedItem.imageUrl}" alt="logo" width="100px" height="60px" display="inline">
//     <span>${addedItem.brand}</span>
//     <p>count: ${addedItem.count}</p>
//      <hr>`;
//     localStorage.setItem("cartItems", JSON.stringify(cartItems))
//     cartCount.innerHTML = JSON.parse(localStorage.getItem("cartItems")).length
//   }

//   // localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   // cartCount.innerHTML = cartItems.reduce((total, item) => total + item.count, 0);

//   //   header_cart_items.innerHTML +=`<img src="${addedItem.imageUrl}" alt="logo" width="100px" height="60px">
//   //   <p>${addedItem.brand}</p>`
//   //   cartItems = [...cartItems, addedItem]
//   //   localStorage.setItem("cartItems", JSON.stringify(cartItems))
//   //   cartCount.innerHTML = JSON.parse(localStorage.getItem("cartItems")).length
//   }
//   else{
//     window.location = 'loging.html'
//   }
//   return
// }

function add_to_cart(id) {
  if (localStorage.getItem("userName")) {
    let addedItem = items.find((item) => item.id === id);
    let existingCartItem = cartItems.find((item) => item.id === id);

    if (existingCartItem) {
      existingCartItem.count += 1;

      // Update the displayed count in the header_cart_items
      let countElement = document.getElementById(`count-${id}`);
      if (countElement) {
        countElement.innerText = existingCartItem.count;
      } else {
        console.error(`Count element with id 'count-${id}' not found.`);
      }
    } else {
      // If item is not in the cart, add it as a new entry
      cartItems.push({ ...addedItem, count: 1 });
      header_cart_items.innerHTML += `<div id="cart-item-${addedItem.id}">
        <img src="${addedItem.imageUrl}" alt="logo" width="100px" height="60px">
        <span>${addedItem.brand}</span>
        <p>count: <span id="count-${addedItem.id}">1</span></p>
        <hr>
      </div>`;
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      cartCount.innerHTML = cartItems.reduce((total, item) => total + item.count, 0);
    }
  } else {
    window.location = 'loging.html';
  }
}


function add_to_fav(id){
  if(localStorage.getItem("userName")){
    let addedItem = items.find((item)=>item.id===id)
    header_fav_items.innerHTML +=`<img src="${addedItem.imageUrl}" alt="logo" width="100px" height="60px">
    <p>${addedItem.brand}</p>`
    favItems = [...favItems, addedItem]
    localStorage.setItem("favItems", JSON.stringify(favItems))
  }
  else{
    window.location = 'loging.html'
  }
  return
}



searchBtn.addEventListener('click', function (e) {
  e.preventDefault() 
  const searchQuery = searchItem.value.toLowerCase();
  let itemss = items.filter(item => item.type.includes(searchQuery));
  drawItems(itemss)
  console.log(itemss)
});



priceFilter.addEventListener('change', function () {
    const selectedOption = this.value;
    switch (selectedOption) {
        case 'small':
            items.sort((a, b) => a.price - b.price);
            drawItems(items)
            break;
        case 'medium':
            items.sort((a, b) => -(a.price - b.price));
            drawItems(items)
            console.log('Highest price selected');
            break;
        default:
            break;
    }
});

displayBtn.addEventListener('click', function(e){
  e.preventDefault()
  if(ayhaga.style.display == "block"){
      ayhaga.style.display = "flex"; 
      ayhaga.style.transform = "translateX(0%)"  
  }
  else{
    ayhaga.style.display = "block"  
    ayhaga.style.transform = "translateX(30%)"  
  }
})