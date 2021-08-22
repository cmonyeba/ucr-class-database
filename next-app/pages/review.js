import Link from 'next/link'
import Head from 'next/head'
import Footer from '../components/Footer'

const review = () => {
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>Add a UCR review</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center w-full flex-1 mt-16 mb-16 px-20 text-center">
                <h1 className="text-6xl text-yellow-500 font-bold">
                FIND{' '}
                <span className="text-blue-600">
                    REVIEW
                </span>
                </h1>

                <div className="flex flex-row flex-wrap-reverse justify-center items-center mt-5">
                <Link href='/'>
                <a className='py-2 px-3 m-2 border-2 rounded-md hover:bg-gray-100 hover:text-blue-600 hover:border-blue-600'>
                    &larr; 🏠
                </a>
                </Link>
                <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
                SELECT CATEGORY FROM FIND_REVIEW
                </code>
                </div>

                <div className="flex flex-row flex-wrap justify-around max-w-7xl mt-4 sm:w-full">
                
                    <Link href='/category/courses'>
                        <a className="p-6 my-6 text-left border w-72 h-auto lg:w-96 rounded-xl active:bg-blue-100 hover:text-blue-600 border-blue-600">
                        <h3 className="text-2xl font-bold">Courses &rarr;</h3>
                        <p className="mt-4 text-xl">
                        Read about the courses you're enrolled in and realize what you have gotten yourself into.
                        </p>
                    </a>
                    </Link>

                    <Link href='/category/dining'>
                        <a className="p-6 my-6 text-left border w-72 h-auto h-min lg:w-96 rounded-xl active:bg-blue-100 hover:text-blue-600 border-blue-600">
                        <h3 className="text-2xl font-bold">Dining &rarr;</h3>
                        <p className="mt-4 text-xl">
                        Find student favorites straight out of Flavortown on this episode of Diners, Drive-ins, and Dives.
                        </p>
                    </a>
                    </Link>

                    <Link href='/category/studyspots'>
                        <a className="p-6 my-6 text-left border w-72 h-auto lg:w-96 rounded-xl active:bg-blue-100 hover:text-blue-600 border-blue-600">
                        <h3 className="text-2xl font-bold">Study Spots &rarr;</h3>
                        <p className="mt-4 text-xl">
                        Find the best places to relax and procrastinate or make websites like this one.
                        </p>
                    </a>
                    </Link>

                    <a className="p-6 my-6 text-left border w-72 h-auto lg:w-96 rounded-xl bg-blue-100 border-blue-600">
                        <h3 className="text-2xl font-bold">Restrooms &rarr;</h3>
                        <p className="mt-4 text-xl">
                        Coming Soon... Possibly the most important category. Discover best restrooms on campus.
                        </p>
                    </a>

                    {/* <Link href='/category/events'> */}
                    <a className="p-6 my-6 text-left border w-72 h-auto lg:w-96 rounded-xl bg-blue-100 border-blue-600">
                        <h3 className="text-2xl font-bold">Clubs &rarr;</h3>
                        <p className="mt-4 text-xl">
                        Coming Soon... Are these clubs worth paying $25 bucks to join?
                        </p>
                    </a>
                    {/* </Link> */}

                    <Link href='support'>
                    <a className="p-6 my-6 text-left border w-72 h-auto lg:w-96 rounded-xl border-yellow-500 active:bg-yellow-100 hover:text-yellow-500">
                        <h3 className="text-2xl font-bold">Add Category &rarr;</h3>
                        <p className="mt-4 text-xl">
                        Can't find anything? Add it!
                        </p>
                    </a>
                    </Link>

                </div>
            </main>

            <Footer />
            
        </div>
    )
}

export default review
