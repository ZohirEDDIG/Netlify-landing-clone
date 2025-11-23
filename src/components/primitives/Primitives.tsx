'use client';

import { useState } from 'react';

import { type PrimitiveName } from './data';

import { Intro, PrimitivesNav, Primitive } from './subcomponents/';

const Primitives = () => {
    const [activeTab, setActiveTab] = useState<PrimitiveName>('AI Gateway');

    return (
        <section className='mt-10'>

            <div className='ctn flex flex-col gap-y-16'>

                {/* Intro */}
                <Intro />

                <div className='border-[1.5px] border-light-green-primary'>

                    {/* Primitives Nav */}
                    <PrimitivesNav activeTab={activeTab} setActiveTab={setActiveTab} />

                    {/* Primitive */}
                    <Primitive activeTab={activeTab}  />

                </div>

            </div>

        </section>
    );
};

export default Primitives;