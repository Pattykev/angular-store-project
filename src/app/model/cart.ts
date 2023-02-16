import CartItems from './cart-items'
type Cart={
    items:{ [id: number]: CartItems} | null;
    cartValue: string;

}
export default Cart;