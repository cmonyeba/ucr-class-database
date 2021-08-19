import { useState } from 'react'
import FrontCard from './FrontCard'
import BackCard from './BackCard'


const CourseCard = ({ data, dataId }) => {

    const [showReview, setShowReview] = useState(false);

    return (
        <>
            {!showReview && <a onClick={()=>setShowReview(!showReview)}><FrontCard data={data} dataId={dataId} /></a>}
            {showReview && <a onClick={()=>setShowReview(!showReview)}><BackCard  data={data} dataId={dataId} /></a>}
        </>
    )
}

export default CourseCard
