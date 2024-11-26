import React from 'react';

const Banner = () => {
    return (
        <div className='bg-banner bg-no-repeat flex items-center justify-center bg-center bg-cover  md:h-[600px] py-10'>
            <div className='w-1/2'>
                <h3 className='md:text-3xl text-white'>Would you like a Cup of Delicious Coffee?</h3>
                <p className='text-white'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className='md:btn-md btn-sm bg-[#E3B577]'>Learn More</button>
            </div>
            <div></div>
        </div>
    );
};

export default Banner;