const products = [
{
id:1,
name:"Laundry Liquid Formula",
price:3.50
},

{
id:2,
name:"Dishwashing Liquid Formula",
price:2.80
},

{
id:3,
name:"Fabric Softener Formula",
price:4.20
},

{
id:4,
name:"Body Wash Formula",
price:5.00
},

{
id:5,
name:"Facial Cleanser Formula",
price:6.50
},

{
id:6,
name:"Hair Shampoo Formula",
price:5.50
}
];

const productList = document.getElementById("product-list");

products.forEach(product=>{

const card=document.createElement("div");

card.innerHTML=`
<h3>${product.name}</h3>

<p><b>$${product.price.toFixed(2)}</b></p>

<button onclick="alert('Product: ${product.name}')">
View
</button>

<hr>
`;

productList.appendChild(card);

});
