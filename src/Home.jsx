import React from 'react';
import Banner from './components/Banner';
import Feature from './components/Feature';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <div className='bg-[#ECEAE3]'>
                <Feature></Feature>
            </div>

        </div>
    );
};

export default Home;