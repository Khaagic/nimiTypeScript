// src/main.ts
import { HeroSection } from './heroSec.js'; // <--- **ADD .js EXTENSION HERE** for browser compatibility
import { Product, product } from './Product.js';


const app = document.getElementById('app');
if (app) {
  app.appendChild(HeroSection());
}
console.log('Main loaded');

// productCard



function renderProductCard(product: Product): void {
  const container = document.getElementById("product-container");
  if (!container) return;

  container.innerHTML = `
    <div class="bg-white rounded-2xl shadow-lg max-w-sm w-full overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img class="w-full h-64 object-cover" src="${product.imageUrl}" alt="${product.model}" />
      <div class="p-6">
        <h2 class="text-xl font-semibold text-gray-800">${product.brand} ${product.model}</h2>
        <p class="text-gray-500 text-sm mt-1">${product.description}</p>
        <div class="flex items-center justify-between mt-4">
          <span class="text-lg font-bold text-indigo-600">$${product.price.toFixed(2)}</span>
          <button class="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">Buy Now</button>
        </div>
      </div>
    </div>
  `;
}

renderProductCard(product);
