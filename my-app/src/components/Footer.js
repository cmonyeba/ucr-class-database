import React from 'react'
import { Button } from 'semantic-ui-react'

export default function Footer() {
    return (
        <section className='static bottom-0 left-0'>
                <div className="w-screen h-64 bg-black  flex items-center justify-center">
                    <div>
                        <div className='h-auto w-auto  flex items-center justify-center'>
                            <div className='px-3 border-r border-yellow-500'>
                                <ol>
                                    <li className='text-white'>Home</li>
                                    <li className='text-white'>Review</li>
                                    <li className='text-white'>Contact</li>
                                </ol>
                            </div>
                            <div className='px-3'>
                                <Button circular color='instagram' icon='instagram' />
                                <Button circular color='twitter' icon='twitter' />
                                <Button circular color='linkedin' icon='envelope' />
                            </div>
                        </div>
                        <div className='pt-3'>
                            <span className='text-white px-3'>Terms and conditions</span>
                            <span className='text-white px-3'>Privacy Policy</span>
                            <span className='text-white px-3'>cmonyeba enterprises</span>
                        </div>
                    </div>
                </div>
        </section>
    )
}
