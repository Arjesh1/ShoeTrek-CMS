import { signInWithEmailAndPassword } from "firebase/auth"
import { auth, db } from "../../config/firebase-config"
import { toast } from "react-toastify"
import { doc, getDoc, getDocs } from "firebase/firestore"
import { setUser } from "./userSlice"

//get user from db
export const getUserAction = (uid) => async(dispatch) =>{
    try {

        const docSnap = await getDoc(doc(db, "admin", uid))

        if (docSnap.exists()){
            const user = {...docSnap.data(), uid}
            dispatch(setUser(user))
        }


        


    } catch (error) {
        
    }


}


//sign in 

export const loginUserAction = ({email, password}) => async(dispatch)=>{

    try {
       const pendingUser = signInWithEmailAndPassword(auth, email, password)

       toast.promise(pendingUser, {
        pending: 'Please wait...'
       })

       const {user} = await pendingUser

       if(user.uid){
        dispatch(getUserAction(user.uid))
       }

        
    } catch (error) {

        console.log(error.message);
        
    }
    


    
}