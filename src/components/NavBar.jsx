import React, { useState } from 'react'
import { Bars3BottomRightIcon,XMarkIcon} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', link: '#', id:'home'},
  { name: 'Services', link: '#', id:'services' },
  { name: 'Portfolio', link: '#', id:'portfolio'},
  { name: 'Contact', link: '#', id:'contact'},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {



  let [isOpen, setOpen] = useState(false);
  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 60;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(!isOpen);
    }
  };
  return (
    <div className='shadow-md w-full fixed-top fixed'>
      <div className='md:px-10 py-4 px-7 md:flex justify-between items-center bg-white'>
        <div className='flex text-2xl cursor-pointer items-center gap-2'>
          <span className='font-bold'>INNOV8</span>
          <span className='text-gray-500'>Home Exclusives</span>
        </div>

        {/* menu icon */}

        <div onClick={() => setOpen(!isOpen)} className='w-6 h-6 cursor-pointer absolute right-8 top-6 md:hidden text-black '>
          {
            isOpen ? <XMarkIcon/> : <Bars3BottomRightIcon/>
          }

        </div>

        {/* {nav links} */}
        <ul className={`md:flex pl-9 md:pl-0 md:items-center md:pb-0 pb-12  md:z-auto z-[-1] left-0 transition-all duration-500 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
          {
            navigation.map(item => (
            <li className='font-semibold my-7 md:my-0 md:ml-8'>
              <a href={item.link} onClick={() => scrollToSection(item.id)}>{item.name}</a>
            </li>
          ))
          }
          <button className='btn bg-gray-500 text-white py-1 px-3 md:ml-8 rounded md:static'>Contact Us</button>
        </ul>
      </div>
    </div>
  )
}
