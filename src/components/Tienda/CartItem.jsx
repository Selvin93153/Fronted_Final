import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { remove } from "./CartSlice";
//import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    //toast.success("Item Removed");
  }

  return (
    <div className="w-96">

      <div className="flex ">

        <div className="h-[180px] ml-2 mt-3">
          <img src={item.image} className="h-full w-full " / >
        </div>
        <div className="ml-6 ">
          <h1 className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-5'>{item.title}</h1>
          <h1 className="w-40 text-gray-400 font-normal text-[10px] text-left mt-5">{item.description.split(" ").slice(0,20).join(" ")+"..."}</h1>
          <div className="flex mt-5 justify-between">
            <p  className="text-green-600 font-semibold">${item.price}</p>
            <div
            onClick={removeFromCart}>
              <RiDeleteBin5Fill />
            </div>
          </div>
          

        </div>


      </div>
       <div className="border-b border-gray-900 mt-5"></div>
    </div>
  );
};

export default CartItem;


