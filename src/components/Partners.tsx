'use client';

import Image from 'next/image';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { div } from 'framer-motion/client';

type Partner = {
    alt: string;
    src: string;
    width: number;
    height: number;
};

const Partners = () => {

    const partners: Partner[] = [
        { alt: 'Contentful logo', src: '/partners/contentful.svg', width: 120 , height: 60 },
        { alt: 'Unilever logo', src: '/partners/unilever.svg', width: 50 , height: 60 },
        { alt: 'Stack Overflow logo', src: '/partners/stack-overflow.svg', width: 130 , height: 60 },
        { alt: 'Riot Games logo', src: '/partners/riot-games.svg', width: 120 , height: 60 },
        { alt: 'Kubernetes logo', src: '/partners/kubernetes.svg', width: 100 , height: 60 },
        { alt: 'Figma logo', src: '/partners/figma.svg', width: 90 , height: 60 },
        { alt: 'Navan logo', src: '/partners/navan.svg', width: 110 , height: 60 },
    ];

    return (
        <div className='ctn'>

            <Splide options={{ type: 'loop', perPage: 5, autoplay : true ,  arrows: false, pagination: false, gap: '1rem', speed: 10000,  breakpoints: { 400: { perPage: 1 }, 600: { perPage: 2 }, 800: { perPage: 3 }, 1000: { perPage: 4 }}}}>
                    
                {

                    partners.map((partner, index) => (

                        <SplideSlide key={index}>

                            <Image src={partner.src} alt={partner.alt}  width={partner.width} height={partner.height} />

                        </SplideSlide>
                        
                    ))

                }

            </Splide>

        </div>
    );
};

export default Partners;