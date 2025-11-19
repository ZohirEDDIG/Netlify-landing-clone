import { Intro, ShipInstantly, BuildAnything, GrowsWithYou } from './subcomponents';

const Platform = () => {
    return (
        <section className='mt-10'>

            <div className='ctn flex flex-col gap-y-16'>

                {/* Intro */}
                <Intro />

                {/* Ship  Instantly */}
                <ShipInstantly />

                {/* Build Anything */}
                <BuildAnything />

                {/* Grows With You */}
                <GrowsWithYou />

            </div>

        </section>
    );
};

export default Platform;