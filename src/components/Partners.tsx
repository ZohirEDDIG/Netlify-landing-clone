'use client';

import Image from 'next/image';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

import '@splidejs/react-splide/css';

type Partner = { 
    alt: string; 
    src: string; 
    width: number; 
    height: number; 
};

const partners: Partner[] = [
    { alt: 'Contentful logo', src: '/partners/contentful.svg', width: 150 , height: 150 },
    { alt: 'Unilever logo', src: '/partners/unilever.svg', width: 50 , height: 50 },
    { alt: 'Stack Overflow logo', src: '/partners/stack-overflow.svg', width: 200 , height: 200 },
    { alt: 'Riot Games logo', src: '/partners/riot-games.svg', width: 120 , height: 120 },
    { alt: 'Kubernetes logo', src: '/partners/kubernetes.svg', width: 200 , height: 200 },
    { alt: 'Figma logo', src: '/partners/figma.svg', width: 100 , height: 100 },
    { alt: 'Navan logo', src: '/partners/navan.svg', width: 110 , height: 110 },
];

const Partners = () => {
    return (
        <div className='ctn mt-10'>
            <Splide
                extensions={{ AutoScroll }}
                options={{
                    type: 'loop',
                    drag: false,
                    arrows: false,
                    pauseOnHover: false, 
                    pauseOnFocus: false,
                    pagination: false,
                    autoScroll: { speed: 0.5 },
                    perPage: 5,
                    breakpoints: {
                        550: { perPage: 2 },
                        800: { perPage: 3 },
                        1200: { perPage: 4 },
                    },
                }}
            >
                {
                    partners.map((partner, index) => (
                    
                        <SplideSlide key={index} className='flex justify-center items-center'>
                        
                            <Image src={partner.src} alt={partner.alt} width={partner.width} height={partner.height} />
                        
                        </SplideSlide>
                    ))
                }

            </Splide>

        </div>
    );
};

export default Partners;