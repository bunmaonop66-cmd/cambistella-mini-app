/* ===================================
   CAMBISTELLA Mini App v1.1
=================================== */

const products = [

{
    id:1,
    category:"Laundry",
    name:"Premium Laundry Liquid",
    description:"High Performance Laundry Detergent",
    sizes:[
        {size:"1000ml",price:3.50},
        {size:"3000ml",price:8.50},
        {size:"5000ml",price:12.50}
    ]
},

{
    id:2,
    category:"Dishwashing",
    name:"Dishwashing Liquid",
    description:"Powerful Grease Removal",
    sizes:[
        {size:"500ml",price:1.50},
        {size:"1000ml",price:2.80},
        {size:"5000ml",price:10.50}
    ]
},

{
    id:3,
    category:"Body Care",
    name:"Body Wash",
    description:"Moisturizing Formula",
    sizes:[
        {size:"500ml",price:4.00},
        {size:"1000ml",price:7.50}
    ]
}

];

let cart = [];
const productList = document.getElementById("product-list");

function displayProducts(list){

    productList.innerHTML = "";

    list.forEach(product=>{

        const card = document.createElement("div");

        card.className = "product-card";

        let sizeOptions = "";

        product.sizes.forEach(size=>{

            sizeOptions += `
                <option value="${size.price}">
                    ${size.size} - $${size.price.toFixed(2)}
                </option>
            `;

        });

        card.innerHTML = `

            <h3>${product.name}</h3>

            <p>${product.description}</p>

            <p><strong>Category:</strong> ${product.category}</p>

            <select>

                ${sizeOptions}

            </select>

            <button>
                Add to Cart
            </button>

        `;

        productList.appendChild(card);

    });

}

displayProducts(products);
/* ===========================
   Search & Category Filter
=========================== */

const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");

function filterProducts(){

    const keyword = searchInput.value.toLowerCase();
    const category = categorySelect.value;

    const filtered = products.filter(product=>{

        const matchName =
            product.name.toLowerCase().includes(keyword);

        const matchCategory =
            category === "all" ||
            product.category === category;

        return matchName && matchCategory;

    });

    displayProducts(filtered);

}

searchInput.addEventListener("input", filterProducts);

categorySelect.addEventListener("change", filterProducts);

/* ===========================
   Shopping Cart
=========================== */

const cartItems = document.getElementById("cart-items");
const totalElement = document.getElementById("total");

function updateCart(){

    if(cart.length===0){

        cartItems.innerHTML="No items";

        totalElement.innerHTML="Total : $0.00";

        return;

    }

    let html="";
    let total=0;

    cart.forEach(item=>{

        html += `
        <p>
        ${item.name}
        (${item.size})
        - $${item.price.toFixed(2)}
        </p>
        `;

        total += item.price;

    });

    cartItems.innerHTML=html;

    totalElement.innerHTML=
    `Total : $${total.toFixed(2)}`;

}

/* ===========================
   Add To Cart
=========================== */

document.addEventListener("click",function(e){

    if(!e.target.matches(".product-card button")) return;

    const card=e.target.closest(".product-card");

    const name=
    card.querySelector("h3").textContent;

    const select=
    card.querySelector("select");

    const option=
    select.options[select.selectedIndex];

    const size=
    option.text.split("-")[0].trim();

    const price=
    parseFloat(select.value);

    cart.push({
        name,
        size,
        price
    });

    updateCart();

});

/* ===========================
   Checkout
=========================== */

document
.getElementById("checkoutBtn")
.addEventListener("click",()=>{

    if(cart.length===0){

        alert("Shopping cart is empty.");

        return;

    }

    alert("Thank you for shopping with CAMBISTELLA.");

});
