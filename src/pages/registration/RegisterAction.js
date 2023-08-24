import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth, db } from "../../config/firebase-config";
import {  doc, setDoc } from "firebase/firestore";


//register to auth and to db

export const registerUserAction = async({password, confirmPassword, ...rest}) => {
    //create auth user

    
    try {
        const promiseUser = createUserWithEmailAndPassword(auth, rest.email, password)

        toast.promise(promiseUser, {
            pending:"Please wait....",
            success:"User has been created successfully."

        })

        const { user } = await promiseUser

        if (user?.uid){
            setAdminAction({uid:user.uid, ...rest})
            return Promise.resolve(true)
        
        }
        
    } catch (error) {
        console.log(error.message);
        
    }

}

export const setAdminAction = async({uid, ...rest}) =>{
    try {
        await setDoc(doc(db, "admin", uid), rest)
        
    } catch (error) {
        console.log(error.message);
        
    }

}



    
    