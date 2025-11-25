'use client';

import { Dispatch, SetStateAction } from 'react';

import { type PrimitiveName, primitives } from '../data';

type Props = {
    activeTab: PrimitiveName,
    setActiveTab: Dispatch<SetStateAction<PrimitiveName>>
};

const PrimitivesNav = ({ activeTab, setActiveTab }: Props) => {

    return (
        <div className='bg-dark-green-secondary flex divide-x-[1.5px] divide-light-green-tertiary overflow-x-auto primitives-nav'>
            {
                primitives.map((primitive, index) => (
                    <button 
                        key={index}
                        type='button'
                        onClick={() => setActiveTab(primitive.name)} 
                        className={`${primitive.name === activeTab ?
                        `bg-dark-green-quaternary text-light-green-primary border-x-[1.5px] ${index === 0 && 'border-l-0'}  ${index === primitives.length - 1 && 'border-r-0'} border-light-green-primary` : 'text-white'} 
                        flex-1 min-w-[200px] text-sm font-bold p-2 flex justify-center items-center gap-x-2 transition-colors duration-300 ease-in-out hover:bg-dark-green-primary`}
                    >

                        <primitive.icon className='text-light-green-primary' />

                        {primitive.name}
                    
                    </button>
                ))
            }

        </div>
    );
};

export default PrimitivesNav;