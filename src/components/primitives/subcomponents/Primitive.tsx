import Link from 'next/link';

import { Check } from 'lucide-react';

import { type PrimitiveName, type PrimitiveData, primitivesData } from '../data';

import Code from './Code';

const Primitive = ({ activeTab }: { activeTab: PrimitiveName} ) => {
    const primitiveData: PrimitiveData = primitivesData.filter((p) => p.name === activeTab)[0];

    return (
        <div className='border-t-[1.5px] border-light-green-primary grid grid-cols-1 elg:grid-cols-2 max-elg:divide-y-[1.5px] elg:divide-x-[1.5px] divide-light-green-primary'>

            <div className='bg-dark-green-quaternary p-8 flex flex-col items-start gap-y-8'>

                <h2 className='text-white text-2xl elg:text-3xl font-bold'>{primitiveData.title}</h2>

                {primitiveData?.description && <p className='text-white'>{primitiveData?.description}</p>}

                <ul className='flex flex-col gap-y-2'>

                    {
                        primitiveData.features.map((feature, index) => (
                            
                            <li key={index} className='text-light-green-quaternary flex items-center gap-x-2'>

                                <Check className='h-4 elg:h-5 text-light-green-primary' />
                                
                                {feature}

                            </li>

                        ))
                    }
                
                </ul>

                <Link 
                    href={primitiveData.link.href}
                    className='bg-light-green-primary text-black w-fit text-xs elg:text-sm font-medium px-4 py-2 rounded-full
                    select-none transition-colors duration-300 ease-out hover:bg-light-green-secondary'
                >
                    
                    {primitiveData.link.name}
                
                </Link>

            </div>

            <div className='font-mono bg-black'>

                <h3 className='text-gray-400 text-lg elg:text-xl font-bold uppercase px-4 py-2  border-b border-light-green-primary'>{primitiveData.example}</h3>

                <Code primitiveName={primitiveData.name} />

            </div>

        </div>
    );
};

export default Primitive;