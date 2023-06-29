import { collection, deleteDoc, doc, getDocs, query, setDoc } from "firebase/firestore";
import { toast } from "react-toastify"
import { db } from "../../config/firebase-config";
import { setShowModal } from "../../system/systemSlice";
import { setPay } from "./paymentSlice";


//get all the payment option from firebase
export const getPaymentOptionAction = () => async(dispatch) =>{
    try {

        const q = query(collection(db, "payment_option"))
        const paySnap = await getDocs(q)
        const payList = []

        paySnap.forEach((doc) => {
            const payDt = {
                ...doc.data(), 
                slug: doc.id
            }

            payList.push(payDt)
          });

          
          dispatch(setPay(payList))

    } catch (error) {
        toast.error(error.message)
        
    }


}


//add payment option to db
export const addPaymentOptionAction = ({ slug, ...rest}) => async (dispatch) => {

    
    try {
        const promise =  setDoc(doc(db, "payment_option", slug ), rest, {merge:true})

        toast.promise( promise, {
            pending: "Please wait..",
            success: "Payment has been added."
        })

        //fetch all the payment options and mount in redux
        await promise

        dispatch(getPaymentOptionAction())
        dispatch(setShowModal(false))
        
        
        
    } catch (error) {
        toast.error(error.message)
        console.log(error);
        
    }
  
}


//delete payment option

export const deletePaymentOptionAction = ({slug, ...rest}) => async (dispatch) => {
    
    try {
      await deleteDoc(doc(db, "payment_option", slug));
  
      toast.success("Payment option has been deleted.");
      dispatch(getPaymentOptionAction());
      dispatch(setShowModal(false))
    } catch (error) {
      //log the error
      console.log(error);
      toast.error(
        "Something went wrong, we could not process your request at the moment, please try again later."
      );
    }
  };
