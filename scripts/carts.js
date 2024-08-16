const cartDecrement = document.querySelector(".addtocart > :first-child");
const itemNo = document.querySelector(".addtocart > :nth-child(2)");
const cartIncremeter = document.querySelector(".addtocart > :last-child");
const cartIcon = document.querySelector(".cartB");
const cart = document.querySelector(".cart");

// Initialize the item quantity
let indexNo = 0;
itemNo.textContent = indexNo;

// Toggle cart open and close
cartIcon.addEventListener("click", (e) => {
  cart.classList.toggle("hide");
  e.stopPropagation();
});

// Increment button event listener
cartIncremeter.addEventListener("click", () => {
  if (indexNo < 10) {
    indexNo++;
    itemNo.textContent = indexNo;
  }
});

// Decrement button event listener
cartDecrement.addEventListener("click", () => {
  if (indexNo > 1) {
    indexNo--;
    itemNo.textContent = indexNo;
  }
});
// Close the cart when clicking outside of it
document.addEventListener("click", () => {
if (!cart.classList.contains("hide")) {
cart.classList.add("hide");
}
});



// dynamically adding contents to the cart
const button = document.getElementById("button");
const notification = document.querySelector(".notification");
const message = document.querySelectorAll(".message");
const item = document.querySelector(".addtocart > :nth-child(2)");


button.addEventListener("click", () => {
  if (item.textContent > 0) {
    notification.style.visibility = "visible";
      // Display success message for adding items to the cart
      message[0].classList.add("render");
      setTimeout(() => {
        message[0].classList.remove("render");
      }, 3000);
      cart.innerHTML = `<div class="name">Cart</div>
       <ul class="list product">
      <li>
          <div class="Cartitem">
              <div class="thumb">
                <img src="images/image-product-1-thumbnail.jpg" alt="image product 1" />
              </div>
              <div class="cartDetail">
                  <p class="detailName">Fall Limited Edition sneakers</p>
                  <p class="detailPrice">$125.00 x <span>3</span> <b>$375.00</b></p>
                </div>
      
                <div class="trash">
                  <img src="images/icon-delete.svg" alt="icon delete" />
                </div>
              </div>
      </li>
  </ul>
  <div>
      <button id="checkout">Checkout</button>`
  

      const spanEl = document.querySelector("span");
    const total = document.querySelector("b");


    spanEl.textContent = item.textContent;
    let result = 125.0 * Number(spanEl.textContent);
    total.textContent = `$${result}.00`;
  
      // Attach event listeners to the trash icon and checkout button
      trashCan();
      checkOutFunc();
    } else {
      // Display an error message if no item quantity is selected
      message[1].classList.add("renderMsg");
      setTimeout(() => {
        message[1].classList.remove("renderMsg");
      }, 3000);
    }
  });
  
  // Function to handle removing items from the cart
  const trashCan = function () {
    const trash = document.querySelector(".trash");
  
    trash.addEventListener("click", () => {
      cart.innerHTML = `<div class="name">Cart</div>
      <div class="empty">Your cart is empty.</div>`;
      notification.style.visibility = "hidden";
  
      // Display success message for removing items from the cart
      message[2].classList.add("show");
      setTimeout(() => {
        message[2].classList.remove("show");
      }, 3000);
  
      cart.classList.add("hide");
    });
  };
  // const checkOutFunc = function () {
  //   const checkout = document.getElementById("checkout");
  
  //   checkout.addEventListener("click", () => {
  //     console.log("I'm being clicked");
  //     cart.innerHTML = `
  //                   <div class="name">Cart</div>
  //                   <div class="verified">
  //                           <img src="./design/verified.gif" alt="an image">
  //                       </div>`;
  
  //     notification.style.visibility = "hidden";
  
  //     setTimeout(() => {
  //       cart.innerHTML = `<div class="name">Cart</div>`;
  //       cart.classList.add("hide");
  //     }, 2000);
  //   });
  // };
  
  // document.addEventListener("click", () => {
  //   if (!cart.classList.contains("hide")) {
  //     cart.classList.toggle("hide");
  //   }
  // });
  
  
  
  


  
  