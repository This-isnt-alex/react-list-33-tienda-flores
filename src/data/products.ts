export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  mainImage: string;
  images: string[];
  description: string;
  longDescription: string;
  features: string[];
  care: string[];
  specifications: {
    size: string;
    delivery: string;
    freshness: string;
    vaseIncluded: boolean;
  };
  inStock: boolean;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: "rose-bouquet-11-red",
    name: "Rose Bouquet 11 Red Roses",
    price: 89,
    category: "bouquets",
    mainImage: "https://ugc.same-assets.com/rUncuhknNLHNa2-g-_0yR2jfwGC4UpnI.jpeg",
    images: [
      "https://ugc.same-assets.com/rUncuhknNLHNa2-g-_0yR2jfwGC4UpnI.jpeg",
      "https://ugc.same-assets.com/G_HY6Z6LLzl9xzvAAm0A302bIQpCSDlC.jpeg",
      "https://ugc.same-assets.com/d-lg0NSJdudfja61bPUX9HB4wuOS9rUG.jpeg"
    ],
    description: "A stunning arrangement of 11 premium red roses",
    longDescription: "Our signature rose bouquet features 11 carefully selected premium red roses, each bloom hand-picked for its perfect form and vibrant color. This classic arrangement symbolizes deep love and passion, making it perfect for romantic occasions, anniversaries, or simply to express your heartfelt emotions. Each rose is sourced from our trusted growers and arranged by our skilled florists to create a breathtaking display of natural beauty.",
    features: [
      "11 premium red roses",
      "Hand-selected for quality",
      "Professional arrangement",
      "Elegant wrapping",
      "Same-day delivery available"
    ],
    care: [
      "Trim stems at an angle under running water",
      "Place in clean vase with fresh water",
      "Change water every 2-3 days",
      "Keep away from direct sunlight",
      "Remove wilted leaves"
    ],
    specifications: {
      size: "Medium (45-50cm height)",
      delivery: "Same day available",
      freshness: "7-10 days",
      vaseIncluded: false
    },
    inStock: true,
    rating: 4.8,
    reviews: 124
  },
  {
    id: "premium-white-roses",
    name: "Premium White Roses",
    price: 95,
    category: "bouquets",
    mainImage: "https://ugc.same-assets.com/G_HY6Z6LLzl9xzvAAm0A302bIQpCSDlC.jpeg",
    images: [
      "https://ugc.same-assets.com/G_HY6Z6LLzl9xzvAAm0A302bIQpCSDlC.jpeg",
      "https://ugc.same-assets.com/rb8tv6ZbPajLJ85QHeMgTxnTAIkjp0ST.jpeg",
      "https://ugc.same-assets.com/rUncuhknNLHNa2-g-_0yR2jfwGC4UpnI.jpeg"
    ],
    description: "Elegant white roses symbolizing purity and new beginnings",
    longDescription: "These exquisite white roses represent purity, innocence, and new beginnings. Perfect for weddings, sympathy arrangements, or celebrating new chapters in life. Our premium white roses are cultivated in optimal conditions to ensure the purest white color and longest-lasting blooms. Each arrangement is carefully crafted to showcase the natural elegance and timeless beauty of these magnificent flowers.",
    features: [
      "Premium white roses",
      "Symbol of purity and new beginnings",
      "Perfect for weddings and special occasions",
      "Long-lasting blooms",
      "Elegant presentation"
    ],
    care: [
      "Cut stems underwater at 45-degree angle",
      "Use clean, cool water",
      "Add flower food if provided",
      "Display in cool location",
      "Replace water regularly"
    ],
    specifications: {
      size: "Large (50-55cm height)",
      delivery: "Next day delivery",
      freshness: "8-12 days",
      vaseIncluded: false
    },
    inStock: true,
    rating: 4.9,
    reviews: 98
  },
  {
    id: "mixed-flower-bouquet",
    name: "Mixed Flower Bouquet",
    price: 79,
    category: "bouquets",
    mainImage: "https://ugc.same-assets.com/_cR4fwzGqSwWC8C8llWPwtAX9Ixfjiju.jpeg",
    images: [
      "https://ugc.same-assets.com/_cR4fwzGqSwWC8C8llWPwtAX9Ixfjiju.jpeg",
      "https://ugc.same-assets.com/vNGZ49I-IMgjdGbLCPNGa4EynObokLmb.jpeg",
      "https://ugc.same-assets.com/c_Ip0SozznWYH8SDnGraMyYlxk6ZzUhc.jpeg"
    ],
    description: "A vibrant mix of seasonal flowers in beautiful colors",
    longDescription: "Our mixed flower bouquet brings together the best of the season in a harmonious blend of colors, textures, and fragrances. This cheerful arrangement features a carefully curated selection of premium flowers including roses, chrysanthemums, and seasonal blooms. Each bouquet is unique and designed to brighten any space with its vibrant energy and natural beauty. Perfect for birthdays, congratulations, or just because moments.",
    features: [
      "Seasonal flower variety",
      "Vibrant color combination",
      "Fresh, premium blooms",
      "Unique arrangement",
      "Perfect for any occasion"
    ],
    care: [
      "Trim stems regularly",
      "Use lukewarm water initially",
      "Remove spent blooms",
      "Keep in cool environment",
      "Mist petals lightly"
    ],
    specifications: {
      size: "Medium (40-45cm height)",
      delivery: "Same day available",
      freshness: "7-10 days",
      vaseIncluded: false
    },
    inStock: true,
    rating: 4.7,
    reviews: 156
  },
  {
    id: "elegant-pink-roses",
    name: "Elegant Pink Roses",
    price: 85,
    category: "bouquets",
    mainImage: "https://ugc.same-assets.com/PHSJq5GM6qAYJma4iMAygBeW5PajFToo.jpeg",
    images: [
      "https://ugc.same-assets.com/PHSJq5GM6qAYJma4iMAygBeW5PajFToo.jpeg",
      "https://ugc.same-assets.com/d-lg0NSJdudfja61bPUX9HB4wuOS9rUG.jpeg",
      "https://ugc.same-assets.com/rb8tv6ZbPajLJ85QHeMgTxnTAIkjp0ST.jpeg"
    ],
    description: "Soft pink roses perfect for expressing gratitude and admiration",
    longDescription: "These elegant pink roses convey gratitude, admiration, and gentle affection. The soft pink hue represents grace and appreciation, making this bouquet perfect for mother's day, thank you gestures, or celebrating friendships. Our pink roses are grown with special care to achieve the perfect shade and petal formation. Each bloom is selected for its beauty and arranged to create a stunning display of feminine elegance.",
    features: [
      "Soft pink roses",
      "Symbol of gratitude and grace",
      "Perfect petal formation",
      "Feminine and elegant",
      "Ideal for appreciation gestures"
    ],
    care: [
      "Cut stems under cold water",
      "Remove lower leaves",
      "Use flower preservative",
      "Keep in indirect light",
      "Change water every few days"
    ],
    specifications: {
      size: "Medium (45-50cm height)",
      delivery: "Same day available",
      freshness: "7-10 days",
      vaseIncluded: false
    },
    inStock: true,
    rating: 4.8,
    reviews: 89
  },
  {
    id: "seven-red-roses-vase",
    name: "7 Red Roses in Vase",
    price: 69,
    category: "arrangements",
    mainImage: "https://ugc.same-assets.com/7iSw4aL_Ca3ZZAz1MXBfswswM163O12B.jpeg",
    images: [
      "https://ugc.same-assets.com/7iSw4aL_Ca3ZZAz1MXBfswswM163O12B.jpeg",
      "https://ugc.same-assets.com/rUncuhknNLHNa2-g-_0yR2jfwGC4UpnI.jpeg",
      "https://ugc.same-assets.com/URt1NK9F2pxO_T6N8AVtmbWkHqQ_WGUN.jpeg"
    ],
    description: "Seven red roses beautifully arranged in an elegant vase",
    longDescription: "This sophisticated arrangement features seven premium red roses artfully displayed in an elegant glass vase. The perfect number for expressing luck and good fortune, these roses are carefully positioned to showcase their natural beauty. This arrangement is ready to display immediately and makes a wonderful centerpiece for any table or special occasion. The included vase adds lasting value and can be used for future arrangements.",
    features: [
      "7 premium red roses",
      "Elegant glass vase included",
      "Ready-to-display arrangement",
      "Symbol of luck and fortune",
      "Perfect centerpiece"
    ],
    care: [
      "Keep vase filled with fresh water",
      "Trim stems every few days",
      "Clean vase regularly",
      "Position away from heat sources",
      "Remove wilted blooms promptly"
    ],
    specifications: {
      size: "Compact (35-40cm height)",
      delivery: "Same day available",
      freshness: "7-10 days",
      vaseIncluded: true
    },
    inStock: true,
    rating: 4.6,
    reviews: 78
  },
  {
    id: "beautiful-garden-mix",
    name: "Beautiful Garden Mix",
    price: 119,
    category: "premium",
    mainImage: "https://ugc.same-assets.com/c_Ip0SozznWYH8SDnGraMyYlxk6ZzUhc.jpeg",
    images: [
      "https://ugc.same-assets.com/c_Ip0SozznWYH8SDnGraMyYlxk6ZzUhc.jpeg",
      "https://ugc.same-assets.com/vNGZ49I-IMgjdGbLCPNGa4EynObokLmb.jpeg",
      "https://ugc.same-assets.com/_cR4fwzGqSwWC8C8llWPwtAX9Ixfjiju.jpeg"
    ],
    description: "A premium garden-style arrangement with diverse seasonal blooms",
    longDescription: "This premium garden mix arrangement captures the essence of a English country garden with its diverse collection of seasonal blooms. Featuring a masterful combination of roses, wildflowers, greenery, and seasonal accents, this arrangement brings the beauty of nature indoors. Each piece is hand-selected and arranged by our master florists to create a natural, organic look that celebrates the diversity and beauty of garden flowers.",
    features: [
      "Premium garden-style arrangement",
      "Diverse seasonal blooms",
      "Master florist designed",
      "Natural, organic appearance",
      "Includes premium greenery"
    ],
    care: [
      "Provide ample fresh water daily",
      "Trim different stem types appropriately",
      "Remove spent blooms regularly",
      "Maintain cool temperature",
      "Mist greenery occasionally"
    ],
    specifications: {
      size: "Large (55-60cm height)",
      delivery: "Premium next-day delivery",
      freshness: "10-14 days",
      vaseIncluded: false
    },
    inStock: true,
    rating: 4.9,
    reviews: 67
  },
  {
    id: "premium-white-arrangement",
    name: "Premium White Arrangement",
    price: 149,
    category: "premium",
    mainImage: "https://ugc.same-assets.com/URt1NK9F2pxO_T6N8AVtmbWkHqQ_WGUN.jpeg",
    images: [
      "https://ugc.same-assets.com/URt1NK9F2pxO_T6N8AVtmbWkHqQ_WGUN.jpeg",
      "https://ugc.same-assets.com/G_HY6Z6LLzl9xzvAAm0A302bIQpCSDlC.jpeg",
      "https://ugc.same-assets.com/rb8tv6ZbPajLJ85QHeMgTxnTAIkjp0ST.jpeg"
    ],
    description: "Luxurious white flower arrangement perfect for special occasions",
    longDescription: "Our premium white arrangement represents the pinnacle of floral artistry, featuring the finest white blooms including roses, lilies, and premium seasonal flowers. This luxurious arrangement is perfect for weddings, memorial services, or any occasion that calls for elegance and sophistication. Each flower is hand-selected for its pristine condition and arranged with meticulous attention to detail to create a truly spectacular display.",
    features: [
      "Luxury white flowers",
      "Hand-selected premium blooms",
      "Master florist arrangement",
      "Perfect for special occasions",
      "Sophisticated and elegant"
    ],
    care: [
      "Use filtered or distilled water",
      "Cut stems under running water",
      "Add provided flower food",
      "Keep in cool, stable environment",
      "Handle with extra care"
    ],
    specifications: {
      size: "Extra Large (60-65cm height)",
      delivery: "White-glove delivery service",
      freshness: "12-16 days",
      vaseIncluded: true
    },
    inStock: true,
    rating: 5.0,
    reviews: 45
  },
  {
    id: "colorful-spring-bouquet",
    name: "Colorful Spring Bouquet",
    price: 99,
    category: "seasonal",
    mainImage: "https://ugc.same-assets.com/vNGZ49I-IMgjdGbLCPNGa4EynObokLmb.jpeg",
    images: [
      "https://ugc.same-assets.com/vNGZ49I-IMgjdGbLCPNGa4EynObokLmb.jpeg",
      "https://ugc.same-assets.com/c_Ip0SozznWYH8SDnGraMyYlxk6ZzUhc.jpeg",
      "https://ugc.same-assets.com/_cR4fwzGqSwWC8C8llWPwtAX9Ixfjiju.jpeg"
    ],
    description: "Vibrant spring flowers celebrating the season's renewal",
    longDescription: "Celebrate the arrival of spring with this vibrant bouquet featuring the season's most beautiful blooms. This arrangement captures the joy and renewal of spring with its bright colors and fresh fragrances. Featuring tulips, daffodils, and other spring favorites, this bouquet brings the energy of the season indoors. Perfect for Easter, Mother's Day, or simply to celebrate the beauty of new beginnings.",
    features: [
      "Seasonal spring flowers",
      "Bright, vibrant colors",
      "Fresh spring fragrances",
      "Symbol of renewal and growth",
      "Perfect for spring celebrations"
    ],
    care: [
      "Trim stems daily for spring flowers",
      "Use cool, fresh water",
      "Keep in cool location",
      "Remove wilted blooms quickly",
      "Enjoy the spring fragrance"
    ],
    specifications: {
      size: "Large (50-55cm height)",
      delivery: "Same day available",
      freshness: "8-12 days",
      vaseIncluded: false
    },
    inStock: true,
    rating: 4.7,
    reviews: 92
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getRelatedProducts = (currentProduct: Product, limit = 4): Product[] => {
  return products
    .filter(product =>
      product.id !== currentProduct.id &&
      product.category === currentProduct.category
    )
    .slice(0, limit);
};
