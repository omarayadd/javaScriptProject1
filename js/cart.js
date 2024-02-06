let cartItems = localStorage.getItem("cartItems")
let products = document.querySelector('.product')
let ayhaga = document.querySelector('.items-container')
let priceText = document.querySelector('#price-aaa')
let price = 0



if(cartItems){
    let item = JSON.parse(cartItems)
    item.forEach(i => {
      price+=(i.count*i.price)
    });
    drawItems(item)
    console.log(priceText);
    priceText.innerHTML = `<p>Total Price: ${price}</p>`;
    console.log(priceText.innerHTML);
}

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
          <p> count:${item.count}</p>
          <button id="addToCart" onClick="remove_from_cart(${item.id})">Remove from Cart</button>
        </div>
      </div><!-- product -->`
    }) 
    ayhaga.innerHTML = x
}

function remove_from_cart(id){
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const index = cartItems.findIndex(item => item.id === id);

  if (index !== -1) {
      cartItems.splice(index, 1);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      drawItems(cartItems);
      price =0
      cartItems.forEach(i => {
        price+=(i.count*i.price)
      });
      priceText.innerHTML = `<p>Total Price: ${price}</p>`;
  }
}

