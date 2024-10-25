import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";


////En el carrito
const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (Array.isArray(cart)) {
      setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
    } else {
      console.error('cart is not an array');
    }
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div className="flex justify-center">
          <div>
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          <div className="h-[700px] w-[380px] flex-cols pt-[20px] ml-[100px]">
            <div className="flex-cols items-center">
              <div className="text-xl font-bold text-red-600 pt-[20px]">Your Cart</div>
              <div className="text-4xl font-bold text-red-600">SUMMARY</div>
              <p className="text-1xm font-bold text-black mt-4">
                <span>Total Items: {cart.length}</span>
              </p>
            </div>

            <div className="pt-[450px]">
              <p className="flex text-black pb-1">
                Total Amount: <span className="text-xm font-bold text-black">${totalAmount}</span>
              </p>
              <button className="px-4 py-2 w-[300px] bg-red-700 text-white font-semibold rounded-4 hover:bg-red-500">
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Cart Empty</h1>
          <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out shadow-[0_10px_20px_rgba(0,_0,_0,_1)]">
            Shop Now
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;