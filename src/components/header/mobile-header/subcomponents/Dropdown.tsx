import Link from 'next/link';

import { Platform, Solutions, Developers, Resources } from './';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';

const Dropdown = ({ isOpen }: { isOpen: boolean }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflowY = 'hidden';
        } else {
            setTimeout(() => {
                document.body.style.overflowY = 'auto';
            }, 500);
        }
    }, [isOpen]);
    
    return (
        <AnimatePresence>
            {
                isOpen && (
                    <motion.div 
                        className='bg-dark-green-primary h-screen-minus-header  px-2 flex flex-col gap-y-4 fixed z-10 overflow-auto'
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
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
                            className='bg-dark-green-secondary w-full font-medium p-2 rounded-md
                            transition-opacity duration-300 ease-in-out hover:opacity-80'
                        >
                            Pricing
                        </Link>

                        {/* Contact */}
                        <Link
                            href='/contact'
                            className='bg-dark-green-secondary w-full font-medium p-2 rounded-md
                            transition-opacity duration-300 ease-in-out hover:opacity-80'
                        >
                            Contact
                        </Link>

                        {/* Sign Up */}
                        <Link
                            href='/signup'
                            className='bg-light-green-primary text-black font-medium px-4 py-2 rounded-full flex justify-center
                            transition-colors duration-300 ease-out hover:bg-light-green-secondary'
                        >
                            Sign up
                        </Link>

                </motion.div>

            )}

        </AnimatePresence>
    );
};

export default Dropdown;