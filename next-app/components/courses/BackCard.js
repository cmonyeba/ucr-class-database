import React from 'react'

const BackCard = ({ data, key }) => {
    return (
        <div key={key} className="overflow-auto overscroll-auto p-6 my-6 text-left border w-80 h-72 lg:w-96 rounded-xl hover:text-blue-600 hover:border-blue-600 active:border-blue-600">
            <p className="break-words mt-2 text-lg text-black">
                
                {data.review}
            </p>
        </div>
    )
}

export default BackCard
