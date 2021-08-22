import React from 'react'
import Link from 'next/link'

const privacy = () => {
    return (
        <div className='m-5'>
            <Link href='/'>
                <a className='py-1 px-3 m-4 border-2 rounded-md hover:bg-gray-100 hover:text-blue-600 hover:border-blue-600'>
                    &larr; 
                </a>
            </Link>
            <h1 className='mt-2'>
            Review UCR Privacy Policy
            </h1>
            <div>
                This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from https://www.reviewucr.com/ (the “Site”).
            </div>  
            <h2>  
                PERSONAL INFORMATION WE COLLECT
            </h2>
            <div>
                When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information.”

                We collect Device Information using the following technologies:

                    - “Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org.
                    - “Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.
                    - “Web beacons,” “tags,” and “pixels” are electronic files used to record information about how you browse the Site.
                        Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information, email address, and phone number.  We refer to this information as “Order Information.”

                When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information.
            </div>
            <h2>
                HOW DO WE USE YOUR PERSONAL INFORMATION?
            </h2>
                We share your Personal Information with third parties to help us use your Personal Information, as described above.  For example, we use Shopify to power our online store--you can read more about how Shopify uses your Personal Information here:  https://www.shopify.com/legal/privacy.  We also use Google Analytics to help us understand how our customers use the Site--you can read more about how Google uses your Personal Information here:  https://www.google.com/intl/en/policies/privacy/.  You can also opt-out of Google Analytics here:  https://tools.google.com/dlpage/gaoptout.
            <h2>
                DO NOT TRACK
            </h2>
                Please note that we do not alter our Site’s data collection and use practices when we see a Do Not Track signal from your browser.

            <h2>
                YOUR RIGHTS
            </h2>
                If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below. Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above.  Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.

            <h2>
                DATA RETENTION
            </h2>
                When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.

            <h2>
                CHANGES
            </h2>
                We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.CONTACT US
                For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at sewubusiness@gmail.com or by mail using the details provided below:

                
        </div>
    )
}

export default privacy
