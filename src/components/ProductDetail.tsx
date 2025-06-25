import type React from 'react';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, getRelatedProducts, type Product } from '../data/products';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const product = id ? getProductById(id) : null;

  if (!product) {
    return (
      <div className="min-h-screen bg-[#f7f6f7] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#4e4741] mb-4">Product Not Found</h2>
          <button
            onClick={() => navigate('/')}
            className="bg-[#99514e] text-white px-6 py-2 rounded hover:bg-[#8b4c47] transition-colors"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={`star-${rating}-${i}`} className={i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}>
        ⭐
      </span>
    ));
  };

  const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <img
        src={product.mainImage}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h4 className="font-semibold text-[#4e4741] mb-2">{product.name}</h4>
        <p className="text-[#99514e] font-bold text-lg">${product.price}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f7f6f7]">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center space-x-2 text-sm text-[#8b8b8b]">
            <button onClick={() => navigate('/')} className="hover:text-[#99514e]">
              Home
            </button>
            <span>›</span>
            <button onClick={() => navigate('/')} className="hover:text-[#99514e]">
              Products
            </button>
            <span>›</span>
            <span className="text-[#4e4741] font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src={product.images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={image}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImageIndex === index
                      ? 'border-[#99514e]'
                      : 'border-gray-200 hover:border-[#caa194]'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-[#4e4741] mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {renderStars(product.rating)}
                  <span className="ml-2 text-[#8b8b8b]">({product.reviews} reviews)</span>
                </div>
                <span className={`px-2 py-1 rounded text-sm ${
                  product.inStock
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
              <p className="text-4xl font-bold text-[#99514e] mb-4">${product.price}</p>
              <p className="text-[#8b8b8b] leading-relaxed">{product.longDescription}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-[#4e4741] mb-3">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center text-[#8b8b8b]">
                    <span className="w-2 h-2 bg-[#99514e] rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-lg font-semibold text-[#4e4741] mb-3">Specifications</h3>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-[#4e4741]">Size:</span>
                    <span className="ml-2 text-[#8b8b8b]">{product.specifications.size}</span>
                  </div>
                  <div>
                    <span className="font-medium text-[#4e4741]">Delivery:</span>
                    <span className="ml-2 text-[#8b8b8b]">{product.specifications.delivery}</span>
                  </div>
                  <div>
                    <span className="font-medium text-[#4e4741]">Freshness:</span>
                    <span className="ml-2 text-[#8b8b8b]">{product.specifications.freshness}</span>
                  </div>
                  <div>
                    <span className="font-medium text-[#4e4741]">Vase Included:</span>
                    <span className="ml-2 text-[#8b8b8b]">
                      {product.specifications.vaseIncluded ? 'Yes' : 'No'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="space-y-3">
              <button
                className="w-full bg-[#99514e] text-white py-3 rounded-lg font-semibold hover:bg-[#8b4c47] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!product.inStock}
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
              <button className="w-full border border-[#99514e] text-[#99514e] py-3 rounded-lg font-semibold hover:bg-[#99514e] hover:text-white transition-colors">
                Add to Wishlist ❤️
              </button>
            </div>
          </div>
        </div>

        {/* Care Instructions */}
        <div className="mt-12 bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-[#4e4741] mb-4">Care Instructions</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.care.map((instruction, index) => (
              <div key={instruction} className="flex items-start space-x-3">
                <span className="w-6 h-6 bg-[#caa194] text-white rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">
                  {index + 1}
                </span>
                <span className="text-[#8b8b8b]">{instruction}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-[#4e4741] mb-6">Related Products</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
