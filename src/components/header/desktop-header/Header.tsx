import Link from 'next/link';
import Image from 'next/image';

import { Search } from 'lucide-react';

import {
    Platform,
    Solutions,
    Developers,
    Resources,
} from './subcomponents';

const Header = () => {
    return (
        <header className='bg-dark-green-primary text-white'>

            <div className='ctn flex justify-between items-center'>

                {/* Left */}
                <div className='flex items-center gap-x-4'>

                    {/* Logo */}
                    <Link href='/' className='select-none'>

                        <Image
                            src='/logo.svg'
                            alt='Netlify Logo'
                            width='120'
                            height='120'                        
                        />
                    
                    </Link>

                    {/* Links */}
                    <div className='flex items-center gap-x-4'>

                        {/* Platform */}
                        <Platform />

                        {/* Solutions */}
                        <Solutions />

                        {/* Developers */}
                        <Developers />

                        {/* Resources */}
                        <Resources />

                        {/* Pricing */}
                        <Link 
                            href='/pricing'
                            className='font-medium transition-colors duration-300 ease-out hover:text-light-green-primary'
                        >

                            Pricing

                        </Link>

                    </div>

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
                    
                    {/* Contact */}
                    <Link 
                        href='/contact' 
                        className='font-medium transition-colors duration-300 ease-out hover:text-light-green-primary'
                    >
                        Contact
                    
                    </Link>

                    {/* Log in */}
                    <Link 
                        href='/login' 
                        className='font-medium transition-colors duration-300 ease-out hover:text-light-green-primary'
                    >
                        Log in
                    
                    </Link>
                    
                    {/* Sign up */}
                    <Link 
                        href='/signup' 
                        className='bg-light-green-primary text-black font-medium px-4 py-2 rounded-full
                        select-none transition-colors duration-300 ease-out hover:bg-light-green-secondary'
                    >
                        Sign up
                    
                    </Link>

                </div>

            </div>

        </header>
    );
}

export default Header;