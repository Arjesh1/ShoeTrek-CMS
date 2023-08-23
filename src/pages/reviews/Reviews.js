import React from 'react'
import UserLayout from '../../components/layout/UserLayout'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getReviewsAction } from './ReviewAction'
import ReviewsTable from '../../components/reviews/ReviewsTable'

const Reviews = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getReviewsAction())
  })
  return (
    <div>
      <UserLayout>
      <div className='fs-3 my-3 py-1 pt-2 fw-bold'>Reviews</div>

<hr/>

<div className='mt-4 '>
 <ReviewsTable/>
</div>
      </UserLayout>
      
    </div>
  )
}

export default Reviews
