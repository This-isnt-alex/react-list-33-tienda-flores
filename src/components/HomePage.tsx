import type React from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  // Get specific products for the featured section
  const featuredProducts = products.slice(0, 4);
  const bestSellerProducts = products.slice(4, 8);

  const ProductCard: React.FC<{ product: typeof products[0] }> = ({ product }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={product.mainImage}
        alt={product.name}
        className="w-full h-48 object-cover cursor-pointer hover:scale-105 transition-transform"
        onClick={() => navigate(`/product/${product.id}`)}
      />
      <div className="p-4">
        <h4 className="font-semibold text-[#4e4741] mb-2">{product.name}</h4>
        <p className="text-[#99514e] font-bold text-lg">${product.price}</p>
        <div className="flex space-x-2 mt-3">
          <button
            onClick={() => navigate(`/product/${product.id}`)}
            className="flex-1 bg-[#99514e] text-white py-2 rounded hover:bg-[#8b4c47] transition-colors"
          >
            View Details
          </button>
          <button className="px-3 py-2 border border-[#99514e] text-[#99514e] rounded hover:bg-[#99514e] hover:text-white transition-colors">
            ❤️
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="bg-gradient-to-r from-[#caa194] to-[#aa905f] py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Fresh Flowers
            </h1>
            <p className="text-xl text-white mb-8">
              Express your feelings with our beautiful fresh bouquets
            </p>
            <button className="bg-white text-[#99514e] px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              VIEW PRODUCTS
            </button>
          </div>
        </div>
      </section>

      {/* Category Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* For Lovers */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-[#caa194] to-[#99514e]" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#4e4741] mb-2">For Lovers</h3>
                <p className="text-[#8b8b8b] mb-4">Express love with our romantic flower arrangements</p>
                <button className="text-[#99514e] font-semibold hover:underline">
                  View Products →
                </button>
              </div>
            </div>

            {/* Birthday Flowers */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-[#aa905f] to-[#caa194]" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#4e4741] mb-2">Birthday Flowers</h3>
                <p className="text-[#8b8b8b] mb-4">Make birthdays special with our vibrant bouquets</p>
                <button className="text-[#99514e] font-semibold hover:underline">
                  View Products →
                </button>
              </div>
            </div>

            {/* New Business */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-[#8b8b8b] to-[#aa905f]" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#4e4741] mb-2">New Business</h3>
                <p className="text-[#8b8b8b] mb-4">Celebrate new beginnings with flowers!</p>
                <button className="text-[#99514e] font-semibold hover:underline">
                  View Products →
                </button>
              </div>
            </div>

            {/* Potted Plants */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-[#aa905f] to-[#8b8b8b]" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#4e4741] mb-2">Potted Plants</h3>
                <p className="text-[#8b8b8b] mb-4">A breath of fresh air for every corner</p>
                <button className="text-[#99514e] font-semibold hover:underline">
                  View Products →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#4e4741] mb-12">
            SEASON'S BEST FLOWERS & GIFTS
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Happy Birthday Section */}
      <section className="py-16 bg-gradient-to-r from-[#caa194] to-[#aa905f]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            HAPPY BIRTHDAYS
          </h2>
          <p className="text-xl text-white mb-8">
            Happiness that comes with flowers, crown your birthday!
          </p>
          <button className="bg-white text-[#99514e] px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
            SHOP NOW
          </button>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#4e4741] mb-12">
            BEST SELLERS
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellerProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Visit Our Store */}
      <section className="py-16 bg-[#f7f6f7]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#4e4741] mb-6">
                VISIT OUR STORE
              </h2>
              <div className="space-y-4 text-[#8b8b8b]">
                <p className="flex items-center">
                  <span className="mr-3">📍</span>
                  123 Flower Street, Garden City, GC 12345
                </p>
                <p className="flex items-center">
                  <span className="mr-3">📞</span>
                  (555) 123-4567
                </p>
                <p className="flex items-center">
                  <span className="mr-3">✉️</span>
                  info@batuflowers.com
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-[#4e4741] mb-4">Why Choose Us?</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#99514e] rounded-full mr-3" />
                    <span className="text-[#8b8b8b]">100% Customer Satisfaction</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#99514e] rounded-full mr-3" />
                    <span className="text-[#8b8b8b]">Same Day Delivery</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#99514e] rounded-full mr-3" />
                    <span className="text-[#8b8b8b]">Secure Shopping</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#caa194] to-[#aa905f] h-80 rounded-lg" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4e4741] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Batu Flowers</h3>
              <p className="text-gray-300 mb-4">
                Your trusted partner for beautiful flowers and memorable moments.
              </p>
              <div className="flex space-x-4">
                <span>📘</span>
                <span>📷</span>
                <span>🐦</span>
                <span>💼</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><button className="hover:text-white">About Us</button></li>
                <li><button className="hover:text-white">Bank Account Info</button></li>
                <li><button className="hover:text-white">Order Tracking</button></li>
                <li><button className="hover:text-white">Contact</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Privacy</h4>
              <ul className="space-y-2 text-gray-300">
                <li><button className="hover:text-white">Secure Shopping</button></li>
                <li><button className="hover:text-white">Privacy Policy</button></li>
                <li><button className="hover:text-white">Terms of Service</button></li>
                <li><button className="hover:text-white">Return Policy</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-300">
                <li>📍 123 Flower Street</li>
                <li>📞 (555) 123-4567</li>
                <li>✉️ info@batuflowers.com</li>
                <li>🕒 Mon-Sat: 9AM-8PM</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 Batu Flowers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
