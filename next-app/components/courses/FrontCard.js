import React from 'react'
import ProgressBar from '../ProgressBar'

const FrontCard = ({ data, dataId }) => {

    
 
    const colors = {
        experience: '#73c2fb',
        difficulty: '#ff0000'
    }

    return (
        <div key={dataId} className="m-3 text-left border w-72 h-auto lg:w-96 rounded-xl active:bg-blue-100 hover:text-blue-600 hover:border-blue-600">
            <div className='flex flex-row justify-around py-3 px-1 items-center'>
                <div>
                    <h3 className="text-2xl font-bold">{data.course}</h3>
                    <p className=" text-xl">
                        {data.quarter}
                    </p>
                    <p className="mt-4 break-all">
                        {data.professor}
                    </p>
                    {data.passed ? <h1 className='font-bold mt-5'>🎉Passed🎉</h1> : <></>}
                </div>
                <div className='flex flex-col'>
                    <div className='flex flex-row justify-around border-4 rounded-xl'>
                        <ProgressBar bgcolor={colors.difficulty} completed={data.difficulty} />
                        <ProgressBar bgcolor={colors.experience} completed={data.overall_experience} />
                    </div>
                    <div className='flex flex-col justify-around border-4 rounded-xl p-2 mt-3'>
                        <div className='flex flex-row items-center'>
                            <div className='my-1 w-2 h-2 border-2 rounded-xl bg-red-500 mr-1' />
                            <span className='text-xs '>Difficulty</span>
                        </div>
                        <div className='flex flex-row items-center mt-2'>
                            <div className='my-1 w-2 h-2 border-2 rounded-xl bg-blue-500 mr-1' />
                            <span className='text-xs '>Overall Experience</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default FrontCard
