import React from 'react'

const Hero = () => {
  return (
    <section className=" w-full h-[100vh] flex flex-col sm:flex-row justify-evenly 
    bg-[url('./assets/images/IMG-20240515-WA0005.jpg')] bg-fixed bg-no-repeat bg-cover bg-opacity-50"
    id='home'>
        <div className="w-full h-full bg-white bg-fixed bg-no-repeat bg-cover bg-opacity-45 flex flex-col justify-center items-center">
            <h1 className='text-4xl font-bold text-center'>
                THE HOME IMPROVEMENT EXPERTS<br/>THAT'S US
            </h1>

            <p className='text-center text-2xl font-bold py-5'>
              Get in touch for a quick quotation.
            </p>   

            <button className='btn bg-gray-500 text-white py-3 px-3 rounded font-bold ] w-[200px]'>
                Contact Us
            </button>     
        </div>


    </section>
      
  )
}

export default Hero;
