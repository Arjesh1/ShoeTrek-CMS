import { collection, doc, getDocs, query, setDoc } from "firebase/firestore";
import { toast } from "react-toastify"
import { db } from "../../config/firebase-config";
import { setCat } from "./categotySlice";

//get all the category from firebase
export const getCategoriesAction = () => async(dispatch) =>{
    try {

        const q = query(collection(db, "category"))
        const catSnap = await getDocs(q)
        const catList = []

        console.log(catSnap);

        catSnap.forEach((doc) => {
        

            const catDt = {
                ...doc.data(), 
                slug: doc.id
            }

            console.log(catDt);

            catList.push(catDt)

            console.log(catList);

            
            dispatch(setCat(catList))
          });

    } catch (error) {
        toast.error(error.message)
        
    }


}


//add category to db
export const addCategoryAction = ({slug, ...rest}) => async (dispatch) => {

    try {
        const promise =  setDoc(doc(db, "category",slug  ), rest, {merge:true})

        toast.promise( promise, {
            pending: "Please wait..",
            success: "Category has been added."
        })

        //fetch all the category and mount in redux
        await promise

        dispatch(getCategoriesAction())
        
        
        
    } catch (error) {
        toast.error(error.message)
        console.log(error);
        
    }
  
}

