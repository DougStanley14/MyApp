import { User, Product, Sale } from '../api'
export interface SalesDataState {
  users: User[];
  products: Product[];
  sales: Sale[];
  loading: boolean;
  error: string;
}
