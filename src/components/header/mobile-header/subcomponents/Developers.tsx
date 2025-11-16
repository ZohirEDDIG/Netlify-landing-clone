'use client';

import Link from 'next/link';
import Image from 'next/image';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Developers = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className='w-full transition-all duration-300 ease-in-out'>

            <button                 
                type='button' 
                onClick={() => setIsOpen((prev) => !prev)}
                className='bg-dark-green-secondary w-full font-medium p-2 rounded-md flex justify-between items-center
                transition-opacity duration-300 ease-in-out hover:opacity-80'
            >

                Developers 

                <ChevronDown 
                    className={`transition-all duration-300 ease-in-out ${isOpen ? 'text-light-green-primary translate-y-1' : ''}`}
                />

            </button>

            <AnimatePresence>
                {
                    isOpen && (
                        <motion.div 
                            className='w-full p-2 mt-4 grid grid-cols-1 emd:grid-cols-2 gap-4'
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >


                            {/* Where to Start? */}
                            <div className='flex flex-col gap-y-4'>

                                <h2 className='text-gray-500 font-mono font-bold'>WHERE TO START?</h2>


                                <a 
                                    href='https://docs.netlify.com' 
                                    target='_blank'
                                    className='font-normal underline transition-colors duration-300 ease-in-out hover:text-light-green-secondary'
                                >
                                    
                                    Docs
                                
                                </a>

                                <a 
                                    href='https://docs.developers.com' 
                                    target='_blank'
                                    className='font-normal underline transition-colors duration-300 ease-in-out hover:text-light-green-secondary'
                                >
                                    
                                    Developer Guides
                                
                                </a>

                                <Link
                                    href='/integrations' 
                                    className='font-normal underline transition-colors duration-300 ease-in-out hover:text-light-green-secondary'
                                >
                                    
                                    Integrations
                                
                                </Link>

                                <a 
                                    href='https://docs.developers.com/welcome/build-with-ai/overview' 
                                    target='_blank'
                                    className='font-normal underline transition-colors duration-300 ease-in-out hover:text-light-green-secondary'
                                >
                                    
                                    Build With AI
                                
                                </a> 

                            </div>

                            {/* Key Features */}
                            <div className='emd:pl-12 emd:border-l-2 emd:border-gray-600 flex flex-col gap-y-4'>

                                <h2 className='text-gray-500 font-mono font-bold'>KEY FEATURES</h2>

                                <div className='grid grid-cols-2 gap-x-8 gap-y-4'>

                                    <Link 
                                        href='/frameworks/astro' 
                                        className='font-normal underline flex items-center gap-x-2
                                        transition-colors duration-300 ease-in-out hover:text-light-green-secondary'
                                    >

                                        <Image src='/tech-icons/Astro.svg' alt='Astro' width='20' height='20' />

                                        Astro 

                                    </Link>

                                    <Link 
                                        href='/frameworks/tanstack-start' 
                                        className='font-normal underline flex items-center gap-x-2
                                        transition-colors duration-300 ease-in-out hover:text-light-green-secondary'
                                    >   
                                        
                                        <Image src='/tech-icons/Tanstack.svg' alt='Tanstack' width='20' height='20' />

                                        Tanstack

                                    </Link>

                                    <Link 
                                        href='/with/nextjs' 
                                        className='font-normal underline flex items-center gap-x-2
                                        transition-colors duration-300 ease-in-out hover:text-light-green-secondary'
                                    >

                                        <Image src='/tech-icons/Next.svg' alt='Next' width='20' height='20' />

                                        Next.js

                                    </Link>

                                    <Link 
                                        href='/with/nuxt'  
                                        className='font-normal underline flex items-center gap-x-2
                                        transition-colors duration-300 ease-in-out hover:text-light-green-secondary'
                                    >

                                        <Image src='/tech-icons/Nuxt.svg' alt='Nuxt' width='20' height='20' />
                                        
                                        Nuxt
                                    
                                    </Link>

                                    <Link 
                                        href='/build/frameworks/framework-setup-guides/gatsby' 
                                        className='font-normal underline flex items-center gap-x-2
                                        transition-colors duration-300 ease-in-out hover:text-light-green-secondary'
                                    >

                                        <Image src='/tech-icons/Gatsby.svg' alt='Gatsby' width='20' height='20' />

                                        Gatsby

                                    </Link>

                                    <Link 
                                        href='/with/wordpress'  
                                        className='font-normal underline flex items-center gap-x-2
                                        transition-colors duration-300 ease-in-out hover:text-light-green-secondary'
                                    >
                                        <Image src='/tech-icons/Wordpress.svg' alt='Wordpress' width='20' height='20' />
                                    
                                        Wordpress
                                    
                                    </Link>

                                    <Link 
                                        href='/with/react'  
                                        className='font-normal underline flex items-center gap-x-2
                                        transition-colors duration-300 ease-in-out hover:text-light-green-secondary'
                                    >
                                        
                                        <Image src='/tech-icons/React.svg' alt='React' width='20' height='20' />

                                        React
                                    
                                    </Link>

                                    <Link 
                                        href='/with/view'  
                                        className='font-normal underline flex items-center gap-x-2
                                        transition-colors duration-300 ease-in-out hover:text-light-green-secondary'
                                    >

                                        <Image src='/tech-icons/Vue.svg' alt='Vue' width='20' height='20' />

                                        Vue
                                    
                                    </Link>

                                    <Link 
                                        href='/build/frameworks/framework-setup-guides/sveltekit' 
                                        className='font-normal underline flex items-center gap-x-2
                                        transition-colors duration-300 ease-in-out hover:text-light-green-secondary'
                                    >

                                        <Image src='/tech-icons/Svelte.svg' alt='Svelte' width='20' height='20' />

                                        Svelte
                                    
                                    </Link>

                                    <Link 
                                        href='/with/sitcore'  
                                        className='font-normal underline flex items-center gap-x-2
                                        transition-colors duration-300 ease-in-out hover:text-light-green-secondary'
                                    >

                                        <Image src='/tech-icons/Sitecore.svg' alt='Sitecore' width='20' height='20' />

                                        Sitecore
                                    
                                    </Link>


                                    <Link 
                                        href='/jamstack' 
                                        className='font-normal underline flex items-center gap-x-2
                                        transition-colors duration-300 ease-in-out hover:text-light-green-secondary'
                                    >

                                        <Image src='/tech-icons/Jamstack.svg' alt='Jamstack' width='20' height='20' />

                                        Jamstack
                                    
                                    </Link>



                                    <Link 
                                        href='/integrations/frameworks' 
                                        className='font-normal underline flex items-center gap-x-2
                                        transition-colors duration-300 ease-in-out hover:text-light-green-secondary'
                                    >

                                        +More
                                    
                                    </Link>

                                </div>

                            </div>

                        </motion.div>
                    )
                }

            </AnimatePresence>

        </div>
    );
};

export default Developers;