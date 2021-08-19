import React, { useState } from 'react'

const Footer = () => {

    // const [show, setShow] = useState(false)
    return (
        <> 
        <footer className="flex flex-row flex-wrap relative items-center justify-center w-full h-24 border-t">
            <span className='font-semibold'>
            Powered by{' '}
            </span>
            <p className='mx-1 text-blue-600 font-semibold'>Scotty's Love &#128150;</p>
            {/* <p className='ml-6 absolute left-0 mr-64 ' onClick={()=>setShow(!show)}>
                {
                show ? <a className='transform translate-y-4'>@cmonyeba</a> : <p>♨️</p>                
                }
            </p> */}
        </footer>
      </>
    )
}

export default Footer
