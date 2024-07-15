import React from 'react'
import PhoneIcon from '@heroicons/react/24/outline/PhoneIcon'

const Contact = () => {
  return (
    <section id='contact' className='flex flex-col items-center'>
        <h1 className='text-4xl text-black text-center py-10'>Contact Us</h1>
        <div className='flex flex-col justify-center items-start space-y-2'> 
            <div>
            <PhoneIcon/>
            </div>
            <span className=''>XXX XXX XXXX</span>
            <span>XXX XXX XXXX</span>
            <span>xxxxxx@gmail.com</span>
            <span>xxxxxx@gmail.com</span>
        </div>

    </section>
  )
}

export default Contact