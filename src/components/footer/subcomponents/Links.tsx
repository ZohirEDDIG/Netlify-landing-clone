'use client';

import Link from 'next/link';

import { useState } from 'react';

import { ChevronDown } from 'lucide-react';

import { useWindowWidth } from '@/hooks';

import { links } from '../data';

const Links = () => {
    const [linksVisibility, setLinksVisibility] = useState<{[key:number]: boolean}>({ 0: false, 1: false, 2: false, 3: false });

    const windowWidth = useWindowWidth();

    return (
        <div className='w-full lg:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-y-8'>
            
            {
                links.map((link, index) => (

                    <div key={index} className='max-lg:pb-6 max-lg:border-b max-lg:border-white flex flex-col gap-y-3'>

                        <h2 className='text-gray-500 font-bold  
                            max-lg:flex max-lg:justify-between max-lg:items-center max-lg:cursor-pointer max-lg:select-none'
                            onClick={() => setLinksVisibility((prev) => ({...prev, [index]: !prev[index] }))}    
                        >
                            
                            {link.title}

                            <ChevronDown />
                            
                        </h2>

                        {
                            (windowWidth < 1024 && linksVisibility[index]) || (windowWidth >= 1024)  && 

                            <div className='flex flex-col gap-y-3'>

                                {
                                    link.columnLinks.map((columnLink, index) => (

                                        <Link 
                                            key={index} 
                                            href={columnLink.href}
                                            className='w-fit text-gray-600 text-sm text-left underline decoration-transparent 
                                            transition-all duration-300 ease-in-out hover:decoration-gray-600'
                                        >

                                            {columnLink.label}

                                        </Link>

                                    ))
                                }

                            </div>
                        
                        }

                    </div>

                ))
            }

        </div>
    );
};

export default Links;