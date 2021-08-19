import React from 'react'
import ProgressBar from '../ProgressBar'

const FrontCard = ({ data, dataId }) => {

    // const testData = {
    //     name: 'hiii me dmdkkf'
    // }

    const colors = {
        noise: '#00eb00',
        seating: '#f45ac6',
        comfortability: '#8B5CF6'
    }

    return (
        <div key={dataId} className="m-3 text-left border w-72 h-auto lg:w-96 rounded-xl active:bg-blue-100 hover:text-blue-600 hover:border-blue-600">
            <div className='flex flex-row justify-around py-3 px-1 items-center'>
                <div className=''>
                    <h3 className="text-2xl font-bold break-all">{data.name}</h3>
                    {data.regular ? <h1 className='font-bold mt-5'>💯Regular💯</h1> : <></>}
                </div>
                <div className='flex flex-col'>
                    <div className='flex flex-row justify-around border-4 rounded-xl'>
                        <ProgressBar bgcolor={colors.noise} completed={data.noise} />
                        <ProgressBar bgcolor={colors.seating} completed={data.seating} />
                        <ProgressBar bgcolor={colors.comfortability} completed={data.comfortable} />
                    </div>
                    <div className='flex flex-col justify-around border-4 rounded-xl p-2 mt-3'>
                        <div className='flex flex-row items-center'>
                            <div className='my-1 w-2 h-2 border-2 rounded-xl bg-green-400 mr-1' />
                            <span className='text-xs '>Noise Level</span>
                        </div>
                        <div className='flex flex-row items-center mt-2'>
                            <div className='my-1 w-2 h-2 border-2 rounded-xl bg-pink-400 mr-1' />
                            <span className='text-xs '>Seating Availability</span>
                        </div>
                        <div className='flex flex-row items-center mt-2'>
                            <div className='my-1 w-2 h-2 border-2 rounded-xl bg-purple-500 mr-1' />
                            <span className='text-xs '>Comfortability</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default FrontCard
