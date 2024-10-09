import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';
export default function HeaderPage()
{
    const [togglemenu,settogglemenu]=useState(false)
    return (
        <header className="flex justify-between px-5 py-2 bg-primary">
        <a href="#" className="font-bold text-black">Igbal</a>
        <nav className="hidden md:block">
        <ul className="flex justify-between text-white">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Project</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        </nav>
       {togglemenu&&
        <nav className="block md:hidden" >
        <ul className=" flex flex-col text-white mobile_nav">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Project</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        </nav>
        }
        <button onClick={()=>{settogglemenu(!togglemenu)}} className='hidden max-md:block'>
            <Bars3Icon className='text-white h-6'/>
        </button>
    </header>

)}