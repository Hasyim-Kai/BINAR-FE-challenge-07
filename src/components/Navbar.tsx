/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { Link } from "react-router-dom";
import GreenButton from './GreenButton';

export default function Navbar(): JSX.Element {

    const [isMobileNavOpen, setMobileNavOpen] = useState(false);
    function handleSetMobileNavOpen() { setMobileNavOpen(!isMobileNavOpen) };

    // if the active Route path is Login, then disable Navbar
    return <nav className="w-full z-50 bg-backgroundGrey">
        {/* <!-- container --> */}
        <div className="container mx-auto flex flex-wrap justify-between items-center px-4 py-3 lg:space-x-4">
            <div className='flex'>
                {/* <!-- brand --> */}
                <Link to={`/`}><img src="/images/logo.png" alt="Logo" /></Link>
                {/* <!-- brand --> */}
            </div>

            {/* <!-- toggler btn --> */}
            <button onClick={handleSetMobileNavOpen} className="inline-flex items-center justify-center w-10 h-10 ml-auto border rounded-md outline-none lg:hidden focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="black">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            {/* <!-- toggler btn --> */}

            {/* <!-- menu --> */}
            <div className={`font-medium w-full mt-2 lg:inline-flex lg:w-auto lg:mt-0 ${isMobileNavOpen ? 'flex' : 'hidden'}`}>
                <ul className="flex flex-col w-full space-y-2 lg:w-auto lg:flex-row lg:gap-5 lg:items-center lg:space-y-0 lg:space-x-2">
                    <li><Link to='#'>Our Services</Link></li>
                    <li><Link to='#'>Why Us</Link></li>
                    <li><Link to='#'>Testimonial</Link></li>
                    <li><Link to='#'>FAQ</Link></li>
                    <GreenButton text='Register' additionalStyles=''/>
                </ul>
            </div>
            {/* // <!-- menu --> */}
        </div>
        {/* // <!-- container --> */}
    </nav >;
}