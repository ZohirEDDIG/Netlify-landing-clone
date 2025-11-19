const Intro = () => {
    return (
        <div className='flex flex-col gap-y-6'>
            
            <h6 className='text-light-green-primary text-xl font-mono font-bold'>PLATFORM</h6>

            <h1 className='text-white text-4xl sm:text-6xl font-bold max-w-[800px]'>Everything you need to ship. Nothing you don’t.</h1>

            <p className='text-light-green-quaternary text-sm sm:text-lg max-w-[600px]'>

                From vibe coding your first app to serving millions of users, 
                Netlify handles the infrastructure so you can focus on building. 
                No DevOps required. No complex setup. No surprise bills when you scale.

            </p>

        </div>
    );
};

export default Intro;