
import { Product, CartItem } from './shared';



export interface AppState {
  loading: boolean,
  // product dictionary
  products: { [productId:string]:Product },
  // list of items in the cart
  cartList: CartItem[],
  // list of items available in the shopping list
  shopList: string[]
}

export const initialState:AppState = {
  loading: true,
  products: {},
  cartList: [],
  shopList: []
};
