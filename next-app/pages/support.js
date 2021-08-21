import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'

const support = () => {

    const [change, setChange] = useState(true)
    // const [show, setShow] = useState(true)

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>UCR Review Support</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center w-full flex-1 mt-16 mb-16 px-20 text-center">
                { change ?
                <a onClick={() => setChange(!change)}>
                    <h1 className="text-6xl text-yellow-500 font-bold">
                    CHANGE{' '}
                    <span className="text-blue-600">
                        THINGS
                    </span>
                    </h1>
                </a> :
                <a onClick={() => setChange(!change)}>
                    <h1 className="text-6xl text-yellow-500 font-bold">
                    THINGS{' '}
                    <span className="text-blue-600">
                        CHANGE
                    </span>
                    </h1>
                </a>
                }
                <div className="flex flex-row flex-wrap-reverse justify-center items-center mt-5">
                <Link href='/'>
                <a className='py-2 px-3 m-2 border-2 rounded-md hover:bg-gray-100 hover:text-blue-600 hover:border-blue-600'>
                    &larr; 🏠
                </a>
                </Link>
                <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
                SELECT CATEGORY FROM SUPPORT
                </code>
                </div>

                <div className="flex flex-row flex-wrap justify-around max-w-7xl mt-4 sm:w-full">
                
                    <Link href='/support/code'>
                        <a className="p-6 my-6 text-left border w-72 h-auto lg:w-96 rounded-xl hover:text-blue-600 border-blue-600">
                        <h3 className="text-2xl font-bold">Code &rarr;</h3>
                        <p className="mt-4 text-xl">
                        Help me take this site further and implement a Scotty Tracker.
                        </p>
                    </a>
                    </Link>

                    {/* { show ? 
                     <a onClick={() => setShow(!show)} className="p-6 my-6 text-left border w-72 h-auto lg:w-96 rounded-xl hover:text-blue-600 border-blue-600">
                        <h3 className="text-2xl font-bold">Donate &rarr;</h3>
                        <p className="mt-4 text-xl">
                        I want to invest in Bear Bucks. It's my favorite cryptocurrency.
                        </p>
                    </a> :
                    <a onClick={() => setShow(!show)} className="p-6 my-6 text-left border w-72 h-auto lg:w-96 rounded-xl hover:text-blue-600 border-blue-600">
                        <h3 className="text-2xl font-bold">Donate &rarr;</h3>
                        <a className="mt-4 text-xl hover:text-green-500" href='https://www.change.org/p/hefty-bring-zoopal-plates-back' target="_blank" rel="noopener noreferrer">
                         venmo: @cmonseba
                        </a>
                     </a>
                    }    */}

                
                    <a href='mailto: sewubusiness@gmail.com' className="p-6 my-6 text-left border w-72 h-auto lg:w-96 rounded-xl hover:text-blue-600 border-blue-600">
                        <h3 className="text-2xl font-bold">Message &rarr;</h3>
                        <p className="mt-4 text-xl">
                        Send a message for an addition or fix.
                        </p>
                    </a>

                </div>
            </main>

            <Footer />
            
        </div>
    )
}

export default support
