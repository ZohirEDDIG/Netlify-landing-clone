import Image from 'next/image';
import Link from 'next/link';

import { ArrowUpRight } from 'lucide-react';

const GrowsWithYou = () => {
    return (
        <div             
            className='linear-gradient p-10 border border-light-green-tertiary rounded-sm 
            grid elg:grid-cols-2 gap-10' 
        >
            
            <div className='flex justify-center max-xl:order-2'>

                <Image src='/platform/switchback-3.svg' alt='Switchback' width='400' height='400' />

            </div>

            <div className='max-xl:order-1 flex flex-col gap-y-8'>

                <h2 className='text-white text-2xl sm:text-4xl font-bold'>Grows with you</h2>

                <p className='text-white text-sm sm:text-lg'>
                    
                    From first user to first million, without worry. Your app handles viral moments automatically. 
                    No crashes, no replatforming, just growth.
                    
                </p>

                <ul className='flex flex-col gap-y-2'>

                    <li 
                        className='bg-dark-green-tertiary text-white text-sm sm:text-lg p-4 
                        border border-light-green-tertiary rounded-sm'
                    >
                        
                        Free tier that actually works
                    
                    </li>
                    
                    <li 
                        className='bg-dark-green-tertiary text-white text-sm sm:text-lg p-4 
                        border border-light-green-tertiary rounded-sm'
                    >
                        
                        Managed security
                    
                    </li>

                    <li 
                        className='bg-dark-green-tertiary text-white text-sm sm:text-lg p-4 
                        border border-light-green-tertiary rounded-sm'
                    >

                        Automatic scaling
                    
                    </li>

                </ul>

                <Link 
                    href='/platform'
                    className='text-light-green-quaternary text-sm sm:text-lg 
                    underline decoration-light-green-primary flex gap-x-2 group'
                >
                
                    Learn about the platform

                    <ArrowUpRight 
                        className='h-4 sm:h-6 text-light-green-primary transition-transform duration-300 ease-in-out
                        group-hover:translate-x-1 group-hover:-translate-y-1' 
                    />
                
                </Link>

            </div>
        
        </div>
    );
};

export default GrowsWithYou;