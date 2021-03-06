import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'
import Footer from '../../components/Footer'
import StudySpotCard from '../../components/studyspots/StudySpotCard'



const studyspots = () => {

    const [name, setName] = useState(" ");
    const [data, setData] = useState([])

    const handleInput = event => {
        setName(event.target.value.toUpperCase());
        // console.log(event.target.value)
    };

    
    
    const requestInput = () => {
        console.log(name);
        axios.get(`https://reviewucr.herokuapp.com/category/studyspots/${name}`)
        .then((result) => {
            console.log(result.data);
            setData(result.data);
    
        })

        //if there is an error print error
        .catch((error) => {
            console.log(error);
            alert('Select a field.')
        });
    };

    // const handleKeypress = e => {
    //     //it triggers by pressing the enter key
    //   if (e.keyCode === 13) {
    //       console.log('hi')
    //   }
    // };

    return (
        <div className="flex flex-wrap items-center justify-center min-h-screen py-2">
            <Head>
            <title>UCR Study Spot Reviews</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-col items-center justify-center w-full  mt-16 mb-16  flex-1 px-20 text-center">
            <h1 className="text-6xl text-yellow-500 font-bold">
                STUDY SPOT{' '}
                <span className="text-blue-600">
                REVIEW
                </span>
            </h1>
    
            <div className="flex flex-row flex-wrap-reverse justify-center items-center mt-5">
                <Link href='/review'>
                <a className='py-2 px-3 m-2 border-2 rounded-md hover:bg-gray-100 hover:text-blue-600 hover:border-blue-600'>
                    &larr;
                </a>
                </Link>
            </div>
            <div className="flex flex-row flex-wrap justify-around mt-5">
                <code className="p-3 font-mono text-lg text-left bg-gray-100 rounded-md">
                    SELECT <select onChange={handleInput}>
                                <option>*</option>
                                <option value="ORBACH">ORBACH</option>
                                <option value="HUB">HUB</option>
                                <option value="RIVERA">RIVERA</option>
                                <option value="LOT 40">LOT 40</option>
                            </select> <br/>FROM STUDY_SPOTS
                </code>
                <button  onClick={requestInput} className='m-2 font-bold rounded-md bg-yellow-500 px-3 py-2 hover:bg-yellow-600 active:bg-yellow-100'>Run</button>
            </div>
            <div className="flex flex-row flex-wrap justify-around max-w-7xl mt-4 sm:w-full">

                    <>
                        {data.map((data, dataId) => (
                            <>
                                <StudySpotCard data={data} key={dataId} />
                            </>
                        ))}
                    </>
    
            </div>
            </main>
    
            <Footer />
    
        </div>
    )
}

export default studyspots
