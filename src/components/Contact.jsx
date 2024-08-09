import React from 'react'
import PhoneIcon from '@heroicons/react/24/outline/PhoneIcon'
import { AtSymbolIcon } from '@heroicons/react/24/outline'

const Contact = () => {
  return (
    <section id='contact' className='flex flex-col items-center bg-gray-700 text-white py-8'>
        <h1 className='text-4xl  text-center py-4'>Contact Us</h1>
        <p>We will get back to you As Soon As Possible.</p>
        <div className='grid grid-rows-2 items-center font-bold divide-y-2'> 
            <div className='grid grid-cols-2 space-x-4 divide-x-2'>
              <PhoneIcon className='h-20'/>
              <div className='flex flex-col justify-center px-2'>
                <p className=''><a href="tel:+27748987870">074 898 7870</a></p>
              </div>
            </div>

            <div className='grid grid-cols-2 space-x-4 divide-x-2'>
              <AtSymbolIcon className='h-20'/>
              <div className='flex flex-col justify-center px-2'>
                <p><a href="mailto:scentjonnes@innov8homeexclusives.com">scentjonnes@innov8homeexclusives.com</a></p>
              </div>
            </div>

        </div>

    </section>
  )
}

export default Contact