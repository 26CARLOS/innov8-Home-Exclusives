import React, { useState } from 'react'
import { Bars3BottomRightIcon,XMarkIcon} from '@heroicons/react/24/outline'
import { Link, animateScroll as scroll } from "react-scroll";
import '../App.css';

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

  const [isOpen, setOpen] = useState(false)

  return (
    <div className='shadow-md w-full fixed-top fixed z-20'>
      <div className='md:px-10 py-0 px-7 md:flex justify-between items-center bg-white'>
        <div className='flex text-[35px] cursor-pointer items-center gap-2 flex-col md:flex-row'>
          <span className='font-bold flex flex-row items-center'>INNOV          
            <div className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 animate-gradient ">
              8 </div></span>
          <span className='text-black font-bold text-xs md:text-2xl md:text-gray-600'> Home Exclusives</span>
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
              <Link to={item.id} spy={true} smooth={true} offset={-70} duration={500} key={item.id}>
                <li className='font-semibold my-7 md:my-0 md:ml-8 cursor-pointer' key={item.name}>
                  {item.name}
                </li>
              </Link>
          ))
          }
            <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
            <button className='btn bg-gray-500 text-white py-1 px-3 md:ml-8 rounded md:static'>Contact Us</button>
            </Link>
        </ul>
      </div>
    </div>
  )
}
