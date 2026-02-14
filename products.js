// E-commerce Products Module
// This module manages product data, filtering, and retrieval

// ==================== DATA STRUCTURE ====================
const products = [
  {
    id: 1,
    name: "Laptop Pro",
    category: "Electronics",
    price: 999.99,
    stock: 15,
    rating: 4.5,
    image: "/images/laptop-pro.jpg",
    description: "High-performance laptop with latest processor"
  },
  {
    id: 2,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 149.99,
    stock: 32,
    rating: 4.2,
    image: "/images/headphones.jpg",
    description: "Noise-cancelling wireless headphones"
  },
  {
    id: 3,
    name: "Cotton T-Shirt",
    category: "Clothing",
    price: 29.99,
    stock: 50,
    rating: 4.0,
    image: "/images/tshirt.jpg",
    description: "Premium quality cotton t-shirt"
  },
  {
    id: 4,
    name: "Running Shoes",
    category: "Footwear",
    price: 89.99,
    stock: 25,
    rating: 4.6,
    image: "/images/shoes.jpg",
    description: "Comfortable running shoes"
  }
  // TODO: Add more products here
];

// ==================== FUNCTIONS ====================

/**
 * Get all products
 * @returns {Array} Array of all products
 */
function getAllProducts() {
  // TODO: Implement fetching from database
  return products;
}

/**
 * Get a single product by ID
 * @param {number} productId - The product ID
 * @returns {Object|null} Product object or null if not found
 */
function getProductById(productId) {
  // TODO: Implement database query
  return products.find(product => product.id === productId) || null;
}

/**
 * Get products by category
 * @param {string} category - The category name
 * @returns {Array} Array of products in the category
 */
function getProductsByCategory(category) {
  // TODO: Add category validation
  return products.filter(product => product.category === category);
}

/**
 * Search products by name
 * @param {string} searchTerm - The search term
 * @returns {Array} Array of matching products
 */
function searchProducts(searchTerm) {
  // TODO: Implement case-insensitive search
  const term = searchTerm.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(term) ||
    product.description.toLowerCase().includes(term)
  );
}

/**
 * Filter products by price range
 * @param {number} minPrice - Minimum price
 * @param {number} maxPrice - Maximum price
 * @returns {Array} Array of products within price range
 */
function filterByPrice(minPrice, maxPrice) {
  // TODO: Add price validation
  return products.filter(product => 
    product.price >= minPrice && product.price <= maxPrice
  );
}

/**
 * Filter products by rating
 * @param {number} minRating - Minimum rating (0-5)
 * @returns {Array} Array of products with rating >= minRating
 */
function filterByRating(minRating) {
  // TODO: Validate rating range
  return products.filter(product => product.rating >= minRating);
}

/**
 * Get products in stock
 * @returns {Array} Array of products with stock > 0
 */
function getInStockProducts() {
  return products.filter(product => product.stock > 0);
}

/**
 * Sort products by different criteria
 * @param {Array} productList - Array of products to sort
 * @param {string} sortBy - Sort criteria: 'price', 'rating', 'name'
 * @param {string} order - 'asc' or 'desc'
 * @returns {Array} Sorted array of products
 */
function sortProducts(productList, sortBy = 'price', order = 'asc') {
  // TODO: Implement validation
  const sorted = [...productList].sort((a, b) => {
    let valueA, valueB;
    
    switch(sortBy) {
      case 'price':
        valueA = a.price;
        valueB = b.price;
        break;
      case 'rating':
        valueA = a.rating;
        valueB = b.rating;
        break;
      case 'name':
        valueA = a.name.toLowerCase();
        valueB = b.name.toLowerCase();
        break;
      default:
        return 0;
    }
    
    if (order === 'asc') {
      return valueA > valueB ? 1 : -1;
    } else {
      return valueA < valueB ? 1 : -1;
    }
  });
  
  return sorted;
}

/**
 * Add a new product (Admin function)
 * @param {Object} product - Product object with name, category, price, etc.
 * @returns {Object} The newly created product with ID
 */
function addProduct(product) {
  // TODO: Implement validation
  // TODO: Implement database insert
  const newProduct = {
    id: Math.max(...products.map(p => p.id)) + 1,
    ...product,
    stock: product.stock || 0,
    rating: product.rating || 0
  };
  products.push(newProduct);
  return newProduct;
}

/**
 * Update product details
 * @param {number} productId - Product ID
 * @param {Object} updates - Object with properties to update
 * @returns {Object|null} Updated product or null if not found
 */
function updateProduct(productId, updates) {
  // TODO: Implement validation
  // TODO: Implement database update
  const product = getProductById(productId);
  if (product) {
    Object.assign(product, updates);
    return product;
  }
  return null;
}

/**
 * Delete a product
 * @param {number} productId - Product ID
 * @returns {boolean} True if deleted,*
// JavaScript for product filtering and display
