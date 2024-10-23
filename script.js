// Open the modal
function openModal() {
    document.getElementById('authModal').style.display = 'block';
}

// Close the modal
function closeModal() {
    document.getElementById('authModal').style.display = 'none';
}

// Switch to Sign Up form
function switchToSignUp() {
    document.getElementById('signInForm').style.display = 'none';
    document.getElementById('signUpForm').style.display = 'block';
    document.getElementById('switchFormText').innerHTML = "Already have an account? <span onclick='switchToSignIn()'>Sign in</span>";
}

// Switch to Sign In form
function switchToSignIn() {
    document.getElementById('signInForm').style.display = 'block';
    document.getElementById('signUpForm').style.display = 'none';
    document.getElementById('switchFormText').innerHTML = "Don't have an account? <span onclick='switchToSignUp()'>Sign up</span>";
}

// Sign In function
function signIn() {
    const email = document.getElementById('emailSignIn').value;
    const password = document.getElementById('passwordSignIn').value;
    // Retrieve stored user data from local storage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    if (email === storedEmail && password === storedPassword) {
        alert("Signed in successfully!");
        closeModal();
    } else {
        alert("Invalid email or password!");
    }


    // Implement your sign-in logic here
    alert("Signed in with " + email);
    closeModal();
}

// Sign Up function
function signUp() {
    const name = document.getElementById('fullName').value;
    const email = document.getElementById('emailSignUp').value;
    const password = document.getElementById('passwordSignUp').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
     // Check if password matches confirm password
     if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    // Implement your sign-up logic here
    alert("Signed up with " + email);
    closeModal();
}
// Clear local storage
localStorage.clear();

// Initialize product array
const products = [
    { id: 1, name: 'Laptop', price: 1200.00, quantity: 1, image: "https://via.placeholder.com/400x300?text=Laptop" },
    { id: 2, name: 'Headphones', price: 150.00, quantity: 1, image: "https://via.placeholder.com/400x300?text=Headphones" },
    { id: 3, name: 'Mouse', price: 25.00, quantity: 1, image: "https://via.placeholder.com/400x300?text=Mouse" },
    { id: 4, name: 'Airpods', price: 120.00, quantity: 1, image: "https://via.placeholder.com/400x300?text=Airpods" },
    { id: 5, name: 'Cable', price: 10.00, quantity: 1, image: "https://via.placeholder.com/400x300?text=Cable" },
    { id: 6, name: 'Keyboard', price: 50.00, quantity: 1, image: "https://via.placeholder.com/400x300?text=Keyboard" },
    { id: 7, name: 'Cable', price: 10.00, quantity: 1, image: "https://via.placeholder.com/400x300?text=Cable" },
    { id: 8, name: 'Keyboard', price: 50.00, quantity: 1, image: "https://via.placeholder.com/400x300?text=Keyboard" }
];

// Set products array in local storage
localStorage.setItem('products', JSON.stringify(products));

console.log('Products stored in local storage:', products);
function goToPreviousPage() {
    window.location.href = "productpage.html"; // Link to the previous page
}
// Fetch products asynchronously using async/await
// Fetch products asynchronously using async/await
async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();

        // Pick only 8 products from the fetched data
        const selectedProducts = data.slice(0, 12);

        // Get the product container element from the HTML
        const productContainer = document.getElementById('productContainer');
        productContainer.innerHTML = ''; // Clear the container before adding products

        // Dynamically create and insert product elements into the container
        selectedProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('card', 'col-md-3'); // Add Bootstrap and custom classes

            // Create the card with image, title, and description, and link it to productCart.html
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.title}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${product.title.substring(0, 25)}...</h5>
                    <p class="card-text">$${product.price}</p>
                    <a href="productCart.html" class="btn btn-primary">Add to Cart</a>
                </div>
            `;

            productContainer.appendChild(productCard);
        });

    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Call fetchProducts to get the products from the API
fetchProducts();

// Back button functionality
function goToPreviousPage() {
    window.history.back();
}
