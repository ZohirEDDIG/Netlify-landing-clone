const Intro = () => {
    return (
        <div className='flex flex-col gap-y-6'>
            
            <h6 className='text-light-green-primary text-xl font-mono font-bold'>Primitives</h6>

            <h1 
                className='text-white text-4xl md:text-5xl elg:text-6xl font-bold 
                max-w-[600px] md:max-w-[700px] elg:max-w-[800px]'
            >
                
                Ready to use building blocks.
            
            </h1>

            <p className='text-light-green-quaternary text-sm sm:text-lg max-w-[600px]'>

                Build APIs, store files, manage data, control performance. 
                No backend setup required—just build and deploy

            </p>

        </div>
    );
};

export default Intro;