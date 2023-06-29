import { CartItem } from './cartItems';
export interface Order {
  orderId: string;
  products: CartItem[];
  totalPrice: number;
  shippingAddress: string;
  // Add more fields as needed for order details
}