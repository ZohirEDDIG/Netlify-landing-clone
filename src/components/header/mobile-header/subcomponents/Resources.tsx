'use client';

import Link from 'next/link';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Resources = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className='w-full'>

            <button  
                type='button' 
                onClick={() => setIsOpen((prev) => !prev)}
                className='bg-dark-green-secondary w-full font-medium p-2 rounded-md flex justify-between items-center
                transition-opacity duration-300 ease-in-out hover:opacity-80'
            >

                Resources 

                <ChevronDown 
                    className={`transition-all duration-300 ease-in-out ${isOpen ? 'text-light-green-primary translate-y-1' : ''}`}
                />

            </button>

            <AnimatePresence>
                {
                    isOpen && (
                        <motion.div 
                            className='w-full p-2 mt-4 flex flex-col gap-y-4'
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >

                            <Link 
                                href='/blog' 
                                className='font-normal underline transition-colors duration-300 ease-in-out hover:text-light-green-secondary'
                            >
                                
                                Blog
                            
                            </Link>

                            <Link 
                                href='/changelog' 
                                className='font-normal underline transition-colors duration-300 ease-in-out hover:text-light-green-secondary'
                            >
                                
                                Changelog
                            
                            </Link>

                            <Link 
                                href='/events' 
                                className='font-normal underline transition-colors duration-300 ease-in-out hover:text-light-green-secondary'
                            >
                                
                                Events
                            
                            </Link>

                            <Link 
                                href='/customers' 
                                className='font-normal underline transition-colors duration-300 ease-in-out hover:text-light-green-secondary'
                            >
                                
                                Customers
                            
                            </Link>

                            <Link 
                                href='/agency-directory' 
                                className='font-normal underline transition-colors duration-300 ease-in-out hover:text-light-green-secondary'
                            >
                                
                                Partner Directory
                            
                            </Link>

                            <Link 
                                href='/agency-directory' 
                                className='font-normal underline transition-colors duration-300 ease-in-out hover:text-light-green-secondary'
                            >
                                
                                All Resources
                            
                            </Link>

                        </motion.div>
                    )
                }

            </AnimatePresence>

        </div>
    );
};

export default Resources;