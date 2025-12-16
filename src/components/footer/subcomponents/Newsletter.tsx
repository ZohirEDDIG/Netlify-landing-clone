const Newsletter = () => {
    return (
        <div className='w-fit mx-auto flex flex-col gap-y-4'>

            <h2 className='text-gray-500 text-lg'>Stay up to date with Netlify news</h2>
            
            <div className='flex gap-x-4'>

                <input 
                    className='w-[350px] text-gray-500 p-2 rounded-md border border-gray-500 
                    transition-colors duration-300 ease-in-out focus:text-white focus:border-white
                    focus:placeholder:text-white'
                    type='email' 
                    name='email' 
                    id='email' 
                    placeholder='Email address' />

                <button 
                    className='bg-light-green-primary text-dark-green-quaternary font-semibold 
                    rounded-md px-4'
                    type='button'
                >
                    
                    Subscribe
                
                </button>

            </div>

        </div>
    );
};

export default Newsletter;