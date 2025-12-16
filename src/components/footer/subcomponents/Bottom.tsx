import Link from 'next/link';

const Bottom = () => {
    return (
        <div className='border-t border-gray-500 pt-4 pb-16 flex justify-between'>

            <div className='flex items-center gap-x-4'>

                <Link className='text-gray-500 text-sm' href=''>Trust Center</Link>

                <Link className='text-gray-500 text-sm' href=''>Privacy</Link>

                <Link className='text-gray-500 text-sm' href=''>GDPR/CCPA</Link>

                <Link className='text-gray-500 text-sm' href=''>Abuse</Link>

                <Link className='text-gray-500 text-sm' href=''>Cookie Settings</Link>

            </div>

            <div className='flex flex-col gap-y-2'>

                <span className='text-gray-500 text-sm'>&copy; 2025 Netlify</span>

                <select name='theme' className='bg-dark-green-secondary text-white px-2 py-2 rounded-md border-[1.5px] border-gray-600'>

                    <option value="system">System</option>
                    
                    <option value="dark">Dark</option>

                    <option value="light">Light</option>

                </select>

            </div>

        </div>
    );
};

export default Bottom;