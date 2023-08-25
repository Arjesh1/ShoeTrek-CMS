import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { toast } from "react-toastify";
import { setAdmins } from "../user_Redux/userSlice";



//get all the orders from firebase
export const getAdminsAction = () => async(dispatch) =>{
    try {

        const q = query(collection(db, "admin"))
        const adminSnap = await getDocs(q)
        const adminList = []

        adminSnap.forEach((doc) => {
            const adminDt = {
                ...doc.data()
                
            }

            adminList.push(adminDt)
          });
          dispatch(setAdmins(adminList))

    } catch (error) {
        toast.error(error.message)
        
    }


}