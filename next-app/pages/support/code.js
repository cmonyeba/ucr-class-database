import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '../../components/Footer'

const code = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>Code for UCR reviews</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center w-full flex-1 mt-16 mb-16 px-20 text-center">
                <h1 className="text-6xl text-yellow-500 font-bold">
                STUFF 2{' '}
                <a className="text-blue-600" href="https://nextjs.org">
                    KNOW
                </a>
                </h1>

                <div className="flex flex-row flex-wrap-reverse justify-center items-center mt-5">
                <Link href='/support'>
                <a className='py-2 px-3 m-2 border-2 rounded-md hover:bg-gray-100 hover:text-blue-600 hover:border-blue-600'>
                    &larr;
                </a>
                </Link>
                </div>

                <div className="flex flex-col items-center max-w-7xl mt-4 sm:w-full">
                
                    <div className="p-6 my-6 text-left border w-72 h-auto lg:w-96 rounded-xl border-blue-600">
                        <h3 className="text-2xl font-bold">Languages</h3>
                        <ul>
                            <li>Javascript</li>
                            <li>Python</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>SQL</li>
                        </ul>
                        <h3 className="text-2xl mt-6 font-bold">Frameworks</h3>
                        <ul>
                            <li>React.js</li>
                            <li>Next.js</li>
                            <li>FastAPI</li>
                            <li>PostgresSQL</li>
                        </ul>
                        <h3 className="text-2xl mt-6 font-bold">Hosting</h3>
                        <ul>
                            <li>Netlify</li>
                            <li>Vercel</li>
                            <li>Heroku</li>
                            <li>Digital Ocean</li>
                            <li>AWS</li>
                        </ul>
                    </div>

               
                    <a href='mailto: sewubusiness@gmail.com' className="p-6 my-6 text-left border w-72 h-auto lg:w-96 rounded-xl hover:text-blue-600 border-blue-600">
                        <h3 className="text-2xl font-bold">Message &rarr;</h3>
                        <p className="mt-4 text-xl">
                        Send a message if you would be a good fit. Or message on insta @cmonyeba.
                        </p>
                    </a>
           

                </div>
            </main>

            <Footer />
            
        </div>
    )
}

export default code
