'use client';

import Link from 'next/link';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Solutions = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className='w-full'>

            <button                
                type='button' 
                onClick={() => setIsOpen((prev) => !prev)}
                className='bg-dark-green-secondary w-full font-medium p-2 rounded-md flex justify-between items-center
                transition-opacity duration-300 ease-in-out hover:opacity-80'
            >

                Solutions 

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


                            {/* Why Netlify? */}
                            <div className='flex flex-col gap-y-4'>

                                <h2 className='text-gray-500 font-mono font-bold'>WHY NETLIFY?</h2>


                                <Link 
                                    href='/customers' 
                                    className='font-normal underline transition-colors duration-300 ease-in-out hover:text-light-green-secondary'
                                >

                                    Customers Previews

                                </Link>

                                <Link 
                                    href='/agent-experience' 
                                    className='font-normal underline transition-colors duration-300 ease-in-out hover:text-light-green-secondary'
                                >   

                                    Agent Experience

                                </Link>

                                <Link 
                                    href='/agency-directory' 
                                    className='font-normal underline transition-colors duration-300 ease-in-out hover:text-light-green-secondary'
                                >

                                    Partner Directory

                                </Link>

                            </div>

                            {/* Key Features */}
                            <div className='emd:pl-12 emd:border-l-2 emd:border-gray-600 flex flex-col gap-y-4'>

                                <h2 className='text-gray-500 font-mono font-bold'>USE CASES</h2>

                                <div className='flex flex-col gap-y-4'>

                                    <Link 
                                        href='/solutions/code-agents' 
                                        className='font-normal underline transition-colors duration-300 ease-in-out hover:text-light-green-secondary'
                                    >

                                        Code Agents

                                    </Link>

                                    <Link 
                                        href='/for/company-websites' 
                                        className='font-normal underline transition-colors duration-300 ease-in-out hover:text-light-green-secondary'
                                    >   

                                        Company Websites

                                    </Link>

                                    <Link 
                                        href='/for/ecommerce' 
                                        className='font-normal underline transition-colors duration-300 ease-in-out hover:text-light-green-secondary'
                                    >

                                        E-commerce

                                    </Link>

                                    <Link 
                                        href='/for/web-applications' 
                                        className='font-normal underline transition-colors duration-300 ease-in-out hover:text-light-green-secondary'
                                    >
                                        
                                        Web Apps
                                    
                                    </Link>

                                    <Link 
                                        href='/blog/2020/06/16/building-large-sites-on-netlify' 
                                        className='font-normal underline transition-colors duration-300 ease-in-out hover:text-light-green-secondary'
                                    >

                                        Large Sites

                                    </Link>


                                    <p className='font-normal leading-8'>

                                        <span className='font-semibold'>Don’t see your solution? </span> We can help.
                                    
                                    </p>


                                    <Link 
                                        href='/enterprise/contact/?attr=homepage&ref=&id=nav-solutions-chat-with-netlify-expert' 
                                        className='font-normal underline transition-colors duration-300 ease-in-out hover:text-light-green-secondary'
                                    >

                                        Chat with a Netlify expert

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

export default Solutions;