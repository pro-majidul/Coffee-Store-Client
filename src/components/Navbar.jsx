import React from 'react';
import banner from '../assets/images/more/logo1.png'

const Navbar = () => {
    return (
        <div className='bg-bgnav bg-no-repeat bg-cover bg-center py-1'>
            <div className='flex items-center w-4/12 mx-auto'>
                <img className='w-16' src={banner} alt="" />
                <h3 className='text-3xl font-bold text-white'>Espresso Emporium</h3>
            </div>
        </div>
    );
};

export default Navbar;