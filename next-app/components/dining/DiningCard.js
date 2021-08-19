import { useState } from 'react'
import DiningFrontCard from './DiningFrontCard'
import DiningBackCard from './DiningBackCard'


const DiningCard = ({ data, dataId }) => {

    const [showReview, setShowReview] = useState(false);

    return (
        <>
            {!showReview && <a onClick={()=>setShowReview(!showReview)}><DiningFrontCard data={data} dataId={dataId} /></a>}
            {showReview && <a onClick={()=>setShowReview(!showReview)}><DiningBackCard  data={data} dataId={dataId} /></a>}
        </>
    )
}

export default DiningCard
