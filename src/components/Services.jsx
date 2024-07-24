import React from 'react'
import Card from './ui/Card'


const items = [
    {
      title: 'Built-in Kitchens',
      imageUrl: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description:'Unlock the true potential of your cooking space with our custom-built kitchens. We meticulously craft cabinetry, countertops, and other elements to create a harmonious blend of functionality and aesthetics.',},
    {
      title: 'Built-in Wardrobes',
      imageUrl:'https://plus.unsplash.com/premium_photo-1674815329032-421d305ad589?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2FyZHJvYmV8ZW58MHx8MHx8fDA%3D',
        description:
        'Bid farewell to cluttered closets and embrace the luxury of expertly designed built-in wardrobes. Our team will create bespoke storage solutions that not only maximize space but also enhance the elegance of your bedroom.',
  
    },
    {
      title: 'Bars and Wine Cellars',
      imageUrl:'https://images.unsplash.com/photo-1598112972931-2410bd622b26?q=80&w=975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          description:
          'Indulge in the ultimate comfort and luxury with our handcrafted headboards. From intricate carvings to sleek, modern lines, our artisans will craft a piece that seamlessly complements your bedroom`s style.',
    },
    {
      title: 'Vanities',
      imageUrl:'https://plus.unsplash.com/premium_photo-1683140704670-7a4d75757042?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmFuaXRpZXN8ZW58MHx8MHx8fDA%3D',
        description:
        'Transform your bathroom into a serene oasis with our exquisitely crafted vanities. From sleek, contemporary designs to classic, timeless pieces, we`ll bring your vision to life with unparalleled attention to detail.',
    },
    {
      title: 'Floating Shelves',
      imageUrl:'https://plus.unsplash.com/premium_photo-1661780084441-a3287023c7e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmxvYXRpbmclMjBzaGVsdmVzfGVufDB8fDB8fHww',
      description:
      'Elevate your living spaces with the seamless integration of our stunning floating shelves. These practical yet stylish elements add character and depth to any room, showcasing your favorite decor pieces with elegance.',
  },
    {
      title: 'Office Desks',
      imageUrl:'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG9mZmljZSUyMGRlc2t8ZW58MHx8MHx8fDA%3D',
        description:
        'Enhance your productivity with our meticulously crafted office desks. Whether you prefer a minimalist design or a more ornate aesthetic, we`ll create a workspace that inspires and invigorates.',
    },
    {
      title: 'Head Boards',
      imageUrl:'https://plus.unsplash.com/premium_photo-1661698951100-064e4ae229fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVhZCUyMGJvYXJkfGVufDB8fDB8fHww',
          description:
          'Indulge in the ultimate comfort and luxury with our handcrafted headboards. From intricate carvings to sleek, modern lines, our artisans will craft a piece that seamlessly complements your bedroom`s style.',
    },
    {
      title: 'Granite and Quartz Countertops',
      imageUrl:'https://images.unsplash.com/photo-1509448271434-59e656f91167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3Jhbml0ZSUyMGNvdW50ZXJ0b3B8ZW58MHx8MHx8fDA%3D',
          description:
          'Indulge in the ultimate comfort and luxury with our handcrafted headboards. From intricate carvings to sleek, modern lines, our artisans will craft a piece that seamlessly complements your bedroom`s style.',
    },
    {
      title: 'Minor Renovations',
      imageUrl:'https://images.unsplash.com/photo-1674649207083-281c2517ab49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlbm92YXRpb25zfGVufDB8fDB8fHww',
          description:
          'Indulge in the ultimate comfort and luxury with our handcrafted headboards. From intricate carvings to sleek, modern lines, our artisans will craft a piece that seamlessly complements your bedroom`s style.',
    },
    {
      title: 'Gas installation',
      imageUrl:'https://plus.unsplash.com/premium_photo-1663047166207-fd717b9a0ba7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FzJTIwaW5zdGFsbGF0aW9ufGVufDB8fDB8fHww',
          description:
          'Indulge in the ultimate comfort and luxury with our handcrafted headboards. From intricate carvings to sleek, modern lines, our artisans will craft a piece that seamlessly complements your bedroom`s style.',
    },
    {
      title: 'Electrical installation',
      imageUrl:'https://plus.unsplash.com/premium_photo-1678766819262-cdc490bfd0d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZWxlY3RyaWNhbCUyMGluc3RhbGxhdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
          description:
          'Indulge in the ultimate comfort and luxury with our handcrafted headboards. From intricate carvings to sleek, modern lines, our artisans will craft a piece that seamlessly complements your bedroom`s style.',
    },
    {
      title: 'Painting',
      imageUrl:'https://plus.unsplash.com/premium_photo-1663134270666-25ba1c81966c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFpbnRpbmclMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D',
          description:
          'Indulge in the ultimate comfort and luxury with our handcrafted headboards. From intricate carvings to sleek, modern lines, our artisans will craft a piece that seamlessly complements your bedroom`s style.',
    },
    {
      title: 'Plumbing installation',
      imageUrl:'https://plus.unsplash.com/premium_photo-1664301972519-506636f0245d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGx1bWJpbmclMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D',
          description:
          'Indulge in the ultimate comfort and luxury with our handcrafted headboards. From intricate carvings to sleek, modern lines, our artisans will craft a piece that seamlessly complements your bedroom`s style.',
    },
  ];

const Services = () => {
  return (
    <section id='services'>
        <div className='bg-gray-600 w-full  cont'>
            <div className='container mx-auto'>
            <h1 className='text-4xl text-white text-center py-10'>
                Our Services
            </h1>
            <div>
                <p className='text-white text-center pb-10'>
                We offer a wide range of services to cater to your every need. Our team of experts will work with you every step of the way to ensure that your project is completed to perfection.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center'>
                {
                items.map((item, index) => (
                    <Card key={index} title={item.title} imageUrl={item.imageUrl} className='mb-2'/>
                ))
                }
            </div>
            {/* <div className='flex justify-center'>
                <button className='btn bg-gray-500 text-white py-6 px-6 w-56- md:ml-8 rounded md:static text-2xl'>Contact Us</button>
            </div> */}
            </div>
        </div>
    </section>
  )
}

export default Services