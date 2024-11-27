import React from 'react';
import Banner from './components/Banner';
import Feature from './components/Feature';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';
import { BsCup } from 'react-icons/bs';
import myImage from './assets/images/more/4.png'
import myImage2 from './assets/images/more/5.png'


const Home = () => {
    const Coffees = useLoaderData();

    return (
        <div>

            <Banner></Banner>
            <div className='bg-[#ECEAE3]'>
                <Feature></Feature>
            </div>
            <section className='py-10'>
            <div className='space-y-3' style={{
                backgroundImage: `url(${myImage}), url(${myImage2})`,
                backgroundPosition: 'left top, right bottom',
                backgroundRepeat: 'no-repeat, no-repeat',
                zIndex: 10,
                
            }} >
                <p className='text-center'>--Sip & Savor---</p>
                <h3 className='text-center md:text-3xl text-xl text-[#331A15]'>Our Popular Products</h3>
                <div className='flex items-center justify-center'>
                    <button className='px-4 flex items-center gap-1 text-xl py-2 bg-[#E3B577] border-2 border-black hover:bg-[#331A15] rounded-lg  text-white'>Add Coffee <BsCup size={24} color='#331A15' /></button>
                </div>
               <div className='grid md:grid-cols-2 py-5 -z-50 w-11/12 mx-auto gap-5'>
               {
                    Coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
                }
               </div>
            </div>
            </section>



        </div>
    );
};

export default Home;