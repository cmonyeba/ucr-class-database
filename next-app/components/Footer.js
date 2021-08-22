import React, { useState } from 'react'
import Link from 'next/link'

const Footer = () => {

    // const [show, setShow] = useState(false)
    return (
        <> 
        <footer className="flex flex-col flex-wrap relative items-center justify-center w-full h-24 border-t">
            <span className='font-semibold'>
            Powered by{' '}
            </span>
            <p className='mx-1 text-blue-600 font-semibold'>Scotty's Soul &#128150;</p>
            <Link href='/privacy'>
            <a>Privacy</a>
            </Link>
        </footer>
      </>
    )
}

export default Footer
