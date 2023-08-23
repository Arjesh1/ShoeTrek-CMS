import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { toast } from "react-toastify";
import {  setReviews } from "../product/productSlice";


//get all the orders from firebase
export const getReviewsAction = () => async(dispatch) =>{
    try {

        const q = query(collection(db, "reviews"))
        const reviewSnap = await getDocs(q)
        const reviewList = []

        reviewSnap.forEach((doc) => {
            const reviewDt = {
                ...doc.data(), id:doc.id
                
            }

            reviewList.push(reviewDt)
          });
          dispatch(setReviews(reviewList))

    } catch (error) {
        toast.error(error.message)
        
    }


}