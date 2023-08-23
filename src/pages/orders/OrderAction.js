import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { toast } from "react-toastify";
import { setOrders } from "../product/productSlice";


//get all the orders from firebase
export const getOrdersAction = () => async(dispatch) =>{
    try {

        const q = query(collection(db, "orders"))
        const orderSnap = await getDocs(q)
        const orderList = []

        orderSnap.forEach((doc) => {
            const orderDt = {
                ...doc.data(), 
                
            }

            orderList.push(orderDt)
          });
          dispatch(setOrders(orderList))

    } catch (error) {
        toast.error(error.message)
        
    }


}