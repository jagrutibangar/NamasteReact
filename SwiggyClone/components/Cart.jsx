import { useSelector, useDispatch } from 'react-redux';
import ItemList from './ItemList.jsx';
import { clearCart } from '../utils/cartSlice.jsx';


const Cart = () => {


    //Always Subscribe to the right slice of the store
   const cartItems = useSelector((store) => store.cart.cartItems) || [];
   
    const dispatch = useDispatch();

    const handleClearCart = () => {
        // Dispatch an action to clear the cart
        console.log("Cart cleared");
        dispatch(clearCart())
    };

    return (
    <>
    <div className="flex flex-col w-full h-fit mx-auto my-2 p-4 mt-5 ml-70">
    <h1 className="font-bold text-3xl">Cart Items</h1>
    
    <button className='h-10 w-40 bg-orange-400 ml-150 rounded-2xl cursor-pointer font-bold'
    onClick={handleClearCart}>Empty Cart</button>

    <ItemList items={cartItems}></ItemList>

    {cartItems.length === 0 && <h2 className="font-bold text-xl">Your cart is empty!</h2>}

    <h2 className="font-bold text-xl">Total Items: {cartItems.length}</h2>
    <h2 className="font-bold text-xl">Total Amount: Rs. {cartItems.reduce((acc, item) => acc + (item?.card?.info?.price || 0), 0) / 100}</h2>

    
    <button className='w-180 h-15 bg-orange-500 text-2xl font-serif rounded-2xl cursor-pointer' >Place Order</button>

   
    </div>
    </>
    )
};

export default Cart;