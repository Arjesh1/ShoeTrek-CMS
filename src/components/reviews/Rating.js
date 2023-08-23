import React from 'react'
import {BsStarFill, BsStarHalf, BsStar} from 'react-icons/bs'
const maxRate = 5

const Ratings = ({rate }) => {

 
  const rateStar = rate || 5
  const hasDecimalValue = rateStar % 1;

  const fullRateStar = Math.floor(rateStar);
  const noRate =
    hasDecimalValue > 0 ? maxRate - fullRateStar - 1 : maxRate - fullRateStar;

  const fullStar = new Array(fullRateStar).fill("");
  const noRateStar = new Array(noRate).fill("");

  return (
    <div className="text-warning d-flex justify-content-center gap-0.5">
      {fullStar.map(() => (
        <BsStarFill />
      ))}
      {hasDecimalValue > 0 && <BsStarHalf />}
      {noRateStar.map(() => (
        <BsStar/>
      ))}
    </div>
  )
}

export default Ratings