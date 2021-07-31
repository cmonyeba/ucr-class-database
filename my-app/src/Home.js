import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function Home() {

    return (
        <section>
            <div className='bg-blue-700  flex items-center justify-center'>
                <div className='py-32'>
                    <div className='items-center justify-center'>
                        <h1 className='text-white text-6xl'>UCR Class Database</h1>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className="bg-white rounded lg:container lg:mx-auto mx-16 my-10">
                        <div>
                            <div className="p-8">
                                <div className="text-yellow-600 font-black text-xl mb-2">CS064</div>
                                    <p className="text-black text-base">
                                        Class is not difficult, but the way your TA grades makes a huge difference. You need to go to lectures and all discussions, 
                                        counts for like 10%. Pray that your TA is lenient, because the essay rubrics are very subjective (10 points can be docked off 
                                        resulting in a B- just for "lack of persuasiveness".) Do the readings, the exams are based on them and lecture. Overall, the 
                                        material is not difficult, but the grading is sooo subjective, even for the exams.
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <div className="text-sm pb-8 pl-8">
                                        <p className="text-black  leading-none">Dr.Who</p>
                                        <p className="text-gray-900">SPRING 2019</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-16'>
                            <h1 className='text-white'>Search for over 6000 courses</h1>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='p-16'>
                            <h1 className='text-white'>Reviews by students, for students</h1>
                        </div>
                        <div className="bg-white rounded lg:container lg:mx-auto mx-16 my-10">
                        <div>
                            <div className="p-8">
                                <div className="text-yellow-600 font-black text-xl mb-2">CS064</div>
                                    <p className="text-black text-base">
                                        Class is not difficult, but the way your TA grades makes a huge difference. You need to go to lectures and all discussions, 
                                        counts for like 10%. Pray that your TA is lenient, because the essay rubrics are very subjective (10 points can be docked off 
                                        resulting in a B- just for "lack of persuasiveness".) Do the readings, the exams are based on them and lecture. Overall, the 
                                        material is not difficult, but the grading is sooo subjective, even for the exams.
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <div className="text-sm pb-8 pl-8">
                                        <p className="text-black  leading-none">Dr.Who</p>
                                        <p className="text-gray-900">SPRING 2019</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className="bg-white rounded lg:container lg:mx-auto mx-16 my-10">
                        <div>
                            <div className="p-8">
                                <div className="text-yellow-600 font-black text-xl mb-2">CS064</div>
                                    <p className="text-black text-base">
                                        Class is not difficult, but the way your TA grades makes a huge difference. You need to go to lectures and all discussions, 
                                        counts for like 10%. Pray that your TA is lenient, because the essay rubrics are very subjective (10 points can be docked off 
                                        resulting in a B- just for "lack of persuasiveness".) Do the readings, the exams are based on them and lecture. Overall, the 
                                        material is not difficult, but the grading is sooo subjective, even for the exams.
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <div className="text-sm pb-8 pl-8">
                                        <p className="text-black  leading-none">Dr.Who</p>
                                        <p className="text-gray-900">SPRING 2019</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-16'>
                            <h1 className='text-white'>Know When and Who</h1>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='bg-indigo-100 bg-opacity-75 flex items-center justify-center'>
                <div className='py-64'>
                <h1>Find Classes</h1>
                <h3>See what others have to say</h3>
                <Button><Link to='/review'>Search classes</Link></Button>
                </div>
            </div>
            <div className='bg-blue-100 bg-opacity-75 flex items-center justify-center'>
                <div className='py-64'>
                <h1>Share your thoughts</h1>
                <h3>Contribute more knowledge to the UCR hivemind</h3>
                <Button><Link to='/submit'>Submit review</Link></Button>
                </div>
            </div>
            

        </section>
    )
}
