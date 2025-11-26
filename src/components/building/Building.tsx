import Link  from 'next/link';
import Image from 'next/image';

import { FaGithub, FaLinkedin , FaXTwitter , FaBluesky, FaYoutube, FaQuora } from "react-icons/fa6";
import { JSX } from 'react';

type Social = {
    id: number;
    name: string;
    icon: JSX.Element
};

const socials: Social[] = [
    {
        id: 1,
        name: 'GitHub',
        icon: <FaGithub />
    },
    {
        id: 2,
        name: 'Linkedin',
        icon: <FaLinkedin />
    },
    {
        id: 3,
        name: 'XTwitter',
        icon: <FaXTwitter />
    },
    {
        id: 4,
        name: 'Bluesky',
        icon: <FaBluesky />
    },
    {
        id: 5,
        name: 'Youtube',
        icon: <FaYoutube />
    },
    {
        id: 6,
        name: 'Quora',
        icon: <FaQuora />
    },
];

const Building = () => {
    return (
        <section className='my-20'>
            
            <div className='ctn flex flex-col gap-y-40'>

                <div className='flex flex-col gap-y-6 md:gap-y-6 items-center'>

                    <h1 
                        className='text-white text-3xl md:text-5xl elg:text-6xl text-center font-bold 
                        max-w-[600px] md:max-w-[700px] elg:max-w-[800px]'
                    >
                        
                        Start building on Netlify
                    
                    </h1>

                    <p className='text-light-green-quaternary text-sm text-center max-w-[600px]'>

                        Join millions of developers and teams bringing their ideas online.

                    </p>

                    <div className='w-full flex flex-col sm:flex-row sm:justify-center gap-x-2 md:gap-x-4 gap-y-4'>

                        <Link 
                            href='/signup'
                            className='bg-light-green-primary text-black text-xs sm:text-sm font-bold px-4 py-2.5 rounded-full flex justify-center
                            select-none transition-colors duration-300 ease-out hover:bg-light-green-secondary'
                        >

                            Get Started For Free
                        
                        </Link>

                        <Link 
                            href='/contact/sales'
                            className='bg-dark-green-secondary text-light-green-primary text-xs sm:text-sm font-bold px-4 py-2.5 rounded-full flex justify-center
                            select-none transition-colors duration-300 ease-out hover:bg-light-green-tertiary'
                        >
                            
                            Contact Sales
                        
                        </Link>
                    
                    </div>

                </div>

                {/* Icon & Socials */}
                <div className='flex justify-between items-center'>

                    {/* Icon */}
                    <Link href='/'>

                        <Image
                            src='/icon.svg'
                            alt='Netlify Logo'
                            width='50'
                            height='50'                        
                        />
                    
                    </Link>

                    {/* Socials */}
                    <div className='flex items-center gap-x-3 sm:gap-x-6'>
                        {
                            socials.map((social) => (

                                <Link 
                                    key={social.id} 
                                    href=''
                                    className='text-gray-500 text-lg sm:text-2xl transition-colors duration-300 ease-in-out hover:text-gray-400'
                                >
                                
                                    {social.icon}
                                
                                </Link>

                            ))
                        }

                    </div>

                </div>

            </div>
        
        </section>
    );
};

export default Building;