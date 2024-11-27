import React from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UpdateCoffee = () => {
    return (
        <div className="bg-addCoffee bg-no-repeat bg-cover bg-center p-10">
            <Link to='/' className="flex items-center  py-4"> <FaLongArrowAltLeft />Back To Home </Link>
            <div className="bg-[#F4F3F0] p-10">
                <h3 className="text-xl md:text-3xl font-bold text-[#374151] text-center">Update Existing Coffee Details</h3>
                <p className="w-8/12 text-[#374151] mx-auto text-center py-4">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <form >
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter Coffee Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Chef</span>
                            </label>
                            <input name="chef" type="text" placeholder="Enter Coffee Chef" className="input input-bordered" required />
                        </div> <div className="form-control">
                            <label className="label">
                                <span className="label-text">Suplier</span>
                            </label>
                            <input name="suplier" type="text" placeholder="Enter Coffee suplier" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Test</span>
                            </label>
                            <input name="test" type="text" placeholder="Enter Coffee Test" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input name="category" type="text" placeholder="Enter Coffee Category" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input name="details" type="text" placeholder="Enter Coffee Details" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo-url</span>
                        </label>
                        <input name="photo" type="text" placeholder="Enter Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#D2B48C]">Updated Coffee</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;
