// Smooth Scrolling for Links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Image Hover Effects
const productImages = document.querySelectorAll('.product-box .box img, .trending .main-box .box img, .popular .main-box .box img');

productImages.forEach(image => {
  image.addEventListener('mouseover', () => {
    image.style.transform = 'scale(1.1)';
    image.style.boxShadow = '0px 0px 20px rgba(0, 0, 0, 0.5)';
  });
  image.addEventListener('mouseout', () => {
    image.style.transform = 'scale(1)';
    image.style.boxShadow = '0px 0px 0px rgba(0, 0, 0, 0.5)';
  });
});

// Load More Button Functionality (for popular section)
const loadMoreBtn = document.querySelector('.popular .btn button');
const popularItems = document.querySelectorAll('.popular .main-box .box');
let itemsShown = 8; // Initial number of items to show

loadMoreBtn.addEventListener('click', () => {
  itemsShown += 4; // Increase the number of items to show
  popularItems.forEach((item, index) => {
    if (index < itemsShown) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });

  // Update the button text
  if (itemsShown >= popularItems.length) {
    loadMoreBtn.textContent = 'All Items Loaded';
    loadMoreBtn.disabled = true;
  }
});

// Dynamically Add Social Icons (for About Us section)
const socialIcons = document.querySelectorAll('.foot-sec .main-txt-box .txt1 .social i');

socialIcons.forEach(icon => {
  icon.addEventListener('mouseover', () => {
    icon.style.color = '#0099ff'; // Change color on hover
  });

  icon.addEventListener('mouseout', () => {
    icon.style.color = 'black'; // Reset color on mouseout
  });
});

// Animated Text Effects (Optional)
// You can add text animation effects like typing animation or fading for titles using libraries like Typed.js or GSAP.

// Example using Typed.js
/*
<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
<script>
  new Typed('.txt1 h1', {
    strings: ['About Us', 'Learn More'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
  });
</script>
*/

// ... add more advanced JavaScript features as needed for your design ... 
const navToggle = document.querySelector('.nav-toggle'); // Add a button/icon for mobile menu
const headerItems = document.querySelector('.header-item'); 

navToggle.addEventListener('click', () => {
  headerItems.classList.toggle('show-menu'); // Toggle a CSS class for responsive menu
  navToggle.classList.toggle('active'); // Change the button's appearance
});
// Assume you have product categories (e.g., 'tv', 'speakers', 'airpods')
const productCategories = document.querySelectorAll('.product-filter button'); // Buttons for filtering
const productItems = document.querySelectorAll('.product-box .box'); // Your product containers

productCategories.forEach(category => {
  category.addEventListener('click', () => {
    productCategories.forEach(btn => btn.classList.remove('active')); // Remove active class from all buttons
    category.classList.add('active'); // Add active class to the clicked button

    productItems.forEach(item => {
      if (item.classList.contains(category.dataset.category)) { // Check if product has the category class
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
// ... your existing JavaScript code ... 

// Cart Functionality
const addToCartButtons = document.querySelectorAll('.box button');
const cartItemsList = document.getElementById('cartItems');
const cartTotalElement = document.getElementById('cartTotal');
let cart = {}; // Initialize an empty cart object

// Function to add an item to the cart
function addToCart(productId) {
  if (cart[productId]) {
    cart[productId]++;
  } else {
    cart[productId] = 1;
  }
  updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
  cartItemsList.innerHTML = ''; // Clear existing items
  let cartTotal = 0;

  for (const productId in cart) {
    const item = cart[productId];
    const product = { /* Get product details from your data source */ }; // Replace with your actual product data
    const listItem = document.createElement('li');
    listItem.textContent = `${product.name} x ${item}`; 
    cartItemsList.appendChild(listItem);
    cartTotal += product.price * item; 
  }

  cartTotalElement.textContent = cartTotal.toFixed(2); 
}

// Add event listeners to add to cart buttons
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId; 
    addToCart(productId);
  });
});

// ... your existing JavaScript code ... 