// src/HeroSection.ts

export function HeroSection(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'bg-gray-50 py-16';

  section.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
      <div class="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">
          Discover the Future of Sound & Power
        </h2>
        <p class="text-lg text-gray-600 mb-6">
          Shop premium headphones and the latest smartphones at unbeatable prices. Upgrade your tech life today!
        </p>
        <a href="#products" class="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition">
          Browse Products
        </a>
      </div>

      <div class="md:w-1/2 flex justify-center">
        <img
          id="hero-image"
          src="https://i.pinimg.com/736x/78/66/e5/7866e564e7c7ffb9461285c010c5e7c7.jpg"
          alt="Tech Products"
          class="w-full max-w-md rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer"
        />
      </div>
    </div>
  `;

  const image = section.querySelector('#hero-image') as HTMLImageElement;
  image.addEventListener('click', () => {
    alert('You clicked the hero product! ');
  });

  return section;
}
