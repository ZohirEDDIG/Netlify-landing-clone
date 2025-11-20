import Image from 'next/image';
import Link from 'next/link';

import { ArrowUpRight } from 'lucide-react';

const BuildAnything = () => {
    return (
        <div             
            className='linear-gradient-reverse p-10 border border-light-green-tertiary rounded-sm 
            grid elg:grid-cols-2 gap-10' 
        >

            <div className='flex flex-col gap-y-8'>

                <h2 className='text-white text-2xl md:text-3xl elg:text-4xl font-bold'>Build anything</h2>

                <p className='text-white text-sm md:text-base elg:text-lg'>
                    
                    Everything your app needs in one place. Create APIs, save images, store data 
                    without juggling a ton of services.
                    
                </p>

                <ul className='flex flex-col gap-y-2'>

                    <li 
                        className='bg-dark-green-tertiary text-white text-sm md:text-base elg:text-lg p-4 
                        border border-light-green-tertiary rounded-sm'
                    
                    >
                        
                        Marketing sites to AI apps
                    
                    </li>
                    
                    <li 
                        className='bg-dark-green-tertiary text-white text-sm md:text-base elg:text-lg p-4 
                        border border-light-green-tertiary rounded-sm'
                    >
                        
                        Forms, functions, and APIs ready
                    
                    </li>

                    <li 
                        className='bg-dark-green-tertiary text-white text-sm md:text-base elg:text-lg p-4 
                        border border-light-green-tertiary rounded-sm'
                    >
                        
                        Database and image storage built-in
                    
                    </li>

                </ul>

                <Link 
                    href='/platform/primitives'
                    className='text-light-green-quaternary text-sm md:text-base elg:text-lg
                    underline decoration-light-green-primary flex gap-x-2 group'
                >
                
                    Explore platform primitives

                    <ArrowUpRight 
                        className='h-4 sm:h-6 text-light-green-primary transition-transform duration-300 ease-in-out
                        group-hover:translate-x-1 group-hover:-translate-y-1' 
                    />
                
                </Link>

            </div>

            <div className='flex justify-center'>

                <Image src='/platform/switchback-2.svg' alt='Switchback' width='400' height='400' />

            </div>
        
        </div>
    );
};

export default BuildAnything;