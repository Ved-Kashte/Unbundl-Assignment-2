// Sample product data (you can replace this with your product data)
const products = [
    { id: 1, name: 'SNICKERS', price: 10, image: 'https://wallpapercave.com/wp/wp3963037.jpg' },
    { id: 2, name: 'Dairy Milk', price: 5, image: 'https://wallpapercave.com/wp/wp6275278.jpg' },
    { id: 3, name: 'Mr.Goodbar', price: 150, image: 'https://www.vhv.rs/dpng/d/532-5320831_mr-goodbar-king-size-hd-png-download.png' },
    { id: 4, name: 'KitKat', price: 55, image: 'https://t4.ftcdn.net/jpg/03/22/55/57/360_F_322555727_zdf5142hYGHWuJHgx2zaMtNiL8kgK6k9.jpg' },
    { id: 5, name: 'Dark Chocolate', price: 45, image: 'https://www.bigbasket.com/media/uploads/p/l/40181888_1-amul-dark-chocolate.jpg' },
    { id: 6, name: 'Bournville', price: 115, image: 'https://www.bigbasket.com/media/uploads/p/xxl/40191129-2_4-cadbury-bournville-rich-cocoa-70-dark-chocolate-bar.jpg' },
    { id: 7, name: 'Dairy Mily - Royal Dark', price: 108, image: 'https://i.pinimg.com/1200x/19/32/0e/19320e10386e0e1bf5ea203b2f4756f0.jpg' },
    { id: 8, name: 'Harshey', price: 55, image: 'https://wallpaperaccess.com/full/2291481.jpg' },
    { id: 9, name: 'Ferrero Rocher', price: 195, image: 'https://m.media-amazon.com/images/I/81JugTbWdzL.jpg' },
    { id: 10, name: 'Lunch Bar', price: 75, image: 'https://cadbury.co.za/sites/default/files/2022-09/LunchbarIndividual.png' },
    // Add more product objects here
];


const cart = [];
let cartTotal = 0;

document.addEventListener('DOMContentLoaded', () => {
    const productsSection = document.querySelector('.products');
    const cartItems = document.querySelector('#cart-items');
    const cartTotalElement = document.querySelector('#cart-total');

    // Create product cards
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: ${product.price +" "+ "Rupees"}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;
        productsSection.appendChild(productCard);
    });

    // Add event listener to 'Add to Cart' buttons
    productsSection.addEventListener('click', (event) => {
        if (event.target.classList.contains('add-to-cart')) {
            const productId = parseInt(event.target.getAttribute('data-id'));
            const selectedProduct = products.find(product => product.id === productId);

            if (cart.length < 8) {
                cart.push(selectedProduct);
                cartItems.innerHTML += `<li>${selectedProduct.name} - ${selectedProduct.price +" "+"Rupees"}</li>`;
                cartTotal += selectedProduct.price ;
                cartTotalElement.textContent = cartTotal +" "+"Rupees";
            } else {
                alert('Your cart is full! You cannot add more items.');
            }
        }
    });
});
