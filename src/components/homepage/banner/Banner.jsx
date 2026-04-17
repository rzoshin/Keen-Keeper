import React from 'react';
import { FiPlus } from 'react-icons/fi';

const Banner = () => {
    return (
        <div className='max-w-[75%] mx-auto text-center pt-20 flex flex-col items-center justify-center'>
            <h1 className='text-5xl font-bold mb-4'>Friends to keep close in your life</h1>
            <p className='mb-8 text-[#64748B] text-base'>
                Your personal shelf of meaningful connections. <br />Browse, tend, and nurture the
                relationships that matter most.
            </p>
            <button className='btn bg-[#244D3F] text-white'><FiPlus />Add a Friend</button>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10'>
                <div className='flex flex-col items-center justify-center p-8 bg-base-100 rounded-lg'><span className='text-[2rem] font-semibold text-[#244D3F] mb-2'>12</span><span className='text-[#64748B] text-lg'>Total Friends</span></div>
                <div className='flex flex-col items-center justify-center p-8 bg-base-100 rounded-lg'><span className='text-[2rem] font-semibold text-[#244D3F] mb-2'>4</span><span className='text-[#64748B] text-lg'>On Track</span></div>
                <div className='flex flex-col items-center justify-center p-8 bg-base-100 rounded-lg'><span className='text-[2rem] font-semibold text-[#244D3F] mb-2'>8</span><span className='text-[#64748B] text-lg'>Need Attention</span></div>
                <div className='flex flex-col items-center justify-center p-8 bg-base-100 rounded-lg'><span className='text-[2rem] font-semibold text-[#244D3F] mb-2'>12</span><span className='text-[#64748B] text-lg'>Interactions This Month</span></div>
            </div>
            <hr className='my-10 border-[#E9E9E9] w-full' />
        </div>
    );
};

export default Banner;