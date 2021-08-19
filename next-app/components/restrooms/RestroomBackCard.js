import React from 'react'

const RestroomBackCard = ({ data, key }) => {
    return (
        <div key={key} className="overflow-auto overscroll-auto p-6 my-6 text-left border w-72 h-64 lg:w-96 rounded-xl active:bg-blue-100 hover:text-blue-600 hover:border-blue-600">
            <p className="break-words mt-2 text-lg">
                
                {data.review}
            </p>
        </div>
    )
}

export default RestroomBackCard

