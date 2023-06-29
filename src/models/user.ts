import { CartItem } from './cartItems';
import { Order } from './order';
export interface User {
    id: string;
    username: string;
    email: string;
    password: string; // Hashed password
    address: string;
    cart: CartItem[];
    orderHistory: Order[];
  }
