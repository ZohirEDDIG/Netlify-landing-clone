'use client';

import Link from 'next/link';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Platform = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div 
            className='relative'       
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >

            <button type='button' className='font-medium flex items-center gap-x-1'>

                Platform 

                <ChevronDown 
                    className={`transition-all duration-300 ease-in-out ${isOpen ? 'text-light-green-primary translate-y-1' : ''}`}
                />

            </button>

            <AnimatePresence>
                {
                    isOpen && (
                        <motion.div 
                            className='lg:w-[800px] xl:w-[900px]  border-2 border-gray-600 rounded-lg grid grid-cols-2 absolute top-10'
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >


                            {/* The Netlify Platform */}
                            <div className='bg-dark-green-secondary p-8 rounded-l-md flex flex-col gap-y-4'>

                                <h2 className='text-gray-500 font-mono font-bold'>THE NETLIFY PALTFORM</h2>

                                <p className='font-normal leading-8'>

                                    <span className='font-semibold'>Your app, live instantly.</span> From AI tools or Git to global deployment in seconds. Everything included.
                                
                                </p>

                                <Link 
                                    href='/platform' 
                                    className='font-normal underline transition-colors duration-300 ease-in-out hover:text-light-green-secondary'
                                >
                                    
                                    Explore the platform
                                
                                </Link>

                            </div>

                            {/* Key Features */}
                            <div className='bg-dark-green-primary p-8 rounded-r-md flex flex-col gap-y-4'>

                                <h2 className='text-gray-500 font-mono font-bold'>KEY FEATURES</h2>

                                <div className='grid grid-cols-2 gap-x-8 gap-y-4'>

                                    <Link 
                                        href='/platform/coro/deploy-previews' 
                                        className='font-normal underline transition-colors duration-300 ease-in-out hover:text-light-green-secondary'
                                    >

                                        Deploy Previews

                                    </Link>

                                    <Link 
                                        href='platform/storage' 
                                        className='font-normal underline transition-colors duration-300 ease-in-out hover:text-light-green-secondary'
                                    >   

                                        Storage

                                    </Link>

                                    <Link 
                                        href='platform/agent-runners' 
                                        className='font-normal underline transition-colors duration-300 ease-in-out hover:text-light-green-secondary'
                                    >

                                        Agent Runners

                                    </Link>

                                    <Link 
                                        href='/platform/primitives' 
                                        className='font-normal underline transition-colors duration-300 ease-in-out hover:text-light-green-secondary'
                                    >
                                        
                                        Primitives
                                    
                                    </Link>

                                    <Link 
                                        href='/build/ai-gateway/overview' 
                                        className='font-normal underline transition-colors duration-300 ease-in-out hover:text-light-green-secondary'
                                    >

                                        AI Gateway

                                    </Link>

                                    <Link 
                                        href='/security' 
                                        className='font-normal underline transition-colors duration-300 ease-in-out hover:text-light-green-secondary'
                                    >
                                    
                                        Security
                                    
                                    </Link>

                                    <Link 
                                        href='/platform/core/functions' 
                                        className='font-normal underline transition-colors duration-300 ease-in-out hover:text-light-green-secondary'
                                    >

                                        Functions
                                    
                                    </Link>

                                    <Link 
                                        href='/platform/core/edge' 
                                        className='font-normal underline transition-colors duration-300 ease-in-out hover:text-light-green-secondary'
                                    >

                                        Edge Network
                                    
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

export default Platform;