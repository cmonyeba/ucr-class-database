import React from 'react'
import Button from 'react-bootstrap/Button'

export default function Support() {
    return (
        <section>
                <div className="w-screen h-auto p-64 bg-gray-200">
                <div className='h-64 w-auto bg-gray-100 flex items-center justify-center'>
                    
                    <div>
                        <h1>Any problems or questions?</h1>
                        <h2>Feek free to send an email</h2>
                        <Button variant="primary">Primary</Button>{' '}
                    </div>
                </div>
            </div>
        </section>
    )
}
