import React from 'react'
import ProgressBar from '../ProgressBar'

const RestroomFrontCard = ({ data, dataId }) => {

    // const testData = {
    //     name: 'hiii me dmdkkf'
    // }

    const colors = {
        cleanliness: '#93C5FD',
        peacefulness: '#4F46E5',
    }

    return (
        <div key={dataId} className="m-3 text-left border w-72 h-auto lg:w-96 rounded-xl active:bg-blue-100 hover:text-blue-600 hover:border-blue-600">
            <div className='flex flex-col py-3 px-1 items-center'>
                <div className='text-center'>
                    <h3 className="text-2xl font-bold break-all mb-1">{data.name}</h3>
                    {data.gem ? <h1 className='font-bold mb-2 mt-2'>💎Certified💎</h1> : <></>}
                </div>
                <div className='flex flex-col'>
                    <div className='flex flex-row justify-around border-4 rounded-xl'>
                        <ProgressBar bgcolor={colors.cleanliness} completed={data.cleanliness} />
                        <ProgressBar bgcolor={colors.peacefulness} completed={data.peaceful} />
                    </div>
                    <div className='flex flex-col justify-around border-4 rounded-xl p-2 mt-3'>
                        <div className='flex flex-row items-center'>
                            <div className='my-1 w-2 h-2 border-2 rounded-xl bg-blue-300 mr-1' />
                            <span className='text-xs '>Cleanliness</span>
                        </div>
                        <div className='flex flex-row items-center mt-2'>
                            <div className='my-1 w-2 h-2 border-2 rounded-xl bg-indigo-600 mr-1' />
                            <span className='text-xs '>Peacefulness</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default RestroomFrontCard
