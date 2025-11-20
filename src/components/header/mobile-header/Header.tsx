'use client';

import Link from 'next/link';
import Image from 'next/image';

import { useState } from 'react';

import { Search, Menu } from 'lucide-react';

import Dropdown from './subcomponents/Dropdown';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className='fixed w-full z-10 bg-dark-green-primary text-white shadow-md'>

            <div className='ctn flex justify-between items-center'>

                {/* Left */}
                <div className='flex items-center gap-x-4'>

                    {/* Logo */}
                    <Link href='/'>

                        <Image
                            src='/logo.svg'
                            alt='Netlify Logo'
                            width='120'
                            height='120'                        
                        />
                    
                    </Link>

                </div>

                {/* Right */}
                <div className='flex items-center gap-x-4'>

                    {/* Search Button */}
                    <button 
                        type='button' 
                        className='font-medium transition-colors duration-300 ease-out hover:text-light-green-primary'
                    >

                        <Search />

                    </button>


                    {/* Log in */}
                    <Link 
                        href='/login' 
                        className='font-medium transition-colors duration-300 ease-out hover:text-light-green-primary'
                    >
                        Log in
                    
                    </Link>
                    

                    {/* Toggle Menu Button */}
                    <button 
                        type='button' 
                        onClick={() => setIsOpen((prev) => !prev)}
                        className='block elg:hidden transition-colors duration-300 ease-out hover:text-light-green-primary'>

                        <Menu />

                    </button>

                </div>

            </div>

            {/* Dropdown Menu */}
            
            <Dropdown isOpen={isOpen} />

        </header>
    );
}

export default Header;