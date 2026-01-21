// User Types
export interface User {
  _id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Product Types
export interface Product {
  _id: string;
  name: string;
  description: string;
  category: 'sofa' | 'chair' | 'table' | 'bed' | 'dressingTable' | 'tvTable';
  basePrice: number;
  images: string[];
  modelUrl: string; // GLB model URL
  availableParts: ProductPart[];
  materials: Material[];
  featured: boolean;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

// Product Part Types (for customization)
export interface ProductPart {
  id: string;
  name: string;
  type: 'leg' | 'art' | 'cushion' | 'armrest' | 'backrest';
  modelUrl: string;
  thumbnail: string;
  priceModifier: number; // Additional cost for this part
  materials: string[]; // Compatible material IDs
}

// Material Types
export interface Material {
  id: string;
  name: string;
  type: 'wood' | 'metal' | 'fabric' | 'leather';
  color: string;
  textureUrl?: string;
  priceModifier: number;
  ecoFriendly: boolean;
}

// Customization Types
export interface FurnitureCustomization {
  productId: string;
  selectedParts: {
    [partType: string]: string; // partType -> partId
  };
  selectedMaterial: string;
  dimensions?: {
    width: number;
    height: number;
    depth: number;
  };
  totalPrice: number;
}

// Cart Types
export interface CartItem {
  id: string;
  product: Product;
  customization: FurnitureCustomization;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}

// Order Types
export interface Order {
  _id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: Address;
  paymentMethod: string;
  paymentStatus: 'pending' | 'completed' | 'failed';
  createdAt: Date;
  updatedAt: Date;
}

// Address Types
export interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

// 3D Scene Types
export interface SceneConfig {
  cameraPosition: [number, number, number];
  lightIntensity: number;
  backgroundColor: string;
  environmentPreset?: 'sunset' | 'dawn' | 'night' | 'warehouse' | 'forest' | 'apartment' | 'studio' | 'city' | 'park' | 'lobby';
}

// AR Types
export interface ARSession {
  active: boolean;
  furnitureScale: number;
  roomDimensions?: {
    width: number;
    length: number;
    height: number;
  };
}

// Filter Types
export interface ProductFilters {
  category?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  style?: string[];
  material?: string[];
  ecoFriendly?: boolean;
}

// Analytics Types
export interface Analytics {
  totalSales: number;
  totalOrders: number;
  popularProducts: {
    productId: string;
    count: number;
  }[];
  popularCustomizations: {
    partId: string;
    count: number;
  }[];
}
