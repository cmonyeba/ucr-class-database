import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'

const contribute = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
    
            <main className="flex flex-col items-center justify-center w-full flex-1 mt-16 mb-16 px-20 text-center">
            <h1 className="text-6xl text-yellow-500 font-bold">
                ADD{' '}
                <a className="text-blue-600" href="https://nextjs.org">
                REVIEW
                </a>
            </h1>
    
            <div className="flex flex-row flex-wrap-reverse justify-center items-center mt-5">
                <Link href='/'>
                <a className='py-2 px-3 m-2 border-2 rounded-md hover:bg-gray-100 hover:text-blue-600 hover:border-blue-600'>
                    &larr; 🏠
                </a>
                </Link>
                <code className="p-3 font-mono text-lg text-left bg-gray-100 rounded-md">
                INSERT INTO REVIEWS <br /> VALUES ...
                </code>
            </div>
    
            <div className="flex flex-col items-center max-w-7xl mt-4 sm:w-full">
                <div className="p-6 my-6 text-left border w-72 h-auto lg:w-96 rounded-xl border-blue-600 ">
                    <h3 className="text-2xl font-bold">Google Forms &rarr;</h3>
                    <p className="mt-7 text-xl">
                        To submit a review please fill out this form. Be sure to read the instructions.
                    </p>
                    <div className='flex flex-col py-2 mt-2'>
                        <a className='hover:text-blue-600'href='https://forms.gle/qYTQXgDeToAsG4wP7' target="_blank" rel="noopener noreferrer">
                            COURSES
                        </a>
                        <a className='hover:text-blue-600' href='https://forms.gle/isJy8hDxx1t7nKpB9' target="_blank" rel="noopener noreferrer">
                            DINING
                        </a>
                        <a classNamme='hover:text-blue-600' href='https://forms.gle/98Psh3nYaGThhviz6' target="_blank" rel="noopener noreferrer">
                            STUDY SPOTS
                        </a>
                    </div>
                </div> 
                <div className="p-6 my-6 text-left border w-72 h-auto lg:w-96 rounded-xl border-blue-600">
                    <h1 className="text-2xl font-bold">What's Next?</h1>
                    <h1 className="text-xl mt-5 italic font-bold">Adding Authentication</h1>
                    <p className="mt-7 text-xl">
                    This site is currently only accepting submission via Google Form as the authentication is not set up. This will
                    allow for monitoring of reviews and reduce spam when users submit through the site </p>
                </div>
                <Link href='/support'>
                <a className="p-6 my-6 text-left border w-72 h-auto lg:w-96 rounded-xl border-blue-600  hover:text-blue-600">
                    <h1 className="text-2xl font-bold">Possibly Help &rarr;</h1>
                    <h1 className="text-xl mt-2  font-bold">Reach out</h1>
                    <p className="mt-7 text-xl">
                    If you think you could be of help to this site and take it to the next level reach out.                    
                    </p>
                </a>
                </Link>
    
            </div>
            </main>
    
            <Footer />
    
        </div>
    )
}

export default contribute
