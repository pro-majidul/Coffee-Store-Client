import React from 'react';
import { IoEye } from 'react-icons/io5';
import { MdDelete, MdEdit } from 'react-icons/md';

const CoffeeCard = ({ coffee }) => {
    console.log(coffee);
    return (
        <div className='bg-[#F5F4F1] p-3 -z-50 opacity-100 flex items-center justify-between'>
            <div>
                <img src={coffee.photo} alt={coffee.name} />
            </div>
            <div>
                <p>Name : {coffee.name}</p>
                <p>Chef : {coffee.suplier}</p>
                <p>Price : {coffee.chef}</p>
            </div>
            <div className='space-y-1'>
                <p className='bg-blue-500  p-1 rounded-lg'><IoEye size={24} color='white' /> </p>
                <p  className="bg-black  p-1 rounded-lg"><MdEdit size={24} color='white' /></p>
               <p  className="bg-red-500  p-1 rounded-lg"> <MdDelete size={24} color='white' /></p>
            </div>
        </div>
    );
};

export default CoffeeCard;