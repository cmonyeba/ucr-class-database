import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'
import Footer from '../../components/Footer'
import CourseCard from '../../components/courses/CourseCard'



const courses = () => {

    const [name, setName] = useState(" ");
    const [data, setData] = useState([])
    const [filtered, setFiltered] = useState([])
    const [reviewTool, setReviewTool] = useState(false)

    const handleInput = event => {
        setName(event.target.value.toUpperCase());
        console.log(event.target.value);
    };

    
    const requestInput = () => {
        console.log(name);
        axios.get(`https://reviewucr.herokuapp.com/category/courses/${name}`)
        .then((result) => {
            console.log(result.data);
            setData(result.data);
            setFiltered(result.data)
            setReviewTool(!reviewTool)
    
        })

        //if there is an error print error
        .catch((error) => {
            console.log(error);
            alert('error')
        });
    };

    const handleKeypress = e => {
        //it triggers by pressing the enter key
      if (e.key === 'Enter') {
          requestInput()
          console.log('input requested')
      }
    };

    const sortArrayHigh = (type) => {
        const types = {
          difficulty: 'difficulty',
        };
        const sortProperty = types[type];
       
            const sorted = [...filtered].sort((a, b) => b[sortProperty] - a[sortProperty]);
            console.log(sorted);
            setFiltered(sorted);
        
        // if(tag = 'low'){
        //     const sorted = [...filtered].sort((b, a) => b[sortProperty] - a[sortProperty]);
        //     console.log(sorted);
        //     setFiltered(sorted);
        // }
      };

      const sortArrayLow = (type) => {
        const types = {
          difficulty: 'difficulty',
        };
        const sortProperty = types[type];
       
            const sorted = [...filtered].sort((a, b) => a[sortProperty] - b[sortProperty]);
            console.log(sorted);
            setFiltered(sorted);
        
        // if(tag = 'low'){
        //     const sorted = [...filtered].sort((b, a) => b[sortProperty] - a[sortProperty]);
        //     console.log(sorted);
        //     setFiltered(sorted);
        // }
      };

    return (
        <div className="flex flex-wrap items-center justify-center min-h-screen py-2">
            <Head>
            <title>UCR Course Reviews</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-col items-center justify-center w-full  mt-16 mb-16  flex-1 px-20 text-center">
            <h1 className="text-6xl text-yellow-500 font-bold">
                COURSE{' '}
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
                    SELECT <input placeholder="EE100A" 
                                onChange={handleInput}
                                onKeyPressCapture={handleKeypress}
                                className='uppercase'
                            /> <br/>FROM COURSES
                </code>
                <button  onClick={requestInput} className='m-2 font-bold rounded-md border-2 border-yellow-500 px-3 py-2 hover:bg-yellow-100 active:bg-yellow-100'>Run</button>
            </div>
            { reviewTool ? 
            <>
            <div className='flex flex-row'>
            <button  onClick={() => {sortArrayHigh('difficulty')}} className='mt-3 mx-2 font-bold rounded-md px-3 py-2 border-2 hover:bg-yellow-100 active:bg-yellow-100'>filter high</button>
            <button  onClick={() => {sortArrayLow('difficulty')}} className='mt-3 mx-2 font-bold rounded-md -500 px-3 py-2  border-2 hover:bg-yellow-100 active:bg-yellow-100'>filter low</button>
            <button  onClick={() => {setFiltered(data)}} className='mt-3 mx-2 font-bold rounded-md -500 px-3 py-2  border-2 hover:bg-yellow-100 active:bg-yellow-100'>reset</button>
            </div>
            <div className="flex flex-row flex-wrap justify-around max-w-7xl mt-4 sm:w-full">
                    <>
                        {filtered.map((filtered) => (
                            <>
                                <CourseCard data={filtered} key={filtered.id} />
                            </>
                        ))}
                    </>
    
            </div>
            </>
            :
            <div className='mt-16'>Try searching for a class!</div>
            }
            </main>
    
            <Footer />
    
        </div>
    )
}

export default courses
