import { useState } from 'react'
import RestroomFrontCard from './RestroomFrontCard'
import RestroomBackCard from './RestroomBackCard'


const RestroomCard = ({ data, dataId }) => {

    const [showReview, setShowReview] = useState(false);

    return (
        <>
            {!showReview && <a onClick={()=>setShowReview(!showReview)}><RestroomFrontCard data={data} dataId={dataId} /></a>}
            {showReview && <a onClick={()=>setShowReview(!showReview)}><RestroomBackCard  data={data} dataId={dataId} /></a>}
        </>
    )
}

export default RestroomCard
