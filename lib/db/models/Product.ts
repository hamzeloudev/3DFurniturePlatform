import mongoose, { Schema, Model } from 'mongoose';
import { Product, ProductPart, Material } from '@/types';

const MaterialSchema = new Schema<Material>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  type: {
    type: String,
    enum: ['wood', 'metal', 'fabric', 'leather'],
    required: true,
  },
  color: { type: String, required: true },
  textureUrl: { type: String },
  priceModifier: { type: Number, default: 0 },
  ecoFriendly: { type: Boolean, default: false },
});

const ProductPartSchema = new Schema<ProductPart>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  type: {
    type: String,
    enum: ['leg', 'art', 'cushion', 'armrest', 'backrest'],
    required: true,
  },
  modelUrl: { type: String, required: true },
  thumbnail: { type: String, required: true },
  priceModifier: { type: Number, default: 0 },
  materials: [{ type: String }],
});

const ProductSchema = new Schema<Product>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ['sofa', 'chair', 'table', 'bed', 'dressingTable', 'tvTable'],
      required: true,
    },
    basePrice: {
      type: Number,
      required: true,
      min: 0,
    },
    images: {
      type: [String],
      default: [],
    },
    modelUrl: {
      type: String,
      required: true,
    },
    availableParts: {
      type: [ProductPartSchema],
      default: [],
    },
    materials: {
      type: [MaterialSchema],
      default: [],
    },
    featured: {
      type: Boolean,
      default: false,
    },
    tags: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

// Indexes for faster queries
ProductSchema.index({ category: 1, featured: -1 });
ProductSchema.index({ tags: 1 });
ProductSchema.index({ basePrice: 1 });

const ProductModel: Model<Product> =
  mongoose.models.Product || mongoose.model<Product>('Product', ProductSchema);

export default ProductModel;
