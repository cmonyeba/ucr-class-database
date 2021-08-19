import { useState } from 'react'
import StudyFrontCard from './StudyFrontCard'
import StudyBackCard from './StudyBackCard'


const StudySpotCard = ({ data, dataId }) => {

    const [showReview, setShowReview] = useState(false);

    return (
        <>
            {!showReview && <a onClick={()=>setShowReview(!showReview)}><StudyFrontCard data={data} dataId={dataId} /></a>}
            {showReview && <a onClick={()=>setShowReview(!showReview)}><StudyBackCard  data={data} dataId={dataId} /></a>}
        </>
    )
}

export default StudySpotCard
