import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { toast } from "react-toastify";
import { setOrders } from "../product/productSlice";
import { setMessages } from "../user_Redux/userSlice";


//get all the messages from firebase
export const getMessagesAction = () => async(dispatch) =>{
    try {

        const q = query(collection(db, "messages"))
        const messagesSnap = await getDocs(q)
        const messagesList = []

        messagesSnap.forEach((doc) => {
            const messagesDt = {
                ...doc.data(), 
                
            }

            messagesList.push(messagesDt)
          });
          dispatch(setMessages(messagesList))

    } catch (error) {
        toast.error(error.message)
        
    }


}