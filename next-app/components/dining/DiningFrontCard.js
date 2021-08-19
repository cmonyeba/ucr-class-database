import React from 'react'
import ProgressBar from '../ProgressBar'

const DiningFrontCard = ({ data, dataId }) => {

    
 
    const colors = {
        ambiance: '#00eb00',
        taste: '#f45ac6',
        service: '#8B5CF6'
    }

    return (
        <div key={dataId} className="m-3 text-left border w-72 h-auto lg:w-96 rounded-xl active:bg-blue-100 hover:text-blue-600 hover:border-blue-600">
            <div className='flex flex-row justify-around py-3 px-1 items-center'>
                <div>
                    <h3 className="text-xl font-bold">{data.name}</h3>
                    <p className=" text-lg">
                        {data.meal}
                    </p>
                    {/* <p className="mt-4 break-all">
                        {data.professor}
                    </p> */}
                    {data.recommend ? <h1 className='font-bold text-sm mt-5'>🍜BUSSIN'🍜</h1> : <></>}
                </div>
                <div className='flex flex-col'>
                    <div className='flex flex-row justify-around border-4 rounded-xl'>
                        <ProgressBar bgcolor={colors.ambiance} completed={data.ambiance} />
                        <ProgressBar bgcolor={colors.taste} completed={data.taste} />
                        <ProgressBar bgcolor={colors.service} completed={data.service} />
                    </div>
                    <div className='flex flex-col justify-around border-4 rounded-xl p-2 mt-3'>
                        <div className='flex flex-row items-center'>
                            <div className='my-1 w-2 h-2 border-2 rounded-xl bg-red-500 mr-1' />
                            <span className='text-xs '>Ambiance</span>
                        </div>
                        <div className='flex flex-row items-center mt-2'>
                            <div className='my-1 w-2 h-2 border-2 rounded-xl bg-blue-500 mr-1' />
                            <span className='text-xs '>Taste</span>
                        </div>
                        <div className='flex flex-row items-center mt-2'>
                            <div className='my-1 w-2 h-2 border-2 rounded-xl bg-blue-500 mr-1' />
                            <span className='text-xs '>Service</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default DiningFrontCard
