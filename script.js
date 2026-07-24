// ===============================
// CAMBISTELLA PRODUCT DATABASE
// ===============================

const products = [

{
    id:1,
    category:"Dishwashing",

    name:"Safety Dishwashing Liquid",

    image:"",

    description:"Powerful Cleaning & Gentle on Hands",

    sizes:[
        {size:"100ml",price:0.50},
        {size:"250ml",price:0.90},
        {size:"380ml",price:1.20},
        {size:"500ml",price:1.50},
        {size:"1000ml",price:2.80},
        {size:"3000ml",price:6.50},
        {size:"5000ml",price:9.50},
        {size:"30L",price:45.00}
    ]
},

{
    id:2,
    category:"Laundry",

    name:"Premium Laundry Liquid",

    image:"",

    description:"Deep Cleaning Formula",

    sizes:[
        {size:"500ml",price:2.00},
        {size:"1000ml",price:3.50},
        {size:"3000ml",price:8.50},
        {size:"5000ml",price:12.00},
        {size:"30L",price:55.00}
    ]
}

];

// ===============================
// SHOW PRODUCTS
// ===============================

const productList=document.getElementById("product-list");

products.forEach(product=>{

let options="";

product.sizes.forEach(item=>{
options+=`<option>${item.size} - $${item.price.toFixed(2)}</option>`;
});

productList.innerHTML+=`

<div class="product-card">

<h3>${product.name}</h3>

<p>${product.description}</p>

<select>

${options}

</select>

<br><br>

<button>
Add to Cart
</button>

<hr>

</div>

`;

});
