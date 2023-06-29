import { collection, doc, getDocs, query, setDoc } from "firebase/firestore";
import { toast } from "react-toastify"
import { db } from "../../config/firebase-config";
import { setShowModal } from "../../system/systemSlice";


//get all the category from firebase
export const getPaymentOptionAction = () => async(dispatch) =>{
    try {

        const q = query(collection(db, "payment_option"))
        const paySnap = await getDocs(q)
        const payList = []

        paySnap.forEach((doc) => {
            const payDt = {
                ...doc.data(), 
            }

            payList.push(payDt)
          });

          console.log(payList);
        //   dispatch(setPay(payList))

    } catch (error) {
        toast.error(error.message)
        
    }


}


//add category to db
export const addPaymentOptionAction = ({...data}) => async (dispatch) => {

    try {
console.log(data);
        const promise =  setDoc(doc(db, "payment_option", data.name ), data, {merge:true})

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

