import { collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore"
import { db } from "../../config/firebase-config"
import { toast } from "react-toastify"
import { setProdu, setSelectedProduct } from "./productSlice"
import { Navigate } from "react-router-dom"
import { getCategoriesAction } from "../category/CategoryAction"
import { setShowModal } from "../../system/systemSlice"

//get all the category from firebase
export const getProductsAction = () => async(dispatch) =>{
    try {

        const q = query(collection(db, "product"))
        const prodSnap = await getDocs(q)
        const prodList = []

        prodSnap.forEach((doc) => {
            const catDt = {
                ...doc.data(), 
                slug: doc.id
            }

            prodList.push(catDt)
          });

          dispatch(setProdu(prodList))

    } catch (error) {
        toast.error(error.message)
        
    }


}

//get all the category from firebase
export const getProductByCategoryAction = (parentCat) => async(dispatch)=>{
    
    try {

        const q = query(collection(db, "product"), where ("parentCat", "==", parentCat))
        const productSnap = await getDocs(q)

        //check for products
       if(productSnap?.size > 0){
        return toast.warning(`There are ${productSnap.size} products in this category. Please reasign those products to other categorioes before deleting.`)
       }

       // delete category

       await deleteDoc(doc(db, "category", parentCat));
  
      toast.success("Category has been deleted.");
      dispatch(getCategoriesAction());
      dispatch(setShowModal(false))
        

    } catch (error) {
        toast.error(error.message)
        
    }


}

// get selected product

export const getSelectedProductsAction = (slug) => async(dispatch) =>{

    try {

        if(!slug){
            return(
                toast.error("Slug not found.")
            )
        }

        const selectedProdRef = doc(db, "product", slug)
        const selectedProdSnap = await getDoc(selectedProdRef)

        if (selectedProdSnap.exists()) {
           const selectedprod = selectedProdSnap.data()
           dispatch(setSelectedProduct({...selectedprod, id: slug}))
          } 

        
    } catch (error) {
        toast.error(error.message)
    }
}


// add product to firebase
export const addProductAction = ({slug, ...rest}) => async (dispatch) => {

    try {
        const promise =  setDoc(doc(db, "product",slug  ), rest, {merge:true})

        toast.promise( promise, {
            pending: "Please wait..",
            success: "Product has been updated."
        })

        //fetch all the category and mount in redux
        await promise
        

    
        
    } catch (error) {
        toast.error(error.message)
        console.log(error);
        
    }
  
}

//delete product 

export const deleteProductAction = ({slug}) => async (dispatch) => {
    
    try {
      await deleteDoc(doc(db, "product", slug));
  
      toast.success("Product has been deleted.");
      dispatch(getProductsAction());
      
    } catch (error) {
      //log the error
      console.log(error);
      toast.error(
        "Something went wrong, we could not process your request at the moment, please try again later."
      );
    }
  };