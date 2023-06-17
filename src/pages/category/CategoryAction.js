import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify"
import { db } from "../../config/firebase-config";


//add category to db
export const addCategoryAction = ({slug, ...rest}) => async (dispatch) => {

    try {
        const promise =  setDoc(doc(db, "category",slug  ), rest)

        toast.promise( promise, {
            pending: "Please wait"
        })

        //fetch all the category and mount in db
        await promise
        
        
        
    } catch (error) {
        toast.error(error.message)
        console.log(error);
        
    }
  
}

