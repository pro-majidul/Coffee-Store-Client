import React from 'react';
import Banner from './components/Banner';
import Feature from './components/Feature';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const Coffees = useLoaderData();
    return (
        <div>

            <Banner></Banner>
            <div className='bg-[#ECEAE3]'>
                <Feature></Feature>
            </div>

            {
                Coffees.map(coffee =><CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
            }

        </div>
    );
};

export default Home;