import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {/* <Head>
        <title>Reviw UCR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <main className="flex flex-col items-center justify-center w-full flex-1 mt-16 mb-16 px-20 text-center">
        <h1 className="text-6xl text-yellow-500 font-bold">
          REVIEW{' '}
          <span className="text-blue-600">
            UCR
          </span>
        </h1>

        <div className="flex flex-row flex-wrap-reverse justify-center items-center mt-5">
                <code className="p-3 font-mono text-lg text-left bg-gray-100 rounded-md">
                SELECT PAGE <br/>FROM REVIEW_UCR <br/>WHERE STUDENT=TRUE
                </code>
        </div>

        <div className="flex flex-row flex-wrap justify-around max-w-7xl mt-4 sm:w-full">
    
          <Link href='review'>
            <a className="p-6 my-6 text-left border w-72 h-auto lg:w-96 rounded-xl active:bg-blue-100 border-blue-600 hover:text-blue-600">
              <h3 className="text-2xl font-bold">Review &rarr;</h3>
              <p className="mt-7 text-xl">
                Read riveting reviews on all aspects of UCR. 
              </p>
            </a>
          </Link>

          <Link href='contribute'>
          <a className="p-6 my-6 text-left border w-72 h-auto lg:w-96 rounded-xl active:bg-blue-100 hover:text-blue-600 border-blue-600">
            <h3 className="text-2xl font-bold">Contribute &rarr;</h3>
            <p className="mt-7 text-xl">
              Submit a review based off your experience.
            </p>
          </a>
          </Link>

          <Link href='support'>
          <a className="p-6 my-6 text-left border w-72 h-auto lg:w-96 rounded-xl active:bg-blue-100 hover:text-blue-600 border-blue-600">
            <h3 className="text-2xl font-bold">Support &rarr;</h3>
            <p className="mt-7 text-xl">
              Relay suggestions and fixes regarding the site.
            </p>
          </a>
          </Link>

        </div>
      </main>

      <Footer />

    </div>
  )
}
