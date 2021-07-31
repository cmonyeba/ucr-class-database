import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <section>
            <nav className="flex items-center justify-center flex-wrap bg-gray-100 py-16">
                <div>
                    <div className="text-lg lg:flex-grow">
                    <button className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        <Link to='/'>
                            Home
                        </Link>
                    </button>
                    <button className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        <Link to='/review'>
                            Review
                        </Link>
                    </button>
                    <button className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        <Link to='/submit'>
                            Submit
                        </Link>
                    </button>
                    <button className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                        <Link to='/support'>
                            Support
                        </Link>
                    </button>
                    </div>
                </div>
            </nav>
        </section>
    )
}
