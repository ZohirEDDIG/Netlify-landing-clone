import Image from 'next/image';
import Link from 'next/link';

import { ArrowUpRight } from 'lucide-react';

const ShipInstantly = () => {
    return (
        <div             
            className='linear-gradient p-10 border border-light-green-tertiary rounded-sm 
            grid elg:grid-cols-2 gap-10' 
        >
            
            <div className='flex justify-center max-xl:order-2'>

                <Image src='/platform/switchback-1.svg' alt='Switchback' width='400' height='400' />

            </div>

            <div className='max-xl:order-1 flex flex-col gap-y-8'>

                <h2 className='text-white text-2xl md:text-3xl elg:text-4xl font-bold'>Ship instantly</h2>

                <p className='text-white text-sm md:text-base elg:text-l'>
                    
                    Get your app live. Deploy from Bolt, Cursor, GitHub, or anywhere you build. 
                    Every change gets a shareable preview link.
                    
                </p>

                <ul className='flex flex-col gap-y-2'>

                    <li 
                        className='bg-dark-green-tertiary text-white text-sm md:text-base elg:text-l p-4 
                        border border-light-green-tertiary rounded-sm'
                    >
                        
                        Deploy from anywhere
                    
                    </li>
                    
                    <li 
                        className='bg-dark-green-tertiary text-white text-sm md:text-base elg:text-l p-4 
                        border border-light-green-tertiary rounded-sm'
                    >
                        
                        Instant preview links
                    
                    </li>

                    <li 
                        className='bg-dark-green-tertiary text-white text-sm md:text-base elg:text-l p-4 
                        border border-light-green-tertiary rounded-sm'
                    >
                        
                        Update code with Agent Runners
                    
                    </li>

                </ul>

                <Link 
                    href='/platform/core/deploy-previews'
                    className='text-light-green-quaternary text-sm md:text-base elg:text-l 
                    underline decoration-light-green-primary flex gap-x-2 group'
                >
                
                    See the workflow

                    <ArrowUpRight 
                        className='h-4 sm:h-6 text-light-green-primary transition-transform duration-300 ease-in-out
                        group-hover:translate-x-1 group-hover:-translate-y-1' 
                    />
                
                </Link>

            </div>
        
        </div>
    );
};

export default ShipInstantly;