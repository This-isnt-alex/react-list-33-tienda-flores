import type React from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-[#99514e] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span>📍 Find Our Store</span>
            <span>📞 (555) 123-4567</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>🚚 Same Day Delivery!</span>
            <span>Contact Us</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="text-2xl font-bold text-[#4e4741] hover:text-[#99514e] transition-colors"
          >
            Batu Flowers
          </button>

          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => navigate('/')}
              className="text-[#4e4741] hover:text-[#99514e] transition-colors"
            >
              Home
            </button>
            <button className="text-[#4e4741] hover:text-[#99514e] transition-colors">
              Best Sellers
            </button>
            <button className="text-[#4e4741] hover:text-[#99514e] transition-colors">
              For Lovers
            </button>
            <button className="text-[#4e4741] hover:text-[#99514e] transition-colors">
              Bouquets
            </button>
            <button className="text-[#4e4741] hover:text-[#99514e] transition-colors">
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="text-[#4e4741] hover:text-[#99514e]">🛒 Cart (0)</button>
            <button className="text-[#4e4741] hover:text-[#99514e]">❤️ Wishlist</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
