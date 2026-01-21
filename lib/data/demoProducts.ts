import { Product, Material, ProductPart } from '@/types';

// Materials Library
export const materials: Material[] = [
  // Wood materials
  {
    id: 'oak',
    name: 'Oak Wood',
    type: 'wood',
    color: '#DEB887',
    priceModifier: 0,
    ecoFriendly: true,
  },
  {
    id: 'walnut',
    name: 'Walnut Wood',
    type: 'wood',
    color: '#8B4513',
    priceModifier: 150,
    ecoFriendly: true,
  },
  {
    id: 'mahogany',
    name: 'Mahogany Wood',
    type: 'wood',
    color: '#C04000',
    priceModifier: 200,
    ecoFriendly: false,
  },
  {
    id: 'cherry',
    name: 'Cherry Wood',
    type: 'wood',
    color: '#C71585',
    priceModifier: 180,
    ecoFriendly: true,
  },
  {
    id: 'pine',
    name: 'Pine Wood',
    type: 'wood',
    color: '#FFE4B5',
    priceModifier: -50,
    ecoFriendly: true,
  },
  // Fabric materials
  {
    id: 'linen-beige',
    name: 'Linen Beige',
    type: 'fabric',
    color: '#F5F5DC',
    priceModifier: 0,
    ecoFriendly: true,
  },
  {
    id: 'velvet-gray',
    name: 'Velvet Gray',
    type: 'fabric',
    color: '#808080',
    priceModifier: 250,
    ecoFriendly: false,
  },
  {
    id: 'cotton-white',
    name: 'Cotton White',
    type: 'fabric',
    color: '#FFFFFF',
    priceModifier: 50,
    ecoFriendly: true,
  },
  {
    id: 'velvet-teal',
    name: 'Velvet Teal',
    type: 'fabric',
    color: '#008080',
    priceModifier: 280,
    ecoFriendly: false,
  },
  {
    id: 'linen-charcoal',
    name: 'Linen Charcoal',
    type: 'fabric',
    color: '#36454F',
    priceModifier: 100,
    ecoFriendly: true,
  },
  // Leather materials
  {
    id: 'leather-brown',
    name: 'Leather Brown',
    type: 'leather',
    color: '#8B4513',
    priceModifier: 400,
    ecoFriendly: false,
  },
  {
    id: 'leather-black',
    name: 'Leather Black',
    type: 'leather',
    color: '#000000',
    priceModifier: 420,
    ecoFriendly: false,
  },
  {
    id: 'leather-tan',
    name: 'Leather Tan',
    type: 'leather',
    color: '#D2B48C',
    priceModifier: 380,
    ecoFriendly: false,
  },
  // Metal materials
  {
    id: 'steel-brushed',
    name: 'Brushed Steel',
    type: 'metal',
    color: '#C0C0C0',
    priceModifier: 100,
    ecoFriendly: true,
  },
  {
    id: 'brass',
    name: 'Brass',
    type: 'metal',
    color: '#B5A642',
    priceModifier: 180,
    ecoFriendly: true,
  },
  {
    id: 'black-metal',
    name: 'Black Metal',
    type: 'metal',
    color: '#2C2C2C',
    priceModifier: 120,
    ecoFriendly: true,
  },
];

// Legs Library
export const legs: ProductPart[] = [
  {
    id: 'modern-metal',
    name: 'Modern Metal',
    type: 'leg',
    modelUrl: '/models/parts/legs/modern-metal.glb',
    thumbnail: '/images/parts/legs/modern-metal.png',
    priceModifier: 0,
    materials: ['steel-brushed', 'brass', 'black-metal'],
  },
  {
    id: 'carved-wooden',
    name: 'Carved Wooden',
    type: 'leg',
    modelUrl: '/models/parts/legs/carved-wooden.glb',
    thumbnail: '/images/parts/legs/carved-wooden.png',
    priceModifier: 180,
    materials: ['oak', 'walnut', 'mahogany', 'cherry'],
  },
  {
    id: 'modern-wooden',
    name: 'Modern Wooden',
    type: 'leg',
    modelUrl: '/models/parts/legs/modern-wooden.glb',
    thumbnail: '/images/parts/legs/modern-wooden.png',
    priceModifier: 100,
    materials: ['oak', 'walnut', 'mahogany', 'cherry', 'pine'],
  },
  {
    id: 'tapered',
    name: 'Tapered Legs',
    type: 'leg',
    modelUrl: '/models/parts/legs/tapered.glb',
    thumbnail: '/images/parts/legs/tapered.png',
    priceModifier: 80,
    materials: ['oak', 'walnut', 'cherry', 'pine'],
  },
  {
    id: 'hairpin',
    name: 'Hairpin Legs',
    type: 'leg',
    modelUrl: '/models/parts/legs/hairpin.glb',
    thumbnail: '/images/parts/legs/hairpin.png',
    priceModifier: 120,
    materials: ['steel-brushed', 'brass', 'black-metal'],
  },
  {
    id: 'turned',
    name: 'Turned Legs',
    type: 'leg',
    modelUrl: '/models/parts/legs/turned.glb',
    thumbnail: '/images/parts/legs/turned.png',
    priceModifier: 150,
    materials: ['oak', 'walnut', 'mahogany', 'cherry'],
  },
];

// Artistic Details Library
export const arts: ProductPart[] = [
  {
    id: 'floral-carving',
    name: 'Floral Carving',
    type: 'art',
    modelUrl: '/models/parts/arts/floral-carving.glb',
    thumbnail: '/images/parts/arts/floral-carving.png',
    priceModifier: 250,
    materials: ['oak', 'walnut', 'mahogany', 'cherry'],
  },
  {
    id: 'geometric-pattern',
    name: 'Geometric Pattern',
    type: 'art',
    modelUrl: '/models/parts/arts/geometric.glb',
    thumbnail: '/images/parts/arts/geometric.png',
    priceModifier: 200,
    materials: ['oak', 'walnut', 'mahogany', 'cherry', 'pine'],
  },
  {
    id: 'tufted-buttons',
    name: 'Tufted Buttons',
    type: 'art',
    modelUrl: '/models/parts/arts/tufted.glb',
    thumbnail: '/images/parts/arts/tufted.png',
    priceModifier: 180,
    materials: ['linen-beige', 'velvet-gray', 'cotton-white', 'velvet-teal', 'leather-brown', 'leather-black'],
  },
  {
    id: 'channel-tufting',
    name: 'Channel Tufting',
    type: 'art',
    modelUrl: '/models/parts/arts/channel.glb',
    thumbnail: '/images/parts/arts/channel.png',
    priceModifier: 220,
    materials: ['velvet-gray', 'velvet-teal', 'leather-brown', 'leather-black', 'linen-charcoal'],
  },
  {
    id: 'plain',
    name: 'Plain (No Art)',
    type: 'art',
    modelUrl: '/models/parts/arts/plain.glb',
    thumbnail: '/images/parts/arts/plain.png',
    priceModifier: 0,
    materials: ['oak', 'walnut', 'mahogany', 'cherry', 'pine', 'linen-beige', 'velvet-gray', 'cotton-white'],
  },
];

// Demo Products
export const demoProducts: Product[] = [
  {
    _id: 'sofa-modern-1',
    name: 'Modern L-Shape Sofa',
    description: 'Contemporary L-shaped sofa with customizable legs, fabric, and artistic details. Perfect for modern living spaces.',
    category: 'sofa',
    basePrice: 1299,
    images: [
      '/images/products/sofa-modern-1.png',
      '/images/products/sofa-modern-1-alt1.png',
      '/images/products/sofa-modern-1-alt2.png',
    ],
    modelUrl: '/models/products/sofa-modern.glb',
    availableParts: [
      legs[0], // modern-metal
      legs[1], // carved-wooden
      legs[2], // modern-wooden
      legs[4], // hairpin
      arts[2], // tufted-buttons
      arts[3], // channel-tufting
      arts[4], // plain
    ],
    materials: materials.filter(m =>
      ['linen-beige', 'velvet-gray', 'cotton-white', 'velvet-teal', 'linen-charcoal', 'leather-brown', 'leather-black', 'leather-tan'].includes(m.id)
    ),
    featured: true,
    tags: ['modern', 'sectional', 'living-room', 'customizable'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: 'sofa-classic-1',
    name: 'Classic 3-Seater Sofa',
    description: 'Elegant classic sofa with traditional design. Customize with various wood finishes and upholstery options.',
    category: 'sofa',
    basePrice: 1099,
    images: [
      '/images/products/sofa-classic-1.png',
      '/images/products/sofa-classic-1-alt1.png',
    ],
    modelUrl: '/models/products/sofa-classic.glb',
    availableParts: [
      legs[1], // carved-wooden
      legs[5], // turned
      arts[0], // floral-carving
      arts[2], // tufted-buttons
      arts[4], // plain
    ],
    materials: materials.filter(m =>
      ['oak', 'walnut', 'mahogany', 'cherry', 'leather-brown', 'leather-black', 'velvet-gray'].includes(m.id)
    ),
    featured: true,
    tags: ['classic', 'traditional', 'living-room'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: 'bed-platform-1',
    name: 'Platform Bed with Headboard',
    description: 'Modern platform bed with customizable headboard art and leg styles. Available in multiple wood finishes.',
    category: 'bed',
    basePrice: 899,
    images: [
      '/images/products/bed-platform-1.png',
      '/images/products/bed-platform-1-alt1.png',
    ],
    modelUrl: '/models/products/bed-platform.glb',
    availableParts: [
      legs[2], // modern-wooden
      legs[3], // tapered
      arts[0], // floral-carving
      arts[1], // geometric-pattern
      arts[4], // plain
    ],
    materials: materials.filter(m =>
      ['oak', 'walnut', 'mahogany', 'cherry', 'pine'].includes(m.id)
    ),
    featured: true,
    tags: ['modern', 'bedroom', 'platform'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: 'dressingtable-1',
    name: 'Contemporary Dressing Table',
    description: 'Sleek dressing table with mirror and storage. Customize wood finish and leg style.',
    category: 'dressingTable',
    basePrice: 599,
    images: [
      '/images/products/dressing-table-1.png',
    ],
    modelUrl: '/models/products/dressing-table.glb',
    availableParts: [
      legs[2], // modern-wooden
      legs[3], // tapered
      legs[4], // hairpin
    ],
    materials: materials.filter(m =>
      ['oak', 'walnut', 'pine', 'white-painted'].includes(m.id)
    ),
    featured: false,
    tags: ['modern', 'bedroom', 'vanity'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: 'tvtable-1',
    name: 'Modern TV Console',
    description: 'Contemporary TV stand with storage compartments. Customizable wood finish and leg options.',
    category: 'tvTable',
    basePrice: 499,
    images: [
      '/images/products/tv-table-1.png',
    ],
    modelUrl: '/models/products/tv-console.glb',
    availableParts: [
      legs[2], // modern-wooden
      legs[3], // tapered
      legs[4], // hairpin
    ],
    materials: materials.filter(m =>
      ['oak', 'walnut', 'mahogany', 'pine'].includes(m.id)
    ),
    featured: true,
    tags: ['modern', 'living-room', 'entertainment'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: 'chair-accent-1',
    name: 'Accent Armchair',
    description: 'Stylish accent chair with customizable upholstery and leg finish. Perfect for reading nooks.',
    category: 'chair',
    basePrice: 399,
    images: [
      '/images/products/chair-accent-1.png',
    ],
    modelUrl: '/models/products/chair-accent.glb',
    availableParts: [
      legs[2], // modern-wooden
      legs[3], // tapered
      legs[5], // turned
      arts[2], // tufted-buttons
      arts[4], // plain
    ],
    materials: materials.filter(m =>
      ['linen-beige', 'velvet-gray', 'velvet-teal', 'cotton-white'].includes(m.id)
    ),
    featured: false,
    tags: ['accent', 'living-room', 'reading'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// Helper function to get product by ID
export function getProductById(id: string): Product | undefined {
  return demoProducts.find(p => p._id === id);
}

// Helper function to get products by category
export function getProductsByCategory(category: string): Product[] {
  if (category === 'all') return demoProducts;
  return demoProducts.filter(p => p.category === category);
}

// Helper function to get featured products
export function getFeaturedProducts(): Product[] {
  return demoProducts.filter(p => p.featured);
}

// Helper function to get material by ID
export function getMaterialById(id: string): Material | undefined {
  return materials.find(m => m.id === id);
}

// Helper function to get part by ID
export function getPartById(id: string): ProductPart | undefined {
  return [...legs, ...arts].find(p => p.id === id);
}
