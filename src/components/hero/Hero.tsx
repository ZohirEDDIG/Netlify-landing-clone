import Link  from 'next/link';

import HeroImage from './subcomponents/HeroImage';

const Hero = () => {
    return (
        <section className='h-[600px]'>

            {/* Top */}
            <div className='ctn h-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-10'>

                {/* Left */}
                <div className='flex flex-col gap-y-6'>

                    {/* Hero title */}
                    <h1 className='text-white text-4xl md:text-5xl elg:text-6xl font-bold'>Push your ideas <br /> to the web</h1>

                    {/* Hero text */}
                    <p className='text-light-green-quaternary text-sm sm:text-base elg:text-lg max-w-[500px]'>

                        Build with AI or code, deploy instantly. One platform with everything with everything  you need to make real apps live. 

                    </p>

                    <div className='flex items-center gap-x-4'>

                        {/* Get started */}
                        <Link 
                            href='/signup'
                            className='bg-light-green-primary text-black text-xs sm:text-sm font-medium px-4 py-2.5 rounded-full
                            select-none transition-colors duration-300 ease-out hover:bg-light-green-secondary'
                        >

                            Get Started
                        
                        </Link>

                        {/* Contact Sales */}
                        <Link 
                            href='/contact/sales'
                            className='bg-dark-green-secondary text-light-green-primary text-xs sm:text-sm font-medium px-4 py-2.5 rounded-full
                            select-none transition-colors duration-300 ease-out hover:bg-light-green-tertiary'
                        >
                            
                            Contact Sales
                        
                        </Link>
                    
                    </div>

                </div>

                {/* Right */}
                <HeroImage />

            </div>

        </section>
    );
};

export default Hero;