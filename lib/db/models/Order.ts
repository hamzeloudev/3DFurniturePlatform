import mongoose, { Schema, Model } from 'mongoose';
import { Order, Address } from '@/types';

const AddressSchema = new Schema<Address>({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  postalCode: { type: String, required: true },
  country: { type: String, required: true },
});

const OrderSchema = new Schema<Order>(
  {
    userId: {
      type: String,
      required: true,
      ref: 'User',
    },
    items: {
      type: Schema.Types.Mixed,
      required: true,
    },
    total: {
      type: Number,
      required: true,
      min: 0,
    },
    status: {
      type: String,
      enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
      default: 'pending',
    },
    shippingAddress: {
      type: AddressSchema,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ['pending', 'completed', 'failed'],
      default: 'pending',
    },
  },
  {
    timestamps: true,
  }
);

// Indexes for faster queries
OrderSchema.index({ userId: 1, createdAt: -1 });
OrderSchema.index({ status: 1 });

const OrderModel: Model<Order> =
  mongoose.models.Order || mongoose.model<Order>('Order', OrderSchema);

export default OrderModel;
