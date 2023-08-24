import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { toast } from "react-toastify";
import { setClients } from "../user_Redux/userSlice";



//get all the orders from firebase
export const getClientsAction = () => async(dispatch) =>{
    try {

        const q = query(collection(db, "clients"))
        const clientsSnap = await getDocs(q)
        const clientsList = []

        clientsSnap.forEach((doc) => {
            const clientsDt = {
                ...doc.data(), id:doc.id
                
            }

            clientsList.push(clientsDt)
          });
          dispatch(setClients(clientsList))

    } catch (error) {
        toast.error(error.message)
        
    }


}